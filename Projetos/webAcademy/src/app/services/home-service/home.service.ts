import { Injectable } from '@angular/core';
import axios from 'axios';
import { error } from 'console';
import { Observable } from 'rxjs';
import { Alunos } from 'src/app/interfaces/alunos-interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private api:string = "http://localhost:3000"

  constructor() { }
  getAlunos() : Observable<any> {
    let headers = {
      'Content-type': 'application/json',
      'Acess-Control-Allow-Origin' : 'http://localhost:3000/'
    }

    return new Observable((observer) => {
      axios.get(this.api+"/alunos")
        .then((response) => {       //casos de sucesso
          observer.next(response.data);
          observer.complete()
        })
        .catch((error) => {       //casos de erro
          observer.error(error);
        })
    })
  }

  insertAlunos(data:Alunos): Observable<any> {
    return new Observable((observer) =>{
      axios.post(this.api+"/alunos", data)
        .then((response) =>{
          observer.next(response.data)
          observer.complete()

        })
        .catch((error)=> {
          observer.error(error);
        })
    })
  }
}
