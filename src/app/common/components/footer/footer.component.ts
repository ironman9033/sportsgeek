import { Component, OnInit } from '@angular/core';
import { RA, RU } from '../../constants/roles';
import { LoginStateModel } from '../../model/login/LoginStateModel';
import { LoginstateService } from '../../service/login_state/loginstate.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public loginStateService2: LoginstateService,
  ) { }

  ngOnInit(): void {
  }


  isRoleAdmin() {
    const loginState: LoginStateModel = this.loginStateService2.getLoginState();
    return loginState != null && loginState.role === RA;
  }

  isRoleUser() {
    const loginState: LoginStateModel = this.loginStateService2.getLoginState();
    return loginState != null && loginState.role === RU;
  }


}
