import { Component, OnInit } from '@angular/core';
import { CatalogotecnicoService } from 'src/app/services/catalogotecnico/catalogotecnico.service';
import { Router } from '@angular/router';
import { CatalogoTecnico } from 'src/app/models/CatalogoTecnico';

@Component({
  selector: 'app-crearcatalogotecnico',
  templateUrl: './crearcatalogotecnico.component.html',
  styleUrls: ['./crearcatalogotecnico.component.css']
})
export class CrearcatalogotecnicoComponent implements OnInit {
  catalogoTecnico: CatalogoTecnico;
  idrequerimiento: number;
  nombre: string;
  detalle: string;
  dependencias: string;

  constructor(private catalogoTecnicoService: CatalogotecnicoService, private router: Router) { }

  ngOnInit() {
  }
 
  crear() {
    this.catalogoTecnico = new CatalogoTecnico();
    this.catalogoTecnico.idRequerimiento= this.idrequerimiento;
    this.catalogoTecnico.nombre= this.nombre;
    this.catalogoTecnico.detalle = this.detalle;
    this.catalogoTecnico.dependencias = this.dependencias;

    this.catalogoTecnicoService.createCatalogoTecnico(this.catalogoTecnico).subscribe(() => {
      this.router.navigate(['catalogotecnico']);
    });
  }

  cancel() {
    this.router.navigate(['catalogotecnico']);
  }

}
