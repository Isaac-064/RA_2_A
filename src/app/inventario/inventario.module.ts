import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarioPageRoutingModule } from './inventario-routing.module';

import { InventarioPage } from './inventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarioPageRoutingModule
  ],
  declarations: [InventarioPage]
})
export class InventarioPageModule {}


////////////////////////////////////////////////////////////////
// import { RouterModule } from '@angular/router';
// import { HomePageComponent } from './inventario.page';

// @NgModule({
//   imports: [IonicModule, RouterModule.forChild([{ path: '', component: HomePageComponent }])],
//   declarations: [HomePageComponent],
//   exports: [HomePageComponent],
// })
// export class HomePageModule {}