import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Post } from "src/app/_model/Post";
import { PostsService } from "src/app/_services/Posts.service";
import { TagService } from "src/app/_services/Tag.service";
import { Tag } from "src/app/_model/Tag";
import { Router } from "@angular/router";
import { User } from "src/app/_model/User";
import { UserService } from "src/app/_services/user.service.service";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"]
})
export class AddPostComponent implements OnInit {
  post: Post;
  tags: Tag[];
  addPostForm: FormGroup;
  loginUser: User;
  id: number;
  now: Date = new Date();
  newPost: Post = {
    image: "../../../../assets/images/blog/adorable-animal-black-and-white-825947.jpg",
    day: "",
    id: 0,
    time: "",
    month: "",
    year: "",
    userId: 0,
    body: "",
    title: "",
    TagsId: []
  };
  constructor(private PostService: PostsService, private TagService: TagService, private router: Router, private userService: UserService) {
    this.id = this.PostService.getAll().length + 1;
    this.loginUser = this.userService.loginUser;
    this.tags = this.TagService.getAll();
  }

  ngOnInit() {
    this.addPostForm = new FormGroup({
      postId: new FormControl(this.id),
      title: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      tag: new FormControl(),
      body: new FormControl("", Validators.required)
    });

    this.tags = this.TagService.getAll();
  }
  onSubmit() {
    if (this.addPostForm.valid && this.loginUser) {
      this.newPost.body = (this.addPostForm.get("body") as FormControl).value;
      this.newPost.title = (this.addPostForm.get("title") as FormControl).value;
      this.newPost.id = this.id;
      this.newPost.TagsId = this.addPostForm.controls.tag.value;
      this.newPost.User = this.loginUser;
      this.newPost.userId = this.loginUser.id;
      this.newPost.time = this.now.toLocaleTimeString();
      this.newPost.day = this.now.getDate() + "";
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      this.newPost.month = monthNames[this.now.getMonth()];
      this.newPost.year = this.now.getFullYear() + "";
      console.log(this.addPostForm);
      this.post = this.addPostForm.value;
      this.PostService.addPost(this.newPost);
      this.router.navigate(["/Blog"]); //in future work
    }
  }
}
