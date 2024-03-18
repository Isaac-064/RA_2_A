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
  inventory: any[] = [];
  producto: any;
  id: any;

  constructor(private CRUDService: CRUDService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el ID del producto de los parámetros de la URL
     this.id = this.route.snapshot.paramMap.get('id');
     this.producto = this.CRUDService.buscar('Inventario', this.id);
  }

  guardarCambios(db:string) {
    console.log(this.producto);
    // // Obtener los productos del LocalStorage
    // this.producto = this.CRUDService.buscar(db, this.id);
    // console.log(this.producto);
    // Actualizar el producto en el array de productos
    this.CRUDService.editar(db, this.id, this.producto);
  }

}
