/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from '../services/CRUD.service'; // Importa el servicio

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  Inventory: any[] = [];
  DB = 'Inventario';
  
  constructor(private CRUDService: CRUDService, private router: Router) { }

  editarProducto(producto: any) {
    this.router.navigate(['/editar', producto.id, { module: 'Inventario' }]);
    this.Inventory = this.CRUDService.obtener(this.DB);
  }

  borrarProducto(producto: any) {
    this.CRUDService.eliminar(this.DB, producto.id);
    this.Inventory = this.CRUDService.obtener(this.DB);
  }
  
  ngOnInit() {
    this.Inventory = this.CRUDService.obtener(this.DB);
  }
}