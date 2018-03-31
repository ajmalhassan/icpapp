import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  saveToLocal(key, value) {
    this.storage.set(key, value);
  }

  getFromLocal(key) {
    return this.storage.get(key);
  }

  clearDb() {
    this.storage.clear();
  }

}
