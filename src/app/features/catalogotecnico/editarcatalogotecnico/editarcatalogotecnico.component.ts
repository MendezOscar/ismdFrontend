import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogotecnicoService } from 'src/app/services/catalogotecnico/catalogotecnico.service';
import { CatalogoTecnico } from 'src/app/models/CatalogoTecnico';
import { Requerimiento } from 'src/app/models/Requerimiento';
import { RequerimientoService } from 'src/app/services/requerimiento/requerimiento.service';

@Component({
  selector: 'app-editarcatalogotecnico',
  templateUrl: './editarcatalogotecnico.component.html',
  styleUrls: ['./editarcatalogotecnico.component.css']
})
export class EditarcatalogotecnicoComponent implements OnInit {
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

  constructor(private catalogoTecnicoService: CatalogotecnicoService, private requerimientoService: RequerimientoService,
    private router: Router, private route: ActivatedRoute) { this.catalogoTecnico = new CatalogoTecnico() }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getCatalogoTecnicoById(id);
    this.getNavBar();
    this.getRequerimiento();
  }
  getRequerimiento() {
    this.requerimientoService.getRequerimiento().subscribe(data => {
      this.requerimiento = data;
    });
  }
  getNavBar() {
    this.userType = localStorage.getItem('user');
    if (this.userType === '1') {
      this.admin = true;
    } else if (this.userType === '2') {
      this.dev = true;
    } else if (this.userType === '3') {
      this.client = true;
    }
  }

  getCatalogoTecnicoById(id: number) {
    this.catalogoTecnicoService.getCatalogoTecnicoById(id).subscribe(data => {
      this.catalogoTecnico = data;
    //this.idRequerimiento = this.catalogoTecnico.idRequerimiento;
      this.nombre = this.catalogoTecnico.nombre;
      this.detalle = this.catalogoTecnico.detalle;
      this.dependencias = this.catalogoTecnico.dependencias;
    });
  }

  editar() {
   // this.catalogoTecnico.idRequerimiento = this.idRequerimiento;
              // tslint:disable-next-line: radix
              this.catalogoTecnico.idRequerimiento = parseInt(this.idrequerimiento);
    this.catalogoTecnico.nombre = this.nombre;
    this.catalogoTecnico.detalle = this.detalle;
    this.catalogoTecnico.dependencias = this.dependencias;

    this.catalogoTecnicoService.editCatalogoTecnico(this.catalogoTecnico).subscribe(() => {
      this.router.navigate(['catalogotecnico']);
    });
  }

  cancel() {
    this.router.navigate(['catalogotecnico']);
  }

}