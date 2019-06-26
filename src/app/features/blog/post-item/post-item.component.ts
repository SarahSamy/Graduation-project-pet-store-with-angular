import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, HostBinding, HostListener, Input } from "@angular/core";
import { Post } from "../../../_model/Post";
import { UserService } from "src/app/_services/user.service.service";
import { User } from "src/app/_model/User";
import { Tag } from "src/app/_model/Tag";
import { TagService } from "src/app/_services/Tag.service";
import { CommentService } from "src/app/_services/Comment.service";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.scss"]
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  username: string;
  postUser: User;
  postTags: Tag[];
  postCommentsCount: number;
  commentService: CommentService;
  tagService: TagService;
  userService: UserService;
  constructor(test: UserService, tags: TagService, comment: CommentService) {
    this.userService = test;
    this.tagService = tags;
    this.commentService = comment;
  }
  ngOnInit() {
    this.postUser = this.userService.getById(this.post.userId);
    this.username = this.postUser.firstName;
    this.postCommentsCount = this.commentService.getByPostId(this.post.id).length;
    this.postTags = this.tagService.getTagsByPostId(this.post.id);
  }
}
