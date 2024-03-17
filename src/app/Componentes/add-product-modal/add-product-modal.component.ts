import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent {
  formularioProductos: FormGroup;

  constructor(private modalController: ModalController, private productService: InventoryService, private fb: FormBuilder, private router: Router) {
    this.formularioProductos = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
      detalles: [''],
      imagen: ['']
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }

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
      const productosLocalStorage = localStorage.getItem('productos');
      let productos = [];
      if (productosLocalStorage !== null) {
        productos = JSON.parse(productosLocalStorage);
      }
      productos.push(producto);

      // Guardar productos en el LocalStorage
      localStorage.setItem('productos', JSON.stringify(productos));

      // Redirigir a la página principal
      this.router.navigate(['/principal']);
    }
  }
}

