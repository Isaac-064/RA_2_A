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

  editarPedido(Pedido: any) {
    this.router.navigate(['/editar', Pedido.id]);
    this.Pedidos = this.CRUDService.obtener(this.DB);
  }

  borrarPedido(Pedido: any) {
    this.CRUDService.eliminar(this.DB, Pedido.id);
    this.Pedidos = this.CRUDService.obtener(this.DB);
  }
  
  ngOnInit() {
    this.Pedidos = this.CRUDService.obtener(this.DB);
  }
}