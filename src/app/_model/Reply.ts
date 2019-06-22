import { Comment } from './Comment';
import { User } from './User';
import { Post } from './Post';

export interface Reply {
    id: number;
    body:string;
    comment?: Comment;
    commentId: number;
    userId:number;
    user?:User;
    time?:string;
    day?:string;
    month?:string;
    year?:string;


}