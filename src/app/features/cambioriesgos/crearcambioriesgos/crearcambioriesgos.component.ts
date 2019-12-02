import { Component, OnInit } from '@angular/core';
import { CambioriesgosService } from 'src/app/services/cambioriesgos/cambioriesgos.service';
import { Router } from '@angular/router';
import { CambioRiesgo } from 'src/app/models/CambioRiesgos';

@Component({
  selector: 'app-crearcambioriesgos',
  templateUrl: './crearcambioriesgos.component.html',
  styleUrls: ['./crearcambioriesgos.component.css']
})
export class CrearcambioriesgosComponent implements OnInit {

  cambioRiesgos: CambioRiesgo;
  idRiesgo: number;

  constructor(private cambioRiesgosService: CambioriesgosService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.cambioRiesgos = new CambioRiesgo();
    this.cambioRiesgos.idRiego = this.idRiesgo;

    this.cambioRiesgosService.createCambioRiesgos(this.cambioRiesgos).subscribe(() => {
      this.router.navigate(['cambioriesgos']);
    });
  }

  cancel() {
    this.router.navigate(['cambioriesgos']);
  }

}

