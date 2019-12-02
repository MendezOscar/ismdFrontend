import { Component, OnInit } from '@angular/core';
import { PruebasService } from 'src/app/services/pruebas/pruebas.service';
import { Router } from '@angular/router';
import { Pruebas } from 'src/app/models/Pruebas';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  pruebas: Pruebas[];

  constructor(private pruebasService: PruebasService, private router: Router) { }

  ngOnInit() {
    this.getPruebas();
  }

  getPruebas() {
    this.pruebasService.getPruebas().subscribe(data => {
      this.pruebas = data;
      console.log(this.pruebas);
    });
  }

  crear() {
    this.router.navigate(['crearpruebas']);
  }

  editar(id: number) {
    this.router.navigate(['editarpruebas', id]);
  }

  deletePruebas(id: number) {
    const res = confirm ('Estas seguro de eliminar este item?');
    if (res) {
      this.pruebasService.deletePruebas(id).subscribe(() => {
        this.getPruebas();
      });
    }
  }

}