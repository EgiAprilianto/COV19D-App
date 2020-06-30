import { Component, OnInit } from '@angular/core';
import { covidApi } from '../covid-api';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {

  ngOnInit() {
  }

  countries: any = null;
  filtredData: any;

  datas: any = null;

  constructor(private data: covidApi,public loadingController: LoadingController) { 
	this.loadingController.create({
      message: 'Please wait...',
      spinner: 'bubbles',
      mode: 'ios',
      // duration: 3000
    }).then((res) => {
      res.present().then(() => {
        this.data.getCountries().subscribe((data)=>{
          this.countries = data;
          this.filtredData = data;
          // positif = this.datas.cases;
          res.dismiss();     
        });
      }, error => {
        console.log(error);
      });
    });
  }
}
