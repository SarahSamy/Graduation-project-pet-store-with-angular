import { Tag } from "../_model/Tag";

export class TagService {
  data: Tag[];
  constructor() {
    this.data = [
      { id: 1, name: "Cats ", postId: [1, 2] },
      { id: 2, name: "Dogs ", postId: [3] },
      { id: 3, name: "Birds ", postId: [4, 5] },
      { id: 4, name: "others ", postId: [6] }
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
}
