import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/CRUD.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
})
export class ProveedoresPage implements OnInit {

  Proveedores: any[] = [];
  DB = 'Proveedores';
  
  constructor(private CRUDService: CRUDService, private router: Router) { }

  editarProveedor(proveedor: string) {
    this.router.navigate(['/editar', proveedor]);
    this.Proveedores = this.CRUDService.obtener(this.DB);
  }

  borrarProveedor(proveedor: string) {
    this.CRUDService.eliminar(this.DB, proveedor);
    this.Proveedores = this.CRUDService.obtener(this.DB);
  }
  
  ngOnInit() {
    this.Proveedores = this.CRUDService.obtener(this.DB);
  }
}