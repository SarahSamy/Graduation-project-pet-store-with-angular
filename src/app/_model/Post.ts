import { User } from './user';
import { Tag } from './Tag';

export interface Post {
    id: number;
    title: string;
    body: string;
    User?:User;
    userId:number;
    Tags?:Tag[];
    TagsId:number[];
}