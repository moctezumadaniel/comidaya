import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  userName: string = '';
  address: string = '';
  tradename: string = '';
  businessAddress: string = '';
  oldPassword: string = '';
  password: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  constructor() {}

  ngOnInit(): void {}
}
