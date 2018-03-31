import { ProductProvider } from './../../providers/product/product';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import moment from 'moment';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage implements OnInit {
  product;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private productService: ProductProvider,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private geolocation: Geolocation) {
      this.product = this.navParams.get('product');
  }

  ngOnInit() {
    console.log('NavParams', this.navParams.data);
  }

  verifyLocation(price, remarks) {
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   console.log(`lat: ${resp.coords.latitude}, long: ${resp.coords.longitude}`);
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
    this.productService.addProduct({
      pcatid: this.product.id,
      date: moment().valueOf(),
      price: price,
      remarks: remarks ? remarks : 'Nil',
      priceType: 'INR'
    })
    .then(
      res => this.goBack(),
      err => this.presentToast()
    )
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'You are offline',
      duration: 3000
    });
    toast.present();
  }

  goBack() {
    this.showAlert()
    this.navCtrl.pop();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Saved!',
      subTitle: 'Your location has been verified',
      buttons: ['OK']
    });
    alert.present();
  }

}
