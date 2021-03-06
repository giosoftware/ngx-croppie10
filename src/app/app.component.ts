import {Component, ViewChild, OnInit} from '@angular/core';
import {CropperComponent, CropperOptions} from '../../projects/ngx-croppie/src/lib/cropper/cropper.component';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works';
  @ViewChild('angularCropper', {static: false}) ngxCroppie: CropperComponent;
  config: CropperOptions = {
    viewport: {
      width_percent: 50, height_percent: 100, type: 'square'
    }
  };
  imageUrl: any = 'https://fengyuanchen.github.io/cropperjs/images/picture.jpg';
  resultat: any;

  ngOnInit(): void {
  }

  crop(): void {
    this.ngxCroppie.getResult().then((arg) => {
      this.resultat = arg;
    });
  }
}
