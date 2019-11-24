import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { Proveedor } from 'src/app/models/Proveedor';

@Component({
  selector: 'app-editarproveedor',
  templateUrl: './editarproveedor.component.html',
  styleUrls: ['./editarproveedor.component.css']
})
export class EditarproveedorComponent implements OnInit {
  proveedor: Proveedor;
  tipo: string;
  nombre: string;
  funcionalidad: string;
  proveedorId: string;

  constructor( private proveedorService: ProveedorService,
     private router: Router, private route: ActivatedRoute)   { 
    this.proveedor=new Proveedor();
  }

      ngOnInit() {
      // tslint:disable-next-line: radix
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.getProveedorById(id); 
    }
  
    getProveedorById(id: number) {
      this.proveedorService.getProveedorById(id).subscribe(data => {
        this.proveedor = data;
        this.nombre = this.proveedor.nombre;
        this.tipo = this.proveedor.tipo;
        this.funcionalidad= this.proveedor.funcionalidad;
      });
    }
  
    editar() {
      this.proveedor.nombre= this.nombre;
      this.proveedor.tipo = this.tipo;
    this.proveedor.funcionalidad= this.funcionalidad;
  
      this.proveedorService.editProveedor(this.proveedor).subscribe(() => {
        this.router.navigate(['proveedor']);
      });
    }
  
    cancel (){
      this.router.navigate(['proveedor']);
    }
  
  }
