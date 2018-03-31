import { ListingPage } from './../listing/listing';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  currentMonth: String;
  currentQuarter: String;
  selectedSurvey: String;
  surveyList: Object;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController
  ) 
  {
    this.surveyList = {
      'Q1': [
        {
          type: 'radio',
          label: 'Phase 1',
          value: '1',
          checked: true
        }
      ],
      'Q2': [
        {
          type: 'radio',
          label: 'Phase 1',
          value: '1',
          checked: true
        },
        {
          type: 'radio',
          label: 'Phase 2',
          value: '2',
          checked: false
        }
      ],
      'Q3': [
        {
          type: 'radio',
          label: 'Phase 1',
          value: '1',
          checked: true
        }
      ],
      'Q4': [
        {
          type: 'radio',
          label: 'Phase 1',
          value: '1',
          checked: true
        },
        {
          type: 'radio',
          label: 'Phase 2',
          value: '2',
          checked: false
        },
        {
          type: 'radio',
          label: 'Educational',
          value: '3',
          checked: false
        }
      ]
    };

    this.selectedSurvey = '';
  }
  

  ngOnInit() {
    this.getCurrentMonth()
  }

  getCurrentMonth(){
    this.currentMonth = moment().format('MMMM');
    this.currentQuarter = this.getCurrentQuater(this.currentMonth);
  }

  getCurrentQuater(month) {
    console.log("month", month);
    switch(month) {
      case 'April':
      case 'May':
      case 'June': return 'Q1';
      case 'July':
      case 'August':
      case 'September': return 'Q2';
      case 'October':
      case 'November':
      case 'December': return 'Q3';
      case 'January':
      case 'February':
      case 'March': return 'Q4';
    }
  }

  showSurveyType() {
    console.log(this.surveyList);
    let surveyList = this.surveyList;
    let alert = this.alertCtrl.create({
      title: 'Choose select type',
    inputs: surveyList[''+this.currentQuarter],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ok',
        handler: data => {
          this.selectedSurvey = data;
        }
      }
    ]
  });
  alert.present();
  }

  goToListing() {
    this.navCtrl.push(ListingPage, {
      selectedSurvey: this.selectedSurvey,
      currentMonth: this.currentMonth,
      currentQuarter: this.currentQuarter
    });
  }

}
