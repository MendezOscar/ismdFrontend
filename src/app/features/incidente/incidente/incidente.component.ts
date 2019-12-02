import { Component, OnInit } from '@angular/core';
import { IncidenteService } from 'src/app/services/incidente/incidente.service';
import { Router } from '@angular/router';
import { Incidente } from 'src/app/models/Incidente';
@Component({
  selector: 'app-incidente',
  templateUrl: './incidente.component.html',
  styleUrls: ['./incidente.component.css']
})
export class IncidenteComponent implements OnInit {
  incidente: Incidente[];

    constructor(private incidenteService: IncidenteService, private router: Router) { }
  
    ngOnInit() {
      this.getIncidente();
    }
  
    getIncidente() {
      this.incidenteService.getIncidente().subscribe(data => {
        this.incidente = data;
        console.log(this.incidente);
      });
    }
  
    crear() {
      this.router.navigate(['crearincidente']);
    }
  
    editar(id: number) {
      this.router.navigate(['editarincidente', id]);
    }
  
    deleteIncidente(id: number) {
      const res = confirm ('Estas seguro de eliminar este item?');
      if (res) {
        this.incidenteService.deleteIncidente(id).subscribe(() => {
          this.getIncidente();
        });
      }
    }
  
  }