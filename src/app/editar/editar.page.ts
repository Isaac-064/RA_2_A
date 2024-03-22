/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CRUDService } from '../services/CRUD.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
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
    this.CRUDService.editar(this.db, this.id, this.elemento);
  }
}
