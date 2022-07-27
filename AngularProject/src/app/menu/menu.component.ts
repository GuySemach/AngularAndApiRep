import { Component, Input, OnInit } from '@angular/core';
import { buttonClickedEnum } from '../app.enums';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  btnClickedEnum:buttonClickedEnum = buttonClickedEnum.home;

  @Input() 
  isLeftMenu: boolean=false;

  constructor(
    private appComponent: AppComponent
  ) { }


  ngOnInit(): void {
  }

  getMainBackColor(){
    let color = 'red';
    if (this.btnClickedEnum == buttonClickedEnum.home) {
      color = 'red';
    } else if (this.btnClickedEnum == buttonClickedEnum.posts) {
        color = 'green';
    } else if (this.btnClickedEnum == buttonClickedEnum.photos) {
      color = 'yellow';
    } else if (this.btnClickedEnum == buttonClickedEnum.contactUs) {
      color = 'lightblue';
    }
    return color;
  }

  getHomeSection(){
    this.appComponent.getHomeSection();

  } 
  
  getPostsSection(){
    this.appComponent.getPostsSection();

  }

  getPhotosSection(){
    this.appComponent.getPhotosSection();
  }

  getContactUsSection(){
    this.appComponent.getContactUsSection();
  }

}
