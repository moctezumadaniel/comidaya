import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  constructor(public profileService: ProfileService) {}

  userNamePlaceholder: string = 'Nombre que utilizaras como cliente';
  addressPlaceholder: string = 'Dirección donde recibiras tu comida';
  tradenamePlaceholder: string = 'Nombre de tu negocio';
  businessAddressPlaceholder: string = 'Dirección de donde enviaras tu comida';
  oldPasswordPlaceholder: string = 'Contraseña anterior';
  newPasswordPlaceholder: string = 'Nueva contrasela';
  confirmNewPasswordPlaceholder: string = 'Confirmar nueva contraseña';

  userName: string = '';
  address: string = '';
  tradename: string = '';
  businessAddress: string = '';
  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  changeValue(event: any) {
    this.profileService.updateValue(event.target.name, event.target.value);
  }

  ngOnInit(): void {}
}
