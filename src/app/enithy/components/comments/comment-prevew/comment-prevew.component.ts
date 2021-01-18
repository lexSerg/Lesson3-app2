import { Component, Input,} from '@angular/core';
import { Comment } from 'src/app/enithy/models/Comment';

@Component({
  selector: 'app-comment-prevew',
  templateUrl: './comment-prevew.component.html',
  styleUrls: ['./comment-prevew.component.css']
})
export class CommentPrevewComponent{
  @Input()
  comment : Comment;
  constructor() { }
}
