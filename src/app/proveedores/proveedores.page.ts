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

  editarProveedor(proveedor: any) {
    this.router.navigate(['/editar', proveedor.id, { module: 'Proveedor' }]);
    this.Proveedores = this.CRUDService.obtener(this.DB);
  }

  borrarProveedor(proveedor: any) {
    this.CRUDService.eliminar(this.DB, proveedor.id);
    this.Proveedores = this.CRUDService.obtener(this.DB);
  }
  
  ngOnInit() {
    this.Proveedores = this.CRUDService.obtener(this.DB);
  }
}