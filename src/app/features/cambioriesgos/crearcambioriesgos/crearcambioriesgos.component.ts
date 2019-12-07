import { Component, OnInit } from '@angular/core';
import { CambioriesgosService } from 'src/app/services/cambioriesgos/cambioriesgos.service';
import { Router } from '@angular/router';
import { CambioRiesgo } from 'src/app/models/CambioRiesgos';
/*import { Riesgo } from 'src/app/models/Riesgo';
import { RiesgoService } from 'src/app/services/riesgo/riesgo.service';*/
@Component({
  selector: 'app-crearcambioriesgos',
  templateUrl: './crearcambioriesgos.component.html',
  styleUrls: ['./crearcambioriesgos.component.css']
})
export class CrearcambioriesgosComponent implements OnInit {

  cambioRiesgos: CambioRiesgo;
 // idRiego: string;
  idRiego: string;
 // riesgo: Riesgo[];

  constructor(private cambioRiesgosService: CambioriesgosService,/* private riesgoService: RiesgoService,*/
     private router: Router) { }

  ngOnInit() {
   // this.getRiesgo();
  }

 /* getRiesgo(){
    this.riesgoService.getRiesgo().subscribe(data => {
      this.riesgo = data;
    });
  }*/

  crear() {
    this.cambioRiesgos = new CambioRiesgo();
    this.cambioRiesgos.idRiego = this.idRiego;

    this.cambioRiesgosService.createCambioRiesgos(this.cambioRiesgos).subscribe(() => {
      this.router.navigate(['cambioriesgos']);
    });
  }

  cancel() {
    this.router.navigate(['cambioriesgos']);
  }

}

