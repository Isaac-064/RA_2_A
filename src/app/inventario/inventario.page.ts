/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../services/inventory.service'; // Importa el servicio

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  newItemName: string | undefined;
  inventory: any[] = [];

  constructor(private inventoryService: InventoryService) { 
    this.getInventory();
  }

  agregarProducto(item: any) {
    const nuevoProducto = { nombre: 'Producto X', cantidad: 10 };
    this.inventoryService.addToInventory({name: this.newItemName});
    this.newItemName = '';
    if (this.newItemName) {
      this.inventoryService.addToInventory({ name: this.newItemName }); // Agrega el nuevo elemento al inventario
      this.newItemName = ''; // Limpia el campo de entrada después de agregar el elemento
      this.inventory = this.inventoryService.getInventory(); // Actualiza el inventario en la página
    }
  }

  getInventory() {
    this.inventory = this.inventoryService.getInventory();
  }

  // Método para eliminar un elemento del inventario
  removeItemFromInventory(index: number) {
    this.inventoryService.removeFromInventory(index);
    this.getInventory(); // Vuelve a cargar el inventario después de eliminar el elemento
  }

  ngOnInit() {
  }

}
