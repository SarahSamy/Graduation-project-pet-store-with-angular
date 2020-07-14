import { User } from './User';
import { Tag } from './Tag';

export interface Post {
    id: number;
    title: string;
    body: string;
    User?:User;
    userId:number;
    Tags?:Tag[];
    TagsId:number[];
    image:string;
    time?:string;
    day?:string;
    month?:string;
    year?:string;
  
}