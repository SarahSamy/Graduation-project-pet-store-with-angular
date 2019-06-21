import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/_services/Posts.service';
import { UserService } from 'src/app/_services/user.service.service';
import { TagService } from 'src/app/_services/Tag.service';
import { User } from 'src/app/_model/User';
import { Tag } from 'src/app/_model/Tag';
import { Post } from 'src/app/_model/Post';
import { Comment } from 'src/app/_model/Comment';
import { CommentService } from 'src/app/_services/Comment.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  //addCommentForm:FormGroup;
  route: ActivatedRoute;
  router: Router;
  postUser: User;
  PostId: number;
  Post: Post;
  postTags: Tag[];
  PostComments: Comment[];
  tagService: TagService;
  userService: UserService;
  postService: PostsService;
  commentService: CommentService;
  config: any;
  constructor(private _Activatedroute: ActivatedRoute, test: UserService, tags: TagService, post: PostsService, comments: CommentService) {
    
    this.postService = post;
    this.tagService = tags;
    this.userService = test;
    this.commentService = comments;
    this.PostId = +this._Activatedroute.snapshot.paramMap.get("id");
    this.Post = this.postService.getById(this.PostId);
    this.postUser = this.userService.getById(this.Post.userId);
    this.postTags = this.tagService.getTagsByPostId(this.PostId);
    this.PostComments = this.commentService.getByPostId(this.PostId);
   
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.PostComments.length
    }
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
    console.log(this._Activatedroute.snapshot.paramMap.get("id"))
  }

}
