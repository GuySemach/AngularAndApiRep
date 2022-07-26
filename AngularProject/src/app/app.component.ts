import { Component, OnInit } from '@angular/core';
import { IPost } from './interface/ipost';
import { IPhoto } from './interface/iphoto';
import {PostService} from './services/post.service';
import {PhotoService} from './services/photo.service';
import { buttonClickedEnum } from './app.enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  showPosts = true;
  showSlicedPosts = true;
  showPhotos = true;
  showSlicedPhotos = true;
  showContactUs = false;

  btnClickedEnum:buttonClickedEnum = buttonClickedEnum.home;

  title = 'AngularProject';
  someValue: string="";
  posts: IPost[] = [];
  photos: IPhoto[] = [];

  constructor(private postService: PostService, private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.getHomeSection();
  }
  
  getMainBackColor(){
      let color = 'red';
      if (this.btnClickedEnum == buttonClickedEnum.home) {
        color = 'green';
      } else if (this.btnClickedEnum == buttonClickedEnum.posts) {
          color = 'rgb(185, 105, 105)'; // kind of red color
      } else if (this.btnClickedEnum == buttonClickedEnum.photos) {
        color = 'yellow';
      } else if (this.btnClickedEnum == buttonClickedEnum.contactUs) {
        color = 'lightblue';
      }
      return color;
  }

  getHomeSection(){
    this.btnClickedEnum = buttonClickedEnum.home;
    this.showPosts = true;
    this.showPhotos = true;
    this.showContactUs = false;
  } 
  
  getPostsSection(){
    this.btnClickedEnum = buttonClickedEnum.posts;
    this.showPosts = true;
    this.showPhotos = false;
    this.showContactUs = false;
  }

  getPhotosSection(){
    this.btnClickedEnum = buttonClickedEnum.photos;
    this.showPosts = false;
    this.showPhotos = true;
    this.showContactUs = false;

  }

  getContactUsSection(){
    console.log(this.btnClickedEnum);
    this.btnClickedEnum = buttonClickedEnum.contactUs;
    this.showPosts = false;
    this.showPhotos = false;
    this.showContactUs = true;
    console.log(this.btnClickedEnum);

  }
}

