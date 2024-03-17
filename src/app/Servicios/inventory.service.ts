import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private inventoryKey = 'inventory'; // La clave para acceder a los datos en localStorage

  constructor() { }

  // Método para obtener el inventario desde el almacenamiento local
  private getInventoryFromLocalStorage(): any[] {
    const inventoryString = localStorage.getItem(this.inventoryKey);
    return inventoryString ? JSON.parse(inventoryString) : [];
  }

  // Método para guardar el inventario en el almacenamiento local
  private saveInventoryToLocalStorage(inventory: any[]): void {
    localStorage.setItem(this.inventoryKey, JSON.stringify(inventory));
  }

  // Método para crear un nuevo producto
  createProduct(product: any): void {
    const inventory = this.getInventoryFromLocalStorage();
    inventory.push(product);
    this.saveInventoryToLocalStorage(inventory);
  }

  // Método para obtener todos los productos
  getProducts(): any[] {
    return this.getInventoryFromLocalStorage();
  }

  // Método para obtener un producto por su ID
  getProductById(productId: number): any {
    const inventory = this.getInventoryFromLocalStorage();
    return inventory.find(product => product.id === productId);
  }

  // Método para actualizar un producto existente
  updateProduct(product: any): void {
    const inventory = this.getInventoryFromLocalStorage();
    const index = inventory.findIndex(p => p.id === product.id);
    if (index !== -1) {
      inventory[index] = product;
      this.saveInventoryToLocalStorage(inventory);
    }
  }

  // Método para eliminar un producto
  deleteProduct(productId: number): void {
    let inventory = this.getInventoryFromLocalStorage();
    inventory = inventory.filter(product => product.id !== productId);
    this.saveInventoryToLocalStorage(inventory);
  }
}
