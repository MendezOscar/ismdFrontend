import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto/proyecto.service';
import { Router } from '@angular/router';
import { Proyecto} from 'src/app/models/Proyecto'

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto[];


  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit() {
    this.getProyecto();
  }

  getProyecto() {
    this.proyectoService.getProyecto().subscribe(data => {
      this.proyecto = data;
      console.log(this.proyecto);
    });
  }

  crear() {
    this.router.navigate(['crearproyecto']);
  }

  editar(id: number) {
    this.router.navigate(['editarproyecto', id]);
  }

  deleteProyecto(id: number) {
    const res = confirm ('Estas seguro de eliminar este item?');
    if (res) {
      this.proyectoService.deleteProyecto(id).subscribe(() => {
        this.getProyecto();
      });
    }
  }

}