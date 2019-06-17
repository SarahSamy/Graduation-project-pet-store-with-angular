import { Comment } from './Comment';
import { User } from './User';

export interface Reply {
    id: number;
    body:string;
    comment?: Comment;
    commentId: number;
    userId:number;
    user?:User;


}