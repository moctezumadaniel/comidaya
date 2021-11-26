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

  userNamePlaceholder: string = 'Nombre que utilizaras como cliente';
  addressPlaceholder: string = 'Dirección donde recibiras tu comida';
  tradenamePlaceholder: string = 'Nombre de tu negocio';
  businessAddressPlaceholder: string = 'Dirección de donde enviaras tu comida';
  oldPasswordPlaceholder: string = 'Contraseña anterior';
  newPasswordPlaceholder: string = 'Nueva contrasela';
  confirmNewPasswordPlaceholder: string = 'Confirmar nueva contraseña';

  constructor() {}

  ngOnInit(): void {}
}
