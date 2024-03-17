import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private dataBase: any;

  constructor() { }

  // Método para obtener el inventario almacenado en el local storage
  obtener(db:string) {
    this.dataBase = localStorage.getItem(db);
    if (this.dataBase !== null) {
      return this.dataBase ? JSON.parse(this.dataBase) : [];
    }
  }

  // Método para agregar un elemento al inventario
  agregar(db:string, item: any) {
    this.dataBase = this.obtener(db);
    this.dataBase.push(item);
    localStorage.setItem(db, JSON.stringify(this.dataBase));
  }

  buscar(db:string, producto: any){
    this.dataBase = this.obtener(db);
    let index = this.dataBase.find((p: any) => p.id === producto);
    return index;
  }

  // Método para actualizar un elemento del inventario
  editar(db:string, id: any, newItem: any) {
    this.dataBase[this.buscar(db, id)] = newItem;
    localStorage.setItem(db, JSON.stringify(this.dataBase));
  }

  // Método para eliminar un elemento del inventario
  eliminar(db:string, producto: any) {
    // Obtener los productos del LocalStorage
    this.dataBase = this.obtener(db);
    this.dataBase = this.dataBase.filter((prod: any) => prod.id !== producto);
    // Guardar el nuevo arreglo de productos en el LocalStorage
    localStorage.setItem(db, JSON.stringify(this.dataBase));
  }
}
