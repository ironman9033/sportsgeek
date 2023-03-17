import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval, Subscription } from 'rxjs';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { SnackbarComponent } from 'src/app/common/components/snackbar/snackbar.component';
import {
  getErrorMessage,
  NO_RESP,
} from 'src/app/common/constants/error-message';
import { teamFlags } from 'src/app/common/constants/links';
import { getSnackbarProperties } from 'src/app/common/constants/snackbar-properties';
import { PublicChatModel } from 'src/app/common/model/chat/public-chat-model';
import { ContestLogModel } from 'src/app/common/model/contest-log/contest-log-model';
import { UserModel } from 'src/app/common/model/user/user-model';
import { ChatService } from 'src/app/common/service/chat-service/chat.service';
import { ContestLogService } from 'src/app/common/service/Contest-Log/contest-log.service';
import { LoginstateService } from 'src/app/common/service/login_state/loginstate.service';
import { UserService } from 'src/app/common/service/user_service/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollBottom') private scrollBottom!: ElementRef;

  iplimage = teamFlags;
  chatForm!: FormGroup;
  chatData!: PublicChatModel;
  getChatData: PublicChatModel[] = [];
  userData!: UserModel;
  messagetxt!: String;
  now: Date = new Date();
  contestLogData: ContestLogModel[] = [];
  private obsmsg!: Subscription;
  newData: PublicChatModel[] = [];
  private obsContestLog!: Subscription;
  newContestLogData: ContestLogModel[] = [];

  tooltip = `Yellow Indicates Changes < 1h,
    Red Indicates Changes < 5m ,
    Blue Indicates Changes > 1h & < 2h,
   Green Indicates Changes > 2h `;

  contestLogColor: any = {
    1: '#ff5349', // if Bet is newer than 5 minutes
    2: 'yellow', // if Bet is newer than 1 hour
    3: 'skyblue', // if Bet is greater than 1 hour and less than 2 hours
    4: '#6FFF00', // if Bet is greater than 1 hour
  };

  constructor(
    private userservice: UserService,
    private fb: FormBuilder,
    private chatservice: ChatService,
    private loginstateservice: LoginstateService,
    private contestLogService: ContestLogService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.chatservice.newMsgRec().subscribe((data) => {
      let n:any = new Date();
      // let n1:any =
      data.chatTimestamp = new Date(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds());
      // console.log('BITCHHHHH '+data.chatTimestamp);

      this.getChatData.push(data);
      // console.log(data);
    });

    this.chatForm = this.fb.group({
      message: ['', [Validators.required]],
    });

    // setInterval(() => {
    //   this.now = new Date();
    // }, 10);

  }

  async ngOnInit() {
    this.userData = await this.getUsers();
    // console.log(this.userData);

    this.getChatData = await this.getMessages();
    let savedData = this.getChatData[this.getChatData.length - 1]?.publicChatId;
    // console.log(this.getChatData);

    this.sortData();

    this.scrollToBottom();

    this.obsmsg = interval(9000000000000000).subscribe(async () => {
    // this.obsmsg = interval(10000).subscribe(async () => {
      this.newData = await this.updateMessagesTimeInterval(savedData);
      // console.log('chat data' + this.newData);
      if (this.newData != null) {
        let updatedData = this.getChatData.concat(this.newData);
        this.getChatData = updatedData.filter(
          (test, index, array) =>
            index ===
            array.findIndex(
              (findId) => findId.publicChatId === test.publicChatId
            )
        );
      }
      const index = this.getChatData.findIndex(
        (publicChatId) => publicChatId.publicChatId == null
      );
      if (index > -1) {
        this.getChatData.splice(index, 1);
      }
    });

    this.contestLogData = await this.getContestLog();
    let savedContestLogData = this.contestLogData[0]?.contestLogId;
    // console.log(this.contestLogData);

    // this.obsContestLog = interval(10000000000).subscribe(async () => {
    this.obsContestLog = interval(9000000000000000).subscribe(async () => {
      this.newContestLogData = await this.updateContestLogAtInterval(savedContestLogData);
      // console.log('contest log data' + this.newContestLogData);
      if (this.newContestLogData.length != 0) {
        let updatedContestLogData = this.contestLogData.concat(
          this.newContestLogData
        );
        this.contestLogData = updatedContestLogData
          .filter(
            (test, index, array) =>
              index ===
              array.findIndex(
                (findId) => findId.contestLogId === test.contestLogId
              )
          )
          .sort((a, b) => b.contestLogId - a.contestLogId);
      }
      // .sort((b,a)=> <any> new Date(b.logTimestamp) - <any> new Date(a.logTimestamp))
    });

    this.chatservice.addUser(this.userData);
  }

  mins!: any;
  diffMins(dateSent: Date) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);
    var diffMs = currentDate.getTime() - dateSent.getTime(); // milliseconds between now & Christmas
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    // console.log('ms'+diffMs,'days'+ diffDays,'hours'+diffHrs,'mins'+diffMins);
    this.mins = diffMins;
    // console.log(diffMins);
    return this.mins;
  }

  hours!: any;
  diffHrs(dateSent: Date) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);
    var diffMs = currentDate.getTime() - dateSent.getTime(); // milliseconds between now & Christmas
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    // console.log(diffHrs);
    this.hours = diffHrs;
    return this.hours;
  }

  days!: any;
  diffDays(dateSent: Date) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);
    var diffMs = currentDate.getTime() - dateSent.getTime(); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    // console.log(diffDays);
    this.days = diffDays;
    return this.days;
  }

  keyUpFunction(event: any) {
    if (event.keyCode === 13 && this.chatForm.dirty) {
      this.callAll();
      this.chatForm.reset();
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollBottom.nativeElement.scrollTop =
        this.scrollBottom.nativeElement.scrollHeight;
    } catch (err) {}
  }

  sortData() {
    return this.getChatData.sort((a, b) => {
      return <any>new Date(a.chatTimestamp) - <any>new Date(b.chatTimestamp);
    });
  }

  loginstate = this.loginstateservice.getLoginState();
  username = this.loginstate?.username;
  userId = this.loginstate?.userId;

  sendMessage() {
    this.chatservice.sendMessage({
      userId: this.userId,
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      message: this.messagetxt,
      profilePicture: this.userData.profilePicture,
      chatTimestamp: this.now,
      status: this.chatData?.status,
    });
  }

  async callAll() {
    this.sendMessage();
    this.saveMesage();
    this.chatForm.reset();
  }

  async getMessages(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    let chatModel: PublicChatModel[] = [];
    let resp = null;
    try {
      resp = await this.chatservice.getAllMessage();
      chatModel = resp.body;
      if (chatModel) {
        return chatModel;
      } else {
        snackbarMsg = NO_RESP;
        panelClass = 'red';
      }
    } catch (ex) {
      snackbarMsg = getErrorMessage(ex);
      panelClass = 'red';
    } finally {
      dialogRef.close();
    }
    if (snackbarMsg) {
      snackbarRef = this.snackbar.openFromComponent(
        SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass)
      );
    }
    return [];
  }

  async updateMessagesTimeInterval(publicChatId: any): Promise<any> {
    let updateChatDataInterval: PublicChatModel[] = [];
    let resp = null;
    resp = await this.chatservice.updateChatInterval(publicChatId);
    updateChatDataInterval = resp.body;
    if (updateChatDataInterval) {
      return updateChatDataInterval;
    }
    return [];
  }

  get form() {
    return this.chatForm.controls;
  }

  reset(field: string) {
    this.form[field].setValue('');
  }

  async saveMesage() {
    if (this.chatForm.valid) {
      // if (!this.chatForm) {
      this.chatData = new PublicChatModel();
      this.chatData.userId = this.userId;
      this.chatData.message = this.form.message.value;
      let resp = null;
      try {
        resp = await this.chatservice.sendPublicChatMessage(this.chatData);
        this.chatData = resp.body;
        // this.getChatData.push(this.chatData);
      } catch (ex) {
        // console.log(ex);
      } finally {
        // console.log('finally block');
      }
      // }
    }
  }

  async getUsers(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    let userModel: UserModel[] = [];
    let resp = null;
    try {
    resp = await this.userservice.getUserById(this.userId);
    userModel = resp.body;
    if (userModel) {
      return userModel;
    }else {
      snackbarMsg = NO_RESP;
      panelClass = 'red';
    }
  } catch (ex) {
    snackbarMsg = getErrorMessage(ex);
    panelClass = 'red';
  } finally {
    dialogRef.close();
  }
  if (snackbarMsg) {
    snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
      getSnackbarProperties(snackbarMsg, panelClass));
  }
    return [];
  }

  async getContestLog(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
    let contestLogModel: ContestLogModel[] = [];
    let resp = null;
    try {
    resp = await this.contestLogService.getAllContestLogForLastDays();
    let temp;
    temp = resp.body;
    let newm = temp.map((m:any)=> {
      let f = m.message.split(' -> ');
      let a = m;
      a.message = f;
      return a;
    });
    contestLogModel = newm;
    // console.log(contestLogModel)
    if (contestLogModel) {
      return contestLogModel.sort(
        (a, b) => <any>new Date(b.logTimestamp) - <any>new Date(a.logTimestamp)
      );
    }else {
      snackbarMsg = NO_RESP;
      panelClass = 'red';
    }
  } catch (ex) {
    snackbarMsg = getErrorMessage(ex);
    panelClass = 'red';
  } finally {
    dialogRef.close();
  }
  if (snackbarMsg) {
    snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
      getSnackbarProperties(snackbarMsg, panelClass));
  }
    return [];
  }

  async updateContestLogAtInterval(contestLogId: any): Promise<any> {
    let updateChatDataInterval: ContestLogModel[] = [];
    let resp = null;
    resp = await this.contestLogService.getAllContestLogAfterId(contestLogId);
    let temp = resp.body;
    let newm = temp.map((m:any)=> {
      let f = m.message.split(' -> ');
      let a = m;
      a.message = f;
      return a;
    });
    updateChatDataInterval = newm;
    if (updateChatDataInterval) {
      return updateChatDataInterval.sort(
        (a, b) => <any>new Date(b.logTimestamp) - <any>new Date(a.logTimestamp)
      );
    }
    return [];
  }
}
