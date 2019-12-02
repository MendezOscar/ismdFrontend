import { Component, OnInit } from '@angular/core';
import { RecursocambioService } from 'src/app/services/recursocambio/recursocambio.service';
import { Router } from '@angular/router';
import { RecursoCambio } from 'src/app/models/RecursoCambio';
@Component({
  selector: 'app-recursocambio',
  templateUrl: './recursocambio.component.html',
  styleUrls: ['./recursocambio.component.css']
})
export class RecursocambioComponent implements OnInit {
  recursoCambio: RecursoCambio[];

    constructor(private recursoCambioService: RecursocambioService, private router: Router) { }
  
    ngOnInit() {
      this.getRecursoCambio();
    }
  
    getRecursoCambio() {
      this.recursoCambioService.getRecursoCambio().subscribe(data => {
        this.recursoCambio = data;
        console.log(this.recursoCambio);
      });
    }
  
    crear() {
      this.router.navigate(['crearrecursocambio']);
    }
  
    editar(id: number) {
      this.router.navigate(['editarrecursocambio', id]);
    }
  
    deleteRecursoCambio(id: number) {
      const res = confirm ('Estas seguro de eliminar este item?');
      if (res) {
        this.recursoCambioService.deleteRecursoCambio(id).subscribe(() => {
          this.getRecursoCambio();
        });
      }
    }
  
  }
  
