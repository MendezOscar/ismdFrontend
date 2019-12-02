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
  constructor(private catalogoTecnicoService: CatalogotecnicoService, private router: Router) { }

  ngOnInit() {
    this.getCatalogoTecnico();
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
      const res = confirm ('Estas seguro de eliminar este item?');
      if (res) {
        this.catalogoTecnicoService.deleteCatalogoTecnico(id).subscribe(() => {
          this.getCatalogoTecnico();
        });
      }
    }
  
  }

