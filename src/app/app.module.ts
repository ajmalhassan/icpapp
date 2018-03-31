import { SupervisorPage } from './../pages/supervisor/supervisor';
import { ProductPage } from './../pages/product/product';
import { ListingPage } from './../pages/listing/listing';
import { HomePage } from './../pages/home/home';
import { SigninPage } from './../pages/signin/signin';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';

import { MyApp } from './app.component';
import { UserProvider } from '../providers/user/user';
import { ProductProvider } from '../providers/product/product';
import { OfflineProvider } from '../providers/offline/offline';
import { StorageProvider } from '../providers/storage/storage';

@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    HomePage,
    ListingPage,
    ProductPage,
    SupervisorPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    HomePage,
    ListingPage,
    ProductPage,
    SupervisorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ProductProvider,
    Geolocation,
    OfflineProvider,
    StorageProvider,
    Network
  ]
})
export class AppModule {}
