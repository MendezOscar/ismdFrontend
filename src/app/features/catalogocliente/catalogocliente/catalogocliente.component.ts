import { Component, OnInit } from '@angular/core';
import { CatalogoCliente } from 'src/app/models/CatalogoCliente';
import { CatalogoclienteService } from 'src/app/services/catalogocliente/catalogocliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalogocliente',
  templateUrl: './catalogocliente.component.html',
  styleUrls: ['./catalogocliente.component.css']
})
export class CatalogoclienteComponent implements OnInit {
  catalogoCliente: CatalogoCliente[];

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private catalogoClienteService: CatalogoclienteService, private router: Router) { }

  ngOnInit() {
    this.getCatalogoCliente();
    this.getNavBar();
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

  getCatalogoCliente() {
    this.catalogoClienteService.getCatalogoCliente().subscribe(data => {
      this.catalogoCliente = data;
      console.log(this.catalogoCliente);
    });
  }

  crear() {
    this.router.navigate(['crearcatalogocliente']);
  }

  editar(id: number) {
    this.router.navigate(['editarcatalogocliente', id]);
  }

  deleteCatalogoCliente(id: number) {
    const res = confirm('Estas seguro de eliminar este item?');
    if (res) {
      this.catalogoClienteService.deleteCatalogoCliente(id).subscribe(() => {
        this.getCatalogoCliente();
      });
    }
  }

}