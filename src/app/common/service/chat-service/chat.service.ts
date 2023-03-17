import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chatBaseURL, NodeJSUrl } from '../../constants/http-urls';
import { PublicChatModel } from '../../model/chat/public-chat-model';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // private socket = io('http://localhost:8080',{ transports : ['websocket'] });
  private socket = io(NodeJSUrl,{ transports : ['websocket'] });

  constructor(
    private http: HttpClient,
  ) {  }

  addUser(data:any){
    this.socket.emit('addUser',data);
  }

  // getUsers(data:any){
  //   this.socket.emit('getUsers',data);
  // }

  sendMessage(data:any) {
    this.socket.emit('sendMsg',data);
  }

  newMsgRec(){
    let observable = new Observable<PublicChatModel>(observer=>{
      this.socket.on('newMsg', (data: any)=>{
        observer.next(data);
      });

    });
    return observable;
  }

  async getAllMessage(): Promise<any> {
    return await this.http.get(chatBaseURL + '/last-days/' + 10, { observe: 'response' }).toPromise();
  }

  async updateChatInterval(userId:number): Promise<any> {
    return await this.http.get(chatBaseURL + '/after-id/' + userId, { observe: 'response' }).toPromise();
  }

  async sendPublicChatMessage(chat: PublicChatModel): Promise<any>
  {
    return await this.http.post(chatBaseURL, chat, { observe: 'response' }).toPromise();
  }
}
