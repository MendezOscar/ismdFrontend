import { Component, OnInit } from '@angular/core';
import { CatalogoclienteService } from 'src/app/services/catalogocliente/catalogocliente.service';
import { CatalogoCliente } from 'src/app/models/CatalogoCliente';
import { Router } from '@angular/router';
/*import { CatalogoTecnico } from 'src/app/models/CatalogoTecnico';
import { CatalogotecnicoService } from 'src/app/services/catalogotecnico/catalogotecnico.service';
*/
@Component({
  selector: 'app-crearcatalogocliente',
  templateUrl: './crearcatalogocliente.component.html',
  styleUrls: ['./crearcatalogocliente.component.css']
})
export class CrearcatalogoclienteComponent implements OnInit {
  catalogoCliente: CatalogoCliente;
  idCatalogoTecnico: number;
  //catalogoTecnico: CatalogoTecnico[];
  componente: string;
  funcionalidad: string;
  ayuda: string;
  

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private catalogoClienteService: CatalogoclienteService,/*private catalogoTecnicoService: CatalogotecnicoService,*/
     private router: Router) { }

  ngOnInit() {
    this.getNavBar();
   // this.getCatalogoTecnico();
  }

 /* getCatalogoTecnico() {
    this.catalogoTecnicoService.getCatalogoTecnico().subscribe(data => {
      this.catalogoTecnico = data;
    });
  }*/

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

  crear() {
    this.catalogoCliente = new CatalogoCliente();
  //  this.catalogoCliente.idCatalogoTec = parseInt(this.idCatalogoTecnico);
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
