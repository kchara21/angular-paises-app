import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient ) { }

  private apiURL:string = 'https://restcountries.com/v3.1';
  private apiURLObject:string = 'https://restcountries.com/v2' 

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiURL}/name/${termino}`
    return this.http.get<Country[]>(url);

  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiURL}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url = `${this.apiURL}/region/${region}`
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id:string):Observable<Country>{
    const url = `${this.apiURLObject}/alpha/${id}`
    return this.http.get<Country>(url);
  }

}
