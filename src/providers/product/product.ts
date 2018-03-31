import { StorageProvider } from './../storage/storage';
import { OfflineProvider } from './../offline/offline';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  baseURL= 'http://192.168.43.254:8000';
  authToken = localStorage.getItem('authToken');
  headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization':'JWT '+this.authToken})

  constructor(public http: HttpClient, 
    private offlineService: OfflineProvider,
    private storageService: StorageProvider,
    public toastCtrl: ToastController) {
    console.log('Hello UserProvider Provider');
  }

  getProductList() {
      return this.http.get(`${this.baseURL}/products/listproducts/`, {headers: this.headers}).toPromise();
  }

  addProduct(newProd: object) {
    return this.http.post(`${this.baseURL}/products/updateproduct/`, newProd , {headers: this.headers}).toPromise();
  }

}

