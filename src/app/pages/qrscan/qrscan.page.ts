import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
})
export class QrscanPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, public alertController: AlertController) { }

  ngOnInit() {
  }

  abrirCamaraQr() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.presentAlertConfirm(barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });
  }


  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
