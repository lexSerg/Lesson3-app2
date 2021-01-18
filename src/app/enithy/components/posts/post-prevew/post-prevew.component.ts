import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/enithy/models/Post';

@Component({
  selector: 'app-post-prevew',
  templateUrl: './post-prevew.component.html',
  styleUrls: ['./post-prevew.component.css']
})
export class PostPrevewComponent {
  @Input()
  post:Post;
  constructor() {}
}
