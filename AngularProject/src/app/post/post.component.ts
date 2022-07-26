import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../interface/ipost';
import {PostService} from '../services/post.service';
import { buttonClickedEnum } from '../app.enums';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: IPost[] = [];
  enumBtn: buttonClickedEnum = buttonClickedEnum.posts;
  maxRowPerPage: number=environment.maxRowPerPage;

  @Input()
  sourceBtn: buttonClickedEnum=buttonClickedEnum.home;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.onGetPosts();
  }

  onGetPosts(): void {
    this.postService.getPosts().subscribe(data=>{
      console.log("Done retrieving Posts");
      this.posts = data;
    })
  }
}
