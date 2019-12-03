import { Component, OnInit } from '@angular/core';
import { CambiosService } from 'src/app/services/cambios/cambios.service';
import { Router } from '@angular/router';
import { Cambios } from 'src/app/models/Cambios';


@Component({
  selector: 'app-cambios',
  templateUrl: './cambios.component.html',
  styleUrls: ['./cambios.component.css']
})
export class CambiosComponent implements OnInit {

  cambios: Cambios[];
  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private cambiosService: CambiosService, private router: Router) { }

  ngOnInit() {
    this.getCambios();
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

  getCambios() {
    this.cambiosService.getCambios().subscribe(data => {
      this.cambios = data;
      console.log(this.cambios);
    });
  }

  crear() {
    this.router.navigate(['crearcambios']);
  }

  editar(id: number) {
    this.router.navigate(['editarcambios', id]);
  }

  deleteCambios(id: number) {
    const res = confirm('Estas seguro de eliminar este item?');
    if (res) {
      this.cambiosService.deleteCambios(id).subscribe(() => {
        this.getCambios();
      });
    }
  }

}
