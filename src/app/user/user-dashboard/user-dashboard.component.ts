import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allteams, chennaiWin, trophy } from 'src/app/common/constants/links';
import { RU } from 'src/app/common/constants/roles';
import { LoginstateService } from 'src/app/common/service/login_state/loginstate.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  trophy = trophy;
  chennai2021 = chennaiWin;
  allteams = allteams;

  constructor(private loginStateService: LoginstateService,
    private router: Router
    ) {
      loginStateService.role = RU;
    }

  ngOnInit(): void {
  }

}
