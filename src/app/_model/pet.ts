import { Category } from './category';
export interface Pet {
    id: number;
    name: string;
    age: number;
    gender: string;
    image: string;
    category?: Category;
    categoryId: number;
    isAdapt: boolean;
    medicalCondition?: string;
    notes?: string;
}