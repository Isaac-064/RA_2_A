import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

//Importar las herramientas
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators

}from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //Creamos el primer grupo de Formulario
  formularioLogin: FormGroup /*| undefined*/;
  
  constructor(public fb:FormBuilder, private alertController: AlertController, private router : Router) {
    //Inicializa el formulario
    this.formularioLogin = this.fb.group({
      //Cuerpo de Tabla BD
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }
  //Crear la funcion Obtener  los datos almacenados en el LocalStorge
  async inicio(){
    //Crear variable datos del formulario -- Objetos
    var f = this.formularioLogin.value;
    var usuarioString = localStorage.getItem('usuario');
    
    //Validacion
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      //Checar campos Usuario && Password
      if (usuario.nom == f.nombre && usuario.pass == f.password || f.nombre == "admin" && f.password == "1234") {
        //Comprobar que funcione
        if (f.nombre == "admin" && f.password == 1234) {
          localStorage.setItem('Ingresado', 'admin');
        } else{
          localStorage.setItem('Ingresado', usuario.nom);
        }

        const alert = await this.alertController.create({
          header: 'Login Exitoso',
          message: 'Bienvenido: ' + f.nombre,
          buttons : ['Aceptar']
        });
        await alert.present();
        
        this.router.navigate(['/inicio/inventario']);

      }else{
        console.log("Datos Erroneos");

        //Desarrollar un mensaje de alert
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Usuario y/o contraseña incorrectos',
          buttons : ['Aceptar']
        });
        await alert.present();
        return;
      }
    }else{
       //Manejo de caso cuando no se encuentra el valor en LocalStorage
       
       //Como funcionan los servicios en Ionic CRUD Basico LocalStorage
    }
  }
  
}
