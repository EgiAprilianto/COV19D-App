import { Component, OnInit } from '@angular/core';
import { covidApi } from '../covid-api';
import { LoadingController, ModalController, AlertController  } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ModalPage } from './modal/modal.page';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  ngOnInit() {
  }

  datas: any = null;

  constructor(private data: covidApi,public geocoder: NativeGeocoder, public loadingController: LoadingController, private geolocation: Geolocation, public alertController: AlertController, public modalController: ModalController) { 
    this.loadingController.create({
      message: 'Please wait...',
      spinner: 'bubbles',
      mode: 'ios',
      // duration: 3000
    }).then((res) => {
      res.present().then(() => {

        // this.geolocation.getCurrentPosition().then((resp) => {
        //  // console.log(resp);
        //  // this.data.getCountry(resp.coords.latitude, resp.coords.longitude).subscribe((respon: any) => {
        //  //    var countryName = respon.countryName;
        //  //   this.data.getByCountry(countryName).subscribe((data)=>{
        //  //      this.datas = data;
        //  //      // positif = this.datas.cases;
        //  //      res.dismiss();     
        //  //    });
        //  // })
        //  this.getcountry(resp);
        // }).catch((error) => {
        //   res.dismiss();
        //   var err = error.message;
        //   if (err.match(/denied/)) {
        //     this.alertController.create({
        //       mode: 'ios',
        //       header: 'Error!',
        //       message: 'Cannot get your country. Please enable GPS for this app',
        //       buttons: ['OK']
        //     }).then((ress) => {
        //       ress.present();
        //     });
        //   }
        // });
        this.data.getByCountry('Indonesia').subscribe((data)=>{
          this.datas = data;
          res.dismiss();     
        });

      }, error => {
        console.log(error);
      });
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  // getcountry(pos) {
  //   this.geocoder.reverseGeocode(pos.coords.latitude, pos.coords.longitude).then((res: NativeGeocoderResult[]) => {
  //     console.log(res)
  //   })
  // }

}
