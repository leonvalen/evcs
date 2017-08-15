import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SwindicadoresService {

  constructor(private http: Http) { }

  getIndicadores(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
