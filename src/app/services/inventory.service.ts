import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  // Método para agregar un elemento al inventario
  addToInventory(item: any) {
    let inventory = this.getInventory();
    inventory.push(item);
    localStorage.setItem('inventario', JSON.stringify(inventory));
  }

  // Método para obtener el inventario almacenado en el local storage
  getInventory() {
    let inventory = localStorage.getItem('inventario');
    return inventory ? JSON.parse(inventory) : [];
  }

  // Método para eliminar un elemento del inventario
  removeFromInventory(index: number) {
    let inventory = this.getInventory();
    inventory.splice(index, 1);
    localStorage.setItem('inventario', JSON.stringify(inventory));
  }

  // Método para actualizar un elemento del inventario
  updateInventory(index: number, newItem: any) {
    let inventory = this.getInventory();
    inventory[index] = newItem;
    localStorage.setItem('inventario', JSON.stringify(inventory));
  }
}
