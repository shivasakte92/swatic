import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

  constructor() { }

    ngOnInit(): void {
 
        this.galleryOptions = [
            {
                width: '100%',
                height: '600px',
                thumbnailsColumns: 4,
                thumbnails: false,
                imageAutoPlay: true,
                imageAutoPlayPauseOnHover: true,
                previewAutoPlay: true,
                previewAutoPlayPauseOnHover: true,
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
 
        this.galleryImages = [
            {
                small: 'assets/img/trading.jpg',
                medium: 'assets/img/trading.jpg',
                big: 'assets/img/trading.jpg'
            },
            {
                small: 'assets/img/forwarding.jpg',
                medium: 'assets/img/forwarding.jpg',
                big: 'assets/img/forwarding.jpg'
            },
            {
                small: 'assets/img/warehouse.jpg',
                medium: 'assets/img/warehouse.jpg',
                big: 'assets/img/warehouse.jpg'
            },
            {
                small: 'assets/img/logistics.jpg',
                medium: 'assets/img/logistics.jpg',
                big: 'assets/img/logistics.jpg'
            },
            {
                small: 'assets/img/2.jpeg',
                medium: 'assets/img/2.jpeg',
                big: 'assets/img/2.jpeg'
            }
        ];
    }

}
