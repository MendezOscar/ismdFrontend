import { Component, OnInit } from '@angular/core';
import { RiesgoService } from 'src/app/services/riesgo/riesgo.service';
import { Router } from '@angular/router';
import { Riesgo } from 'src/app/models/Riesgo';

@Component({
  selector: 'app-riesgo',
  templateUrl: './riesgo.component.html',
  styleUrls: ['./riesgo.component.css']
})
export class RiesgoComponent implements OnInit {

  riesgo: Riesgo[];

  constructor(private riesgoService: RiesgoService, private router: Router) { }

  ngOnInit() {
    this.getRiesgo();
  }

  getRiesgo() {
    this.riesgoService.getRiesgo().subscribe(data => {
      this.riesgo = data;
      console.log(this.riesgo);
    });
  }

  crear() {
    this.router.navigate(['crearriesgo']);
  }

  editar(id: number) {
    this.router.navigate(['editarriesgo', id]);
  }

  deleteRiesgo(id: number) {
    const res = confirm ('Estas seguro de eliminar este item?');
    if (res) {
      this.riesgoService.deleteRiesgo(id).subscribe(() => {
        this.getRiesgo();
      });
    }
  }

}
