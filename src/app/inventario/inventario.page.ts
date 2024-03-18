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

  inventory: any[] = [];
  
  constructor(private CRUDService: CRUDService, private router: Router) { }

  editarProducto(producto: any) {
    this.router.navigate(['/editar', producto.id]);
    this.inventory = this.CRUDService.obtener('Inventario');
  }

  borrarProducto(producto: any) {
    this.CRUDService.eliminar('inventario', producto.id);
    this.inventory = this.CRUDService.obtener('Inventario');
  }
  
  ngOnInit() {
    this.inventory = this.CRUDService.obtener('Inventario');
  }
}