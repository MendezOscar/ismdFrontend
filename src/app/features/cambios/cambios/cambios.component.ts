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

  cambios:Cambios[];
  
  constructor(private cambiosService: CambiosService, private router: Router) { }

  ngOnInit() {
    this.getCambios();
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
    const res = confirm ('Estas seguro de eliminar este item?');
    if (res) {
      this.cambiosService.deleteCambios(id).subscribe(() => {
        this.getCambios();
      });
    }
  }

}
