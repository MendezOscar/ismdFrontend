import { Component, OnInit } from '@angular/core';
import { CambiosService } from 'src/app/services/cambios/cambios.service';
import { Router } from '@angular/router';
import { Cambios } from 'src/app/models/Cambios';

@Component({
  selector: 'app-crearcambios',
  templateUrl: './crearcambios.component.html',
  styleUrls: ['./crearcambios.component.css']
})
export class CrearcambiosComponent implements OnInit {

  cambios: Cambios;
  solicitante: string;
  razon: string;

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;


  constructor(private cambiosService: CambiosService, private router: Router) { }

  ngOnInit() {
    this.getNavBar();
  }

  getNavBar() {
    this.userType = localStorage.getItem('user');
    if (this.userType === '1') {
      this.admin = true;
    } else if (this.userType === '2') {
      this.dev = true;
    } else if (this.userType === '3') {
      this.client = true;
    }
  }

  crear() {
    this.cambios = new Cambios();
    this.cambios.solicitante = this.solicitante;
    this.cambios.razon = this.razon;

    this.cambiosService.createCambios(this.cambios).subscribe(() => {
      this.router.navigate(['cambios']);
    });
  }

  cancel() {
    this.router.navigate(['cambios']);
  }

}

