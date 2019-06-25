import { Tag } from "../_model/Tag";
import { Post } from "../_model/Post";

export class TagService {
  data: Tag[];
  tagPosts: Post[];
  constructor() {
    this.data = [
      { id: 1, name: "Cats ", postId: [1, 2] },
      { id: 2, name: "Dogs ", postId: [3] },
      { id: 3, name: "Birds ", postId: [4, 5] },
      { id: 4, name: "Others ", postId: [6] }
    ];
  }
  getAll(): Tag[] {
    return this.data;
  }
  getById(id: number): Tag {
    return this.data.find(tag => tag.id === id);
  }
  getTagsByPostId(postId: number): Tag[] {
    return this.data.filter(tag => {
      return tag.postId.includes(postId);
    });
  }

  getPostsByTagId(tagId: number): Post[] {
    return this.tagPosts.filter(post => {
      return post.TagsId.includes(tagId);
    });
  }
}
