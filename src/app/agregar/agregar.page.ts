import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from '../services/CRUD.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  formularioInventario: FormGroup;
  formularioProveedores: FormGroup;
  formularioPedidos: FormGroup;
  formularioInformes: FormGroup;
  formulario: any;
  dataBase: any;
  producto: any;
  id: any;

  constructor(private CRUDService: CRUDService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.formularioInventario = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
      detalles: [''],
      imagen: ['']
    });
    this.formularioProveedores = this.fb.group({
      nombre: ['', Validators.required],
      contacto: ['', Validators.required],
      detalles: ['', Validators.required],
      imagen: ['']
    });
    this.formularioPedidos = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
      detalles: ['']
    });
    this.formularioInformes = this.fb.group({
      nombre: ['', Validators.required],
      detalles: ['', Validators.required],
      imagen: ['']
    });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    // Obtener el ID del producto de los parámetros de la URL
    this.id = this.route.snapshot.paramMap.get('module');
    
  }

  guardarProducto() {
    switch(this.id){
      case 'Inventario':
        this.formulario = this.formularioInventario
      break
      case 'Proveedor':
        this.formulario = this.formularioProveedores
      break
      case 'Pedido':
        this.formulario = this.formularioPedidos
      break
      case 'Informe':
        this.formulario = this.formularioInformes
      break
    }

    if (this.formulario.valid) {
      // Generar un ID único para el producto
      const id = '_' + Math.random().toString(36).substr(2, 9);

      switch(this.id){
        case 'Inventario':
          // Obtener los valores del formulario Inventario
          const Inventario = {
            id: id,
            nombre: this.formularioInventario.value.nombre,
            precio: this.formularioInventario.value.precio,
            cantidad: this.formularioInventario.value.cantidad,
            detalles: this.formularioInventario.value.detalles,
            imagen: this.formularioInventario.value.imagen
          };

          // Obtener productos del LocalStorage y agregar el nuevo producto
          this.dataBase = this.CRUDService.obtener('Inventario');
          // Guardar productos en el LocalStorage
          this.CRUDService.agregar('Inventario', Inventario);
        break
        case 'Proveedor':
          // Obtener los valores del formulario Inventario
          const Proveedores = {
            id: id,
            nombre: this.formularioProveedores.value.nombre,
            contacto: this.formularioProveedores.value.contacto,
            detalles: this.formularioProveedores.value.detalles,
            imagen: this.formularioProveedores.value.imagen
          };

          // Obtener productos del LocalStorage y agregar el nuevo producto
          this.dataBase = this.CRUDService.obtener('Proveedores');
          // Guardar productos en el LocalStorage
          this.CRUDService.agregar('Proveedores', Proveedores);
        break
        case 'Pedido':
          // Obtener los valores del formulario Inventario
          const Pedidos = {
            id: id,
            nombre: this.formularioPedidos.value.nombre,
            precio: this.formularioPedidos.value.precio,
            cantidad: this.formularioPedidos.value.cantidad,
            detalles: this.formularioPedidos.value.detalles
          };

          // Obtener productos del LocalStorage y agregar el nuevo producto
          this.dataBase = this.CRUDService.obtener('Pedidos');
          // Guardar productos en el LocalStorage
          this.CRUDService.agregar('Pedidos', Pedidos);
        break
        case 'Informe':
          // Obtener los valores del formulario Inventario
          const Informes = {
            id: id,
            nombre: this.formularioInformes.value.nombre,
            detalles: this.formularioInformes.value.detalles,
            imagen: this.formularioInformes.value.imagen
          };

          // Obtener productos del LocalStorage y agregar el nuevo producto
          this.dataBase = this.CRUDService.obtener('Informes');
          // Guardar productos en el LocalStorage
          this.CRUDService.agregar('Informes', Informes);
        break
      }
    }
  }
}