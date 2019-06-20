
import { Post } from './Post';
export interface Tag {
    id: number;
   name:string;
   post?:Post[];
   postId:number[];


}