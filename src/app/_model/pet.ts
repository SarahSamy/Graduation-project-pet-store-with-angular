import { Category } from './category';
import { Type } from './type';


export interface Pet {
    id?: number;
    name?: string;
    age?: number;
    gender?: string;
    type?: Type;
    image?: string;
    category?: Category;

}