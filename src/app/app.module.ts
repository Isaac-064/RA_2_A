import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './Componentes/app.component';
import { AppRoutingModule } from './app-routing.module';

import { CRUDService } from './services/CRUD.service'; // Importa el servicio

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [CRUDService], // Declara el servicio
  bootstrap: [AppComponent],
})
export class AppModule {}
