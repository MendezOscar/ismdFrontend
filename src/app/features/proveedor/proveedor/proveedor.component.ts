import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/Proveedor';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  proveedor: Proveedor[];

  constructor(private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit() {
    this.getProveedor();
  }

  getProveedor() {
    this.proveedorService.getProveedor().subscribe(data => {
      this.proveedor = data;
      console.log(this.proveedor);
    });
  }

  crear() {
    this.router.navigate(['crearproveedor']);
  }

  editar(id: number) {
    this.router.navigate(['editarproveedor', id]);
  }

  deleteModeloEntrega(id: number) {
    const res = confirm ('Estas seguro de eliminar este item?');
    if (res) {
      this.proveedorService.deleteProveedor(id).subscribe(() => {
        this.getProveedor();
      });
    }
  }

}

