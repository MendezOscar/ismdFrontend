import { Component, OnInit } from '@angular/core';
import { CambioriesgosService } from 'src/app/services/cambioriesgos/cambioriesgos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CambioRiesgo } from 'src/app/models/CambioRiesgos';

@Component({
  selector: 'app-editarcambioriesgos',
  templateUrl: './editarcambioriesgos.component.html',
  styleUrls: ['./editarcambioriesgos.component.css']
})
export class EditarcambioriesgosComponent implements OnInit {

  cambioRiesgos: CambioRiesgo;
  IdRiesgo: number;


  constructor(private cambioRiesgosService: CambioriesgosService, private router: Router,
              private route: ActivatedRoute) {
                this.cambioRiesgos = new CambioRiesgo();
              }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getCambioRiesgosById(id);
  }

  getCambioRiesgosById(id: number) {
    this.cambioRiesgosService.getCambioRiesgosById(id).subscribe(data => {
      this.cambioRiesgos = data;
      this.IdRiesgo = this.cambioRiesgos.idRiego;
    });
  }

  editar() {
    this.cambioRiesgos.idRiego = this.IdRiesgo;

    this.cambioRiesgosService.editCambioRiesgos(this.cambioRiesgos).subscribe(() => {
      this.router.navigate(['cambioriesgos']);
    });
  }

  cancel (){
    this.router.navigate(['cambioriesgos']);
  }

}
