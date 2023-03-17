import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserModel } from 'src/app/common/model/user/user-model';
import { UserService } from 'src/app/common/service/user_service/user.service';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { GetUser } from '../../actions/user/user.action';

export class userStateModel {
  user!: UserModel[];
  userLoaded!: boolean;
  selectedUser!: UserModel;
}

@State<userStateModel>({
  name: 'allusers',
  defaults: {
    user: [],
    userLoaded: false,
    selectedUser: null!,
  },
})
@Injectable()
export class UserState {
  constructor(private userservice: UserService,private dialog: MatDialog) {}

  @Selector()
  static getUserData(userstatemodel: userStateModel) {
    return userstatemodel.user;
  }

  @Selector()
  static UserLoaded(userstatemodel: userStateModel) {
    return userstatemodel.userLoaded;
  }

  @Action(GetUser)
  getUsers({ getState, setState }: StateContext<userStateModel>) {
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    return this.userservice.getAllUserNGXS().pipe(
      tap((res) => {
        const state = getState();
        setState({
          ...state,
          user: res,
          userLoaded: true,
        });
        dialogRef.close();
      })
    );
  }
}
