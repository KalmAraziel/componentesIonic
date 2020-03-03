import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  images: string[] = [];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private camera: Camera) { }

  ngOnInit() {
  }


  abrirCamara() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // this.image = 'data:image/jpeg;base64,' + imageData;
      const img = window.Ionic.WebView.convertFileSrc(imageData);
      console.log(img);
      this.images.push(img);
     }, (err) => {
      // Handle error
     });
  }

}
