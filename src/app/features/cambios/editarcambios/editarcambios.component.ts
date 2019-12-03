import { Component, OnInit } from '@angular/core';
import { CambiosService } from 'src/app/services/cambios/cambios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cambios } from 'src/app/models/Cambios';

@Component({
  selector: 'app-editarcambios',
  templateUrl: './editarcambios.component.html',
  styleUrls: ['./editarcambios.component.css']
})
export class EditarcambiosComponent implements OnInit {

  cambios: Cambios;
  solicitante: string;
  razon: string;

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private CambiosService: CambiosService, private router: Router,
    private route: ActivatedRoute) {
    this.cambios = new Cambios();
  }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getCambiosById(id);
    this.getNavBar();
  }

  getNavBar() {
    this.userType =  localStorage.getItem('user');
    if (this.userType === '1') {
      this.admin = true;
    } else if (this.userType === '2') {
      this.dev = true;
    } else if (this.userType === '3') {
      this.client = true;
    }
  }

  getCambiosById(id: number) {
    this.CambiosService.getCambiosById(id).subscribe(data => {
      this.cambios = data;
      this.solicitante = this.cambios.solicitante;
      this.razon = this.cambios.razon;
    });
  }

  editar() {
    this.cambios.solicitante = this.solicitante;
    this.cambios.razon = this.razon;


    this.CambiosService.editCambios(this.cambios).subscribe(() => {
      this.router.navigate(['cambios']);
    });
  }

  cancel() {
    this.router.navigate(['cambios']);
  }

}
