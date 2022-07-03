import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

    

    @Output() onEnter:EventEmitter<string> = new EventEmitter(); //Evento onEnter, puede ser cualquier nombre
    @Output() onDebounce:EventEmitter<string> = new EventEmitter(); // SE EMITE CUANDO LA PERSONA DEJA DE ESCRIBIR

    @Input() placeholder:string = '';

    debouncer: Subject<string> = new Subject();
    termino:string = '';

    ngOnInit(): void {
      this.debouncer
      .pipe(debounceTime(300))
      .subscribe(resp=>{
        this.onDebounce.emit(resp);
       
      });
    }

    buscar(){
        this.onEnter.emit(this.termino);
    }
    
    teclaPresionada(){
     this.debouncer.next(this.termino);
    }


}
