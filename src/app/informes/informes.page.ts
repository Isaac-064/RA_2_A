import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../services/CRUD.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
})
export class InformesPage implements OnInit {

  Informes: any[] = [];
  DB = 'Informes';
  
  constructor(private CRUDService: CRUDService, private router: Router) { }

  editarInforme(Informe: string) {
    this.router.navigate(['/editar', Informe]);
    this.Informes = this.CRUDService.obtener(this.DB);
  }

  borrarInforme(Informe: string) {
    this.CRUDService.eliminar(this.DB, Informe);
    this.Informes = this.CRUDService.obtener(this.DB);
  }
  
  ngOnInit() {
    this.Informes = this.CRUDService.obtener(this.DB);
  }

}
