import { Component, OnInit, Input } from "@angular/core";
import { TagService } from "src/app/_services/Tag.service";
import { Tag } from "src/app/_model/Tag";
import { Post } from "src/app/_model/Post";
import { PostsService } from "src/app/_services/Posts.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tag-listing",
  templateUrl: "./tag-listing.component.html",
  styleUrls: ["./tag-listing.component.scss"]
})
export class TagListingComponent implements OnInit {
  data: Tag[];
  tagPosts: Post[];
  @Input() postData: Post[];

  config: any;
  tageService: TagService;
  postService: PostsService;
  constructor(tags: TagService, posts: PostsService, private router: Router) {
    this.tageService = tags;
    this.postService = posts;
    if (!this.data) {
      this.data = this.tageService.getAll();
    }
  }

  ngOnInit() {
    if (!this.data) {
      this.data = this.tageService.getAll();
    }
  }

  // getPotsByTagId(tagId: number) {
  //   this.postData = this.tageService.getPostsByTagId(tagId);
  //   this.config = {
  //     itemsPerPage: 6,
  //     currentPage: 1,
  //     totalItems: this.data.length
  //   };
  // }
}
