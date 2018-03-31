import { ProductProvider } from './../../providers/product/product';
import { ProductPage } from './../product/product';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-listing',
  templateUrl: 'listing.html',
})
export class ListingPage {
  items;
  selectedSurvey;
  currentMonth;
  currentQuarter;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams
  ,private productService: ProductProvider) {
    this.items = [
      {
        "heading": "Rice",
        "data": [
          {
            name: "Long Rice",
            value: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Rice_p1160004.jpg/200px-Rice_p1160004.jpg"
          },
          {
            name: "Short Rice",
            value: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Rice_p1160004.jpg/200px-Rice_p1160004.jpg"
          },
          {
            name: "Broken Rice",
            value: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Rice_p1160004.jpg/200px-Rice_p1160004.jpg"
          }
        ]
      },
      {
        "heading": "Egg",
        "data": [
          {
            name: "Chicken Egg",
            value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk28ZtQNOChpTf1V_1sSZjLR9wdYUQ2M8DDCXoTaHmW-UnxWglmQ"
          },
          {
            name: "Duck Egg",
            value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk28ZtQNOChpTf1V_1sSZjLR9wdYUQ2M8DDCXoTaHmW-UnxWglmQ"
          },
          {
            name: "Quail Egg",
            value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk28ZtQNOChpTf1V_1sSZjLR9wdYUQ2M8DDCXoTaHmW-UnxWglmQ"
          }
        ]
      }
    ];
    this.getProducts();
    this.selectedSurvey = this.navParams.get('selectedSurvey');
    this.currentMonth = this.navParams.get('currentMonth');
    this.currentQuarter = this.navParams.get('currentQuarter');
  }

  getProducts() {
    this.productService.getProductList()
    .then(
      res => this.selectByPhase(res),
      err => console.log(err)
    )
  }

  selectByPhase(res) {
    this.items = res.filter(x => x.phase === this.selectedSurvey);
    console.log('items:', this.items);
  }

  goToProducts(product) {
    this.navCtrl.push(ProductPage, {product: product});
  }

}
