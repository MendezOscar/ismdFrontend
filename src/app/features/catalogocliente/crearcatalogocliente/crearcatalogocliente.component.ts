import { Component, OnInit } from '@angular/core';
import {CatalogoclienteService} from 'src/app/services/catalogocliente/catalogocliente.service';
import {CatalogoCliente} from 'src/app/models/CatalogoCliente';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crearcatalogocliente',
  templateUrl: './crearcatalogocliente.component.html',
  styleUrls: ['./crearcatalogocliente.component.css']
})
export class CrearcatalogoclienteComponent implements OnInit {
  catalogoCliente: CatalogoCliente;
  idCatalogoTecnico: number;
  componente: string;
  funcionalidad: string;
  ayuda: string;

  constructor(private catalogoClienteService: CatalogoclienteService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.catalogoCliente = new CatalogoCliente();
    this.catalogoCliente.idCatalogoTec = this.idCatalogoTecnico;
    this.catalogoCliente.componente = this.componente;
    this.catalogoCliente.funcionalidad = this.funcionalidad;
    this.catalogoCliente.ayuda = this.ayuda;

    this.catalogoClienteService.createCatalogoCliente(this.catalogoCliente).subscribe(() => {
      this.router.navigate(['catalogocliente']);
    });
  }

  cancel() {
    this.router.navigate(['catalogocliente']); 
  }

}
