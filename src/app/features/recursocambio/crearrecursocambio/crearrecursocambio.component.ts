import { Component, OnInit } from '@angular/core';
import { RecursocambioService } from 'src/app/services/recursocambio/recursocambio.service';
import { Router } from '@angular/router';
import { RecursoCambio } from 'src/app/models/RecursoCambio';
@Component({
  selector: 'app-crearrecursocambio',
  templateUrl: './crearrecursocambio.component.html',
  styleUrls: ['./crearrecursocambio.component.css']
})
export class CrearrecursocambioComponent implements OnInit {

  recursoCambio: RecursoCambio;
  recursoId: number;

  constructor(private recursoCambioService: RecursocambioService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.recursoCambio = new RecursoCambio();
    this.recursoCambio.recursoId = this.recursoId;

    this.recursoCambioService.createRecursoCambio(this.recursoCambio).subscribe(() => {
      this.router.navigate(['recursocambio']);
    });
  }

  cancel() {
    this.router.navigate(['recursocambio']);
  }
 
}