import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userName: string = '';
  address: string = '';
  tradename: string = '';
  businessAddress: string = '';
  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  updateValue(name: string, value: string) {
    console.log(name, value);
    switch (name) {
      case 'userName':
        this.userName = value;
        break;
      case 'address':
        this.address = value;
        break;
      case 'tradename':
        this.tradename = value;
        break;
      case 'businessAddress':
        this.businessAddress = value;
        break;
      case 'oldPassword':
        this.oldPassword = value;
        break;
      case 'newPassword':
        this.newPassword = value;
        break;
      case 'confirmNewPassword':
        this.confirmNewPassword = value;
        break;
      default:
        return;
    }
  }
}
