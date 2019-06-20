import { Tag } from '../_model/Tag';


export class TagService {
    data: Tag[];
    constructor() {
        this.data = [
       {id:1,name:"cat care",postId:[1,2]},
       {id:1,name:"dog care",postId:[1,2]},
       {id:1,name:"bird care",postId:[1,2]}
        ]
    }
    getAll(): Tag[] {
        return this.data;
    }
    getById(id: number): Tag {
        return this.data.find((tag) => tag.id === id);
    }
  getTagsByPostId(postId:number):Tag[]{
    return this.data.filter((tag) => {return tag.postId.includes(postId)});  
  }

}
