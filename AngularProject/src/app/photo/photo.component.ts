import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from '../interface/iphoto';
import {PhotoService} from '../services/photo.service';
import { buttonClickedEnum } from '../app.enums';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photos',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photos: IPhoto[] = [];
  enumBtn: buttonClickedEnum = buttonClickedEnum.photos;
  maxRowPerPage: number=environment.maxRowPerPage;

  @Input()
    sourceBtn: buttonClickedEnum=buttonClickedEnum.home;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.onGetPhotos();
  }

  onGetPhotos(): void {
    this.photoService.getPhotos().subscribe(data=>{
      this.photos = data;
    });
  }

  onGetPhotosByAlbumId(albumId: number): void {
    this.photoService.getAlbumById(albumId).subscribe(data=>{
      this.photos = data;
    });
  }

  getAlbumById(event: any) {
    this.onGetPhotosByAlbumId(event);
  }
}
