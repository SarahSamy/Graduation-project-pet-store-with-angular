import { Post } from './Post';
import { User } from './User';

export interface Comment {
    id: number;
    body:string;
    Post?: Post;
    PostId: number;
    userId?:number;
    user?:User;


}