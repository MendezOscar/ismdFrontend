import { Component, OnInit } from '@angular/core';
import { CatalogotecnicoService } from 'src/app/services/catalogotecnico/catalogotecnico.service';
import { Router } from '@angular/router';
import { CatalogoTecnico } from 'src/app/models/CatalogoTecnico';
@Component({
  selector: 'app-catalogotecnico',
  templateUrl: './catalogotecnico.component.html',
  styleUrls: ['./catalogotecnico.component.css']
})
export class CatalogotecnicoComponent implements OnInit {
  catalogoTecnico: CatalogoTecnico[];
  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private catalogoTecnicoService: CatalogotecnicoService, private router: Router) { }

  ngOnInit() {
    this.getCatalogoTecnico();
    this.getNavBar();
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

  getCatalogoTecnico() {
    this.catalogoTecnicoService.getCatalogoTecnico().subscribe(data => {
      this.catalogoTecnico = data;
      console.log(this.catalogoTecnico);
    });
  }

  crear() {
    this.router.navigate(['crearcatalogotecnico']);
  }

  editar(id: number) {
    this.router.navigate(['editarcatalogotecnico', id]);
  }

  deleteCatalogoTecnico(id: number) {
    const res = confirm('Estas seguro de eliminar este item?');
    if (res) {
      this.catalogoTecnicoService.deleteCatalogoTecnico(id).subscribe(() => {
        this.getCatalogoTecnico();
      });
    }
  }

}

