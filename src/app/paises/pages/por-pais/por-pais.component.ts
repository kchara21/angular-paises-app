import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li{
    cursor: pointer;
  }
  `
  ]
})
export class PorPaisComponent  {

  termino:string = '';
  error:boolean = false;
  paises:Country[] = [];
  paisesSugeridos:Country[] = [];
  mostrarSugerencias:boolean = false;

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.mostrarSugerencias = false;
    this.error = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
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
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(termino)
    .subscribe(
      paises=>{
      this.paisesSugeridos = paises.splice(0,5); // Solo 3 paises sugeridos
    },
    (err)=>{
      this.paisesSugeridos = [];
    }
    )

    //CREAR SUGERENCIAS
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
    this.mostrarSugerencias = false;
  }

}
