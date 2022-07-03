import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  constructor() { }

  @Input() paises:Country[] = [];
 

  ngOnInit(): void {
  }

}