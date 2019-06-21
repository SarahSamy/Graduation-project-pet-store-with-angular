import { Component, OnInit,Input } from '@angular/core';
import { UserService } from 'src/app/_services/user.service.service';
import { User } from 'src/app/_model/User';
import { Comment } from 'src/app/_model/Comment';
@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input()comment:Comment;
  commentUser:User;
  userService: UserService;
  constructor(test:UserService) { 
    this.userService=test;
  }

  ngOnInit() {
    this.commentUser=this.userService.getById(this.comment.userId);

  }

}
