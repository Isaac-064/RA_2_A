/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
// detalle-producto.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  inventory: any[] = [];
  producto: any;
  id: any;

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    // Obtener el ID del producto de los parámetros de la URL
     this.id = this.route.snapshot.paramMap.get('id');
     this.producto = this.inventoryService.buscar('inventario', this.id);
  }

  guardarCambios(db:string) {
    console.log(this.producto);
    // Obtener los productos del LocalStorage
    this.producto = this.inventoryService.buscar(db, this.id);
    console.log(this.producto);
    // Actualizar el producto en el array de productos
    this.inventoryService.editar(db, this.id, this.producto);
  }
}
