/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../services/inventory.service'; // Importa el servicio

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  inventory: any[] = [];
  

  constructor(private inventoryService: InventoryService, private router: Router) { }

  editarProducto(producto: any) {
    this.router.navigate(['/detalle-producto', producto.id]);
    this.inventory = this.inventoryService.obtener('inventario');
  }

  borrarProducto(producto: any) {
    this.inventoryService.eliminar('inventario', producto.id);
    this.inventory = this.inventoryService.obtener('inventario');
  }
  
  ngOnInit() {
    this.inventory = this.inventoryService.obtener('inventario');
  }

}