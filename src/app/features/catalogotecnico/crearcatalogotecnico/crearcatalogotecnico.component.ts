import { Component, OnInit } from '@angular/core';
import { CatalogotecnicoService } from 'src/app/services/catalogotecnico/catalogotecnico.service';
import { Router } from '@angular/router';
import { CatalogoTecnico } from 'src/app/models/CatalogoTecnico';
import { Requerimiento } from 'src/app/models/Requerimiento';
import { RequerimientoService } from 'src/app/services/requerimiento/requerimiento.service';
@Component({
  selector: 'app-crearcatalogotecnico',
  templateUrl: './crearcatalogotecnico.component.html',
  styleUrls: ['./crearcatalogotecnico.component.css']
})
export class CrearcatalogotecnicoComponent implements OnInit {
  catalogoTecnico: CatalogoTecnico;
  idrequerimiento: string;
  requerimiento: Requerimiento[];

  nombre: string;
  detalle: string;
  dependencias: string;

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private catalogoTecnicoService: CatalogotecnicoService,private requerimientoService: RequerimientoService,
     private router: Router) { }

  ngOnInit() {
    this.getNavBar();
    this.getRequerimiento();

  }

  getRequerimiento() {
    this.requerimientoService.getRequerimiento().subscribe(data => {
      this.requerimiento = data;
    });
  }


  getNavBar() {
    this.userType =  localStorage.getItem('user');
    if (this.userType === '1') {
      this.admin = true;
    } else if (this.userType === '2') {
      this.dev = true;
    } else if (this.userType === '3') {
      this.client = true;
    }
  }
 
  crear() {
    this.catalogoTecnico = new CatalogoTecnico();
           // tslint:disable-next-line: radix
           this.catalogoTecnico.idRequerimiento = parseInt(this.idrequerimiento);
   // this.catalogoTecnico.idRequerimiento= this.idrequerimiento;
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
