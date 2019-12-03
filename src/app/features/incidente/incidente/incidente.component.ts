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

  userType: string;
  admin: boolean;
  dev: boolean;
  client: boolean;

  constructor(private incidenteService: IncidenteService, private router: Router) { }

  ngOnInit() {
    this.getIncidente();
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
    const res = confirm('Estas seguro de eliminar este item?');
    if (res) {
      this.incidenteService.deleteIncidente(id).subscribe(() => {
        this.getIncidente();
      });
    }
  }

}