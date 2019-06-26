import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/_model/Post";
import { PostsService } from "../../../_services/Posts.service";
import { TagService } from "src/app/_services/Tag.service";
import { Tag } from "src/app/_model/Tag";
import { User } from "src/app/_model/User";
import { UserService } from "src/app/_services/user.service.service";

@Component({
  selector: "app-post-listing",
  templateUrl: "./post-listing.component.html",
  styleUrls: ["./post-listing.component.scss"]
})
export class PostListingComponent implements OnInit {
  data: Post[];
  data1: Post[];
  tags: Tag[];
  filterData: Post[];
  userService: UserService;
  loginUser: User;
  postService: PostsService;
  tagService: TagService;
  config: any;
  constructor(test: PostsService, tags: TagService, user: UserService) {
    this.postService = test;
    this.userService = user;

    this.loginUser = this.userService.loginUser;
    this.tagService = tags;
    if (!this.data) {
      this.data = this.postService.getAll();
      this.tags = this.tagService.getAll();
    }

    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.filterData ? this.filterData.length : this.data.length
    };
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnInit() {
    if (!this.data) {
      this.data = this.postService.getAll();
    }
  }
  filterPosts(tagId: number) {
    this.data = this.postService.getAll();
    this.data = this.postService.findPostByTag(tagId);
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.filterData ? this.filterData.length : this.data.length
    };
  }
}
