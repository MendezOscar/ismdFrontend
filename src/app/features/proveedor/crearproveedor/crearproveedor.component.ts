import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/Proveedor';

@Component({
  selector: 'app-crearproveedor',
  templateUrl: './crearproveedor.component.html',
  styleUrls: ['./crearproveedor.component.css']
})
export class CrearproveedorComponent implements OnInit {
  proveedor: Proveedor;
  nombre: string;
  tipo: string;
  funcinalidad: string;
  constructor(private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    this.proveedor = new Proveedor();
    this.proveedor.nombre= this.nombre;
    this.proveedor.tipo = this.tipo;
    this.proveedor.funcionalidad = this.funcinalidad;

    this.proveedorService.createProveedor(this.proveedor).subscribe(() => {
      this.router.navigate(['proveedor']);
    });
  }

  cancel() {
    this.router.navigate(['proveedor']);
  }

}

