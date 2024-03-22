/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CRUDService } from '../services/CRUD.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  elemento: any;
  db: string = "";
  id: any;
  modulo: any;

  constructor(private CRUDService: CRUDService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el modulo a trabajar de la URL
    this.modulo = this.route.snapshot.paramMap.get('module');
    // Obtener el ID del elemento desde la URL
    this.id = this.route.snapshot.paramMap.get('id');
    switch(this.modulo){
      case 'Inventario':
        this.db = "Inventario";
      break
      case 'Proveedor':
        this.db = "Proveedores";
      break
      case 'Pedido':
        this.db = "Pedidos";
      break
      case 'Informe':
        this.db = "Informes";
      break
    }
    this.elemento = this.CRUDService.buscar(this.db, this.id);
  }

  guardarCambios() {
    // Obtener el elemento del LocalStorage
    this.elemento = this.CRUDService.buscar(this.db, this.id);
  }
}
