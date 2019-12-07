import { Component, OnInit } from '@angular/core';
import { RequerimientoService } from 'src/app/services/requerimiento/requerimiento.service';
import { Router } from '@angular/router';
import { Requerimiento } from 'src/app/models/Requerimiento';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-requerimiento',
  templateUrl: './requerimiento.component.html',
  styleUrls: ['./requerimiento.component.css']
})
export class RequerimientoComponent implements OnInit {
  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;
  requerimiento: Requerimiento[];

  constructor(private requerimientoService: RequerimientoService, private router: Router) { }

  ngOnInit() {
    this.getRequerimiento();
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
    const res = confirm('Estas seguro de eliminar este item?');
    if (res) {
      this.requerimientoService.deleteRequerimiento(id).subscribe(() => {
        this.getRequerimiento();
      });
    }
  }

}