import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  baseURL= 'http://192.168.43.254:8000';
  headers = new HttpHeaders({'Content-Type':'application/json'})

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  login(cred: object) {
    console.log(`cred: ${JSON.stringify(cred)}`);
    return this.http.post(`${this.baseURL}/accounts/login/`, cred , {headers: this.headers}).toPromise();
  }

}
