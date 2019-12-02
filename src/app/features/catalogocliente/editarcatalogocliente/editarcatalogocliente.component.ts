import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogoclienteService } from 'src/app/services/catalogocliente/catalogocliente.service';
import { CatalogoCliente } from 'src/app/models/CatalogoCliente';
@Component({
  selector: 'app-editarcatalogocliente',
  templateUrl: './editarcatalogocliente.component.html',
  styleUrls: ['./editarcatalogocliente.component.css']
})
export class EditarcatalogoclienteComponent implements OnInit {
  catalogoCliente: CatalogoCliente;
  idCatalogoTecnico: number;
  componente: string;
  funcinalidad: string;
  ayuda: string;

    constructor( private catalogoClienteService: CatalogoclienteService, 
      private router: Router, private route: ActivatedRoute) { this.catalogoCliente= new CatalogoCliente() }
  
    ngOnInit() {
          // tslint:disable-next-line: radix
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.getCatalogoClienteById(id); 
    }
  
      getCatalogoClienteById(id: number) {
        this.catalogoClienteService.getCatalogoClienteById(id).subscribe(data => {
          this.catalogoCliente = data;
          this.idCatalogoTecnico = this.catalogoCliente.idCatalogoTec;
          this.componente = this.catalogoCliente.componente;
          this.funcinalidad= this.catalogoCliente.funcionalidad;
          this.ayuda= this.catalogoCliente.ayuda;
        });
      }
    
      editar() {
        this.catalogoCliente.idCatalogoTec= this.idCatalogoTecnico;
        this.catalogoCliente.componente= this.componente;
        this.catalogoCliente.funcionalidad = this.funcinalidad;
      this.catalogoCliente.ayuda= this.ayuda;
    
        this.catalogoClienteService.editCatalogoCliente(this.catalogoCliente).subscribe(() => {
          this.router.navigate(['catalogocliente']);
        });
      }
    
      cancel (){
        this.router.navigate(['catalogocliente']);
      }
    
    }