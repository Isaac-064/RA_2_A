import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuarioNombre: string | any;

  constructor(public alertController: AlertController, private router: Router) {}

  async openNotifications() {
    const alert = await this.alertController.create({
      header: 'Configurar Notificaciones',
      message: 'Aquí puedes configurar tus notificaciones.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async logout() {
    // Aquí debes implementar la lógica de cierre de sesión
    localStorage.removeItem('Ingresado');
    this.router.navigate(['/login']);
    const alert = await this.alertController.create({
      header: 'Cierre de sesion Exitoso',
      message: 'Adios: ' + this.usuarioNombre,
      buttons : ['Aceptar']
    });
    await alert.present();
  }

  ngOnInit() {
    var usuario = localStorage.getItem('Ingresado');
    switch(usuario) {
      case "admin":
        this.usuarioNombre = "admin";
        break;
      case "user":
        var usuarioName = localStorage.getItem('usuario');
        if (usuarioName !== null) {
          this.usuarioNombre = JSON.parse(usuarioName).nom;
        }
        break;
    }
  }

}
