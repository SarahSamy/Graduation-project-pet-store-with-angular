import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/_model/Post';
import { PostsService } from '../../../_services/Posts.service';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss']
})
export class PostListingComponent implements OnInit {

  data: Post[];
  postService: PostsService;
  config: any;
  constructor(test: PostsService) {
    this.postService = test;
    if (!this.data) {

      this.data = this.postService.getAll();
     
    }
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.data.length
    }
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  ngOnInit() {
    if (!this.data) {

      this.data = this.postService.getAll();
    
    }
  }

}


