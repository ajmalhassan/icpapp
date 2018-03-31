import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';

/*
  Generated class for the OfflineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OfflineProvider {
  disconnectSubscription;
  connectSubscription;

  constructor(public http: HttpClient, private network: Network) {
    console.log('Hello OfflineProvider Provider');
    // watch network for a disconnect
  }

  isDisconnected() {
    return this.disconnectSubscription = this.network.onDisconnect().toPromise();
  }

  isConnected() {
    // watch network for a connection
    return this.connectSubscription = this.network.onConnect().toPromise();
  }


}
