import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Observable } from 'rxjs';
// import { RandomUserService } from './services/services.component'

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

  constructor(private http:HttpClient  ) { }
  getData():Observable<any>
  {
    let url="https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url)
  }
}
