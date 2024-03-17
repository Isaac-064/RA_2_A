import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from '../services/CRUD.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  formularioProductos: FormGroup;
  dataBase: any;

  constructor(private CRUDService: CRUDService, private fb: FormBuilder, private router: Router) {
    this.formularioProductos = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
      detalles: [''],
      imagen: ['']
    });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  guardarProducto() {
    if (this.formularioProductos.valid) {
      // Generar un ID único para el producto
      const id = '_' + Math.random().toString(36).substr(2, 9);

      // Obtener los valores del formulario
      const producto = {
        id: id,
        nombre: this.formularioProductos.value.nombre,
        precio: this.formularioProductos.value.precio,
        cantidad: this.formularioProductos.value.cantidad,
        detalles: this.formularioProductos.value.detalles,
        imagen: this.formularioProductos.value.imagen
      };

      // Obtener productos del LocalStorage y agregar el nuevo producto
      this.dataBase = this.CRUDService.obtener('inventario');
      if(this.dataBase == null){
        localStorage.setItem('inventario', "");
      }
      // Guardar productos en el LocalStorage
      this.CRUDService.agregar('inventario', producto);
    }
  }
}