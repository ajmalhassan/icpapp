import { SupervisorPage } from './../supervisor/supervisor';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from './../home/home';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  userId;
  password;
  token;

  constructor(
    public navCtrl: NavController,
    private userService: UserProvider,
    private alertCtrl: AlertController,
    private geolocation: Geolocation
  ) {

    this.showLocation();

  }

  showLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(`lat: ${resp.coords.latitude}, long: ${resp.coords.longitude}`);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  setToken(token) {
    if(token.token) {
      localStorage.setItem('authToken', token.token)
      this.navCtrl.push(HomePage);
    }
    else {
      this.showAlert('Authentication Error', 'Invalid username or password')
    }
  }

  login():void {
    if(this.userId === "supervisor" && this.password === "super") {
      this.navCtrl.push(SupervisorPage)
    }
    else {
      const cred = {username: this.userId, password: this.password};
    this.userService.login(cred)
    .then(
      (res) => { this.setToken(res)},
      error => this.showAlert(`${error.status === 0 ? 'No Internet': error.status} Error`, error.status === 0 ? 'Check your internet connection': error.statusText),
    )
    }
    
  }

  showAlert(errTitle, errMsg) {
    let alert = this.alertCtrl.create({
      title: errTitle,
      subTitle: errMsg,
      buttons: ['OK']
    });
    alert.present();
  }


}

