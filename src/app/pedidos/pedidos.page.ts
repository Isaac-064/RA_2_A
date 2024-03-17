import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/CRUD.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  Pedidos: any[] = [];
  DB = 'Pedidos';
  
  constructor(private CRUDService: CRUDService, private router: Router) { }

  editarPedido(Pedido: string) {
    this.router.navigate(['/editar', Pedido]);
    this.Pedidos = this.CRUDService.obtener(this.DB);
  }

  borrarPedido(Pedido: string) {
    this.CRUDService.eliminar(this.DB, Pedido);
    this.Pedidos = this.CRUDService.obtener(this.DB);
  }
  
  ngOnInit() {
    this.Pedidos = this.CRUDService.obtener(this.DB);
  }
}