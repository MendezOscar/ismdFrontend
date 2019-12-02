import { Component, OnInit } from '@angular/core';
import { CambiosService } from 'src/app/services/cambios/cambios.service';
import { Router } from '@angular/router';
import { Cambios } from 'src/app/models/Cambios';

@Component({
  selector: 'app-crearcambios',
  templateUrl: './crearcambios.component.html',
  styleUrls: ['./crearcambios.component.css']
})
export class CrearcambiosComponent implements OnInit {

  cambios:Cambios
  solicitante: string;
  razon: string;


  constructor(private cambiosService: CambiosService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.cambios = new Cambios();
    this.cambios.solicitante = this.solicitante;
    this.cambios.razon=this.razon;

    this.cambiosService.createCambios(this.cambios).subscribe(() => {
      this.router.navigate(['cambios']);
    });
  }

  cancel() {
    this.router.navigate(['cambios']);
  }

}

