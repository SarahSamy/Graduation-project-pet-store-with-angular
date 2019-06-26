import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
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
  route: ActivatedRoute;
  errorMessage:string;
  router: Router;
  postUser: User;
  PostId: number;
  Post: Post;
  loginUser:User;
  postTags: Tag[];
  PostComments: Comment[];
  AllComments: Comment[];
  tagService: TagService;
  userService: UserService;
  postService: PostsService;
  commentService: CommentService;
  config: any;
  addCommentForm: FormGroup;
  newComment: Comment={PostId:0,day:"",id:0,time:"",month:"",year:"",userId:0,body:""};
   now: Date = new Date();
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
    this.AllComments = this.commentService.getAll();
    this.loginUser=this.userService.loginUser;
    this.addCommentForm = new FormGroup({
      'comment': new FormControl('', [Validators.required,Validators.minLength(3)]),
      
    });
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
  
  }
  onSubmit() {
    if (this.addCommentForm.valid) {
    this.newComment.body = (this.addCommentForm.get('comment') as FormControl).value;
    this.newComment.id = this.AllComments.length+1;
    this.newComment.PostId=this.PostId;
    this.newComment.user=this.loginUser;
    this.newComment.userId=this.loginUser.id;
    this.newComment.time=this.now.toLocaleTimeString();
    this.newComment.day=this.now.getDate()+"";
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    this.newComment.month= monthNames[this.now. getMonth()];
    this.newComment.year= this.now.getFullYear()+"";
  this.commentService.addComment(this.newComment);
  this.PostComments=this.commentService.getByPostId(this.PostId);

  this.config = {
    itemsPerPage: 2,
    currentPage: 1,
    totalItems: this.PostComments.length
  }
  this.addCommentForm.reset();}
  else{
   
    Object.keys(this.addCommentForm.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.addCommentForm.get(key).errors;
      if (controlErrors != null) {
            Object.keys(controlErrors).forEach(keyError => {
            });
          }
        });
  }

   

}
}