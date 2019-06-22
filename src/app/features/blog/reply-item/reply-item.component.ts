import { Component, OnInit,Input } from '@angular/core';
import { Reply } from 'src/app/_model/Reply';
import { User } from 'src/app/_model/user';
import { UserService } from 'src/app/_services/user.service.service';
import { ReplyService } from 'src/app/_services/reply.service';

@Component({
  selector: 'app-reply-item',
  templateUrl: './reply-item.component.html',
  styleUrls: ['./reply-item.component.scss']
})
export class ReplyItemComponent implements OnInit {

  @Input() reply: Reply;
  replyUser: User;
  userService: UserService;
  commentReplies: Reply[];
  replyService: ReplyService;
  constructor(test: UserService) {
    this.userService = test;

  }

  ngOnInit() {
    this.replyUser = this.userService.getById(this.reply.userId);
   

  }
}
