import { Component, OnInit,Input } from '@angular/core';
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
  constructor(test:PostsService) {
   this.postService=test;
  }

  ngOnInit() {
    if (!this.data) {
    
      this.data = this.postService.getAll();
    }
  }

}


