import { Component, OnInit } from '@angular/core';
import { RequerimientoService } from 'src/app/services/requerimiento/requerimiento.service';
import { Router } from '@angular/router';
import { Requerimiento } from 'src/app/models/Requerimiento';
@Component({
  selector: 'app-requerimiento',
  templateUrl: './requerimiento.component.html',
  styleUrls: ['./requerimiento.component.css']
})
export class RequerimientoComponent implements OnInit {

    requerimiento: Requerimiento[];
  
    constructor(private requerimientoService: RequerimientoService, private router: Router) { }
  
    ngOnInit() {
      this.getRequerimiento();
    }
  
    getRequerimiento() {
      this.requerimientoService.getRequerimiento().subscribe(data => {
        this.requerimiento = data;
        console.log(this.requerimiento);
      });
    }
  
    crear() {
      this.router.navigate(['crearrequerimiento']);
    }
  
    editar(id: number) {
      this.router.navigate(['editarrequerimiento', id]);
    }
  
    deleteRequerimiento(id: number) {
      const res = confirm ('Estas seguro de eliminar este item?');
      if (res) {
        this.requerimientoService.deleteRequerimiento(id).subscribe(() => {
          this.getRequerimiento();
        });
      }
    }
  
  }