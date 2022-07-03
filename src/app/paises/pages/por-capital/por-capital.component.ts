import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino:string = '';
  error:boolean = false;
  paises:Country[] = [];

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.error = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino)
    .subscribe(
      res=>{
    
      this.paises = res;
      },
      
      (err)=>{
      this.error = true;
      this.paises = [];
      }
    )
  
  }


  
  sugerencias(termino:string){
    this.error = false;

    //CREAR SUGERENCIAS
  }
  

  ngOnInit(): void {
  }

}
