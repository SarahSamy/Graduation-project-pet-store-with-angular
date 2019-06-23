import { Pet } from './Pet';
import { userGroup } from './userGroup';

export interface User{
    id?: number ;
    firstName?: string ;
    lastName?: string ;
    email:string;
    password:string;
    birthDate?:string;
    gender?: string;
    // pets?:Pet[];
    userGroup?:userGroup;
    userGroupId:number;
    image?:string;
    
}