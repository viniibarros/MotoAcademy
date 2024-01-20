import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

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
      axios.get(this.api,{headers})
        .then((response) => {
          observer.next(response.data);
          observer.complete()
        })
        .catch((error) => {
          observer.error(error);
        })
    })
  }

}
