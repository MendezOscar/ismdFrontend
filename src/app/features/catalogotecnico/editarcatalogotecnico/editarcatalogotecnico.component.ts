import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogotecnicoService } from 'src/app/services/catalogotecnico/catalogotecnico.service';
import { CatalogoTecnico } from 'src/app/models/CatalogoTecnico';

@Component({
  selector: 'app-editarcatalogotecnico',
  templateUrl: './editarcatalogotecnico.component.html',
  styleUrls: ['./editarcatalogotecnico.component.css']
})
export class EditarcatalogotecnicoComponent implements OnInit {
  catalogoTecnico: CatalogoTecnico;
  idRequerimiento: number;
  nombre: string;
  detalle: string;
  dependencias: string;

  constructor( private catalogoTecnicoService: CatalogotecnicoService, 
    private router: Router, private route: ActivatedRoute) { this.catalogoTecnico= new CatalogoTecnico() }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getCatalogoTecnicoById(id); 
  }

    getCatalogoTecnicoById(id: number) {
      this.catalogoTecnicoService.getCatalogoTecnicoById(id).subscribe(data => {
        this.catalogoTecnico = data;
        this.idRequerimiento = this.catalogoTecnico.idRequerimiento;
        this.nombre = this.catalogoTecnico.nombre;
        this.detalle= this.catalogoTecnico.detalle;
        this.dependencias= this.catalogoTecnico.dependencias;
      });
    }
  
    editar() {
      this.catalogoTecnico.idRequerimiento= this.idRequerimiento;
      this.catalogoTecnico.nombre= this.nombre;
      this.catalogoTecnico.detalle = this.detalle;
    this.catalogoTecnico.dependencias= this.dependencias;
  
      this.catalogoTecnicoService.editCatalogoTecnico(this.catalogoTecnico).subscribe(() => {
        this.router.navigate(['catalogotecnico']);
      });
    }
  
    cancel (){
      this.router.navigate(['catalogotecnico']);
    }
  
  }