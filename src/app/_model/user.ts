import { Pet } from './pet';

export interface User{
    id?: number ;
    firstName?: string ;
    lastName?: string ;
    email?:string;
    password?:number;
    birthDate?:string;
    gender?: string;
    pets?:Pet[];
    image?:string;
    
}