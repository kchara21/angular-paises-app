import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country ; //El signo de admiracion es para que TS confie en mi, puede ser NULL pero estara bien
  constructor(
    private activateRoute:ActivatedRoute,
    private paisService:  PaisService
    ) { }

  //ActivateRoute: Ideal par a Suscribirse a cualquier cambio del URL
  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id})=>this.paisService.getPaisPorAlpha(id))
    )
    .subscribe(pais => this.pais = pais);

  }

}
