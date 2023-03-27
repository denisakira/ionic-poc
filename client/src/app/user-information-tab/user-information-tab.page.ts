import { UserService } from './../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-information-tab',
  templateUrl: './user-information-tab.page.html',
  styleUrls: ['./user-information-tab.page.scss'],
})
export class UserInformationTabPage implements OnInit {
  public users$ = this.userService.getUsers();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  public ionViewWillEnter(): void {
    this.users$ = this.userService.getUsers();
  }

}
