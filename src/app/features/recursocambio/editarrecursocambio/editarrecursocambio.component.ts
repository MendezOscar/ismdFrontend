import { Component, OnInit } from '@angular/core';
import { RecursocambioService } from 'src/app/services/recursocambio/recursocambio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecursoCambio } from 'src/app/models/RecursoCambio';
@Component({
  selector: 'app-editarrecursocambio',
  templateUrl: './editarrecursocambio.component.html',
  styleUrls: ['./editarrecursocambio.component.css']
})
export class EditarrecursocambioComponent implements OnInit {
    recursoCambio: RecursoCambio;
    recursoId: number;
    recursoCambioId: number;
  
    constructor(private recursoCambioService: RecursocambioService, private router: Router,
                private route: ActivatedRoute) {
                  this.recursoCambio = new RecursoCambio(); 
                }
  
    ngOnInit() {
      // tslint:disable-next-line: radix
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.getRecursoCambioById(id);
    } 
  
    getRecursoCambioById(id: number) {
      this.recursoCambioService.getRecursoCambioById(id).subscribe(data => {
        this.recursoCambio = data;
        this.recursoId = this.recursoCambio.recursoId;
      });
    }
  
    editar() {
      this.recursoCambio.recursoId = this.recursoId;
  
      this.recursoCambioService.editRecursoCambio(this.recursoCambio).subscribe(() => {
        this.router.navigate(['recursocambio']);
      });
    }
  
    cancel (){
      this.router.navigate(['recursocambio']);
    }
  
  }
  