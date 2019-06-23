import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/_services/user.service.service';
import { User } from 'src/app/_model/User';
import { Comment } from 'src/app/_model/Comment';
import { Reply } from 'src/app/_model/Reply';
import { ReplyService } from 'src/app/_services/reply.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment;
  commentUser: User;
  showReply: boolean;
  userService: UserService;
  commentReplies: Reply[];
  replyService: ReplyService;
  loginUser: User;
  newReply: Reply = { commentId: 0, day: "", id: 0, time: "", month: "", year: "", userId: 0, body: "" };;
  AllReplies: Reply[];
  addReplyForm: FormGroup;
  now: Date = new Date();
  constructor(test: UserService, reply: ReplyService) {
    this.userService = test;
    this.showReply = false;
    this.replyService = reply;
    this.loginUser = this.userService.loginUser;
    this.AllReplies = this.replyService.getAll();
    this.addReplyForm = new FormGroup({
      'reply': new FormControl('', [Validators.required, Validators.minLength(3)]),

    });
  }

  ngOnInit() {
    this.commentUser = this.userService.getById(this.comment.userId);
    this.commentReplies = this.replyService.getByCommentId(this.comment.id);

  }
  onSubmit() {
    if (this.addReplyForm.valid) {
      this.newReply.body = (this.addReplyForm.get('reply') as FormControl).value;
      this.newReply.id = this.AllReplies.length + 1;
      this.newReply.commentId = this.comment.id;
      this.newReply.user = this.loginUser;
      this.newReply.userId = this.loginUser.id;
      this.newReply.time = this.now.toLocaleTimeString();
      this.newReply.day = this.now.getDate()+ "";
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      this.newReply.month = monthNames[this.now.getMonth()];
      this.newReply.year = this.now.getFullYear() + "";
      this.replyService.addReply(this.newReply);
      this.commentReplies = this.replyService.getByCommentId(this.comment.id);


      this.addReplyForm.reset();
    }
    else {

    }



  }

}
