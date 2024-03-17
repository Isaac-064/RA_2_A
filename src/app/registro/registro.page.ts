/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro : FormGroup | any;

  constructor(public fb : FormBuilder, private alertController: AlertController, private router : Router) {
    this.formularioRegistro = this.fb.group({
      //Creacion de tabla
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'conpassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  //Implementar Metodos -- LocalStorage
  async registrar() {
    //console.log('Datos Guardados');
    
    //Decalarar una variable formulario -- obtener los registros html
    var f = this.formularioRegistro.value;

    //Validacion
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Favor de rellenar todos los campos',
        buttons : ['Aceptar']
      });
      await alert.present();
      return;
    }
    if(this.formularioRegistro.valid){
      if(f.password !== f.conpassword){
        const alert = await this.alertController.create({
          header: 'Validacion de contraseña incorrecta',
          message: 'Escribe correctamente tu contraseña',
          buttons : ['Aceptar']
        });
        await alert.present();
        return;
      }
      //JSON -- Objetos
      var usuario = {
        //key : valor
        nom : f.nombre,
        pass : f.password,
        conpass : f.conpassword
      }

      //Agregamos el diccionario a la base de datos
      localStorage.setItem('usuario', JSON.stringify(usuario));

      const alert = await this.alertController.create({
        header: 'Usuario Registrado',
        buttons : ['Ir al Login']
      });
      await alert.present();
      this.router.navigate(['/login']);
    }
  }
}
