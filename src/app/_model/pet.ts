import { Category } from './category';
export interface Pet {
    id: number;
    name: string;
    age: number;
    gender: string;
    image?: string;
    category?: Category;
    fkCategoryId?: number;
    categoryName?: string;
    parentHistoryAndType?: string;
    food?: string;
    isToAdapted?: boolean;
    medicalCondition?: string;
    notes?: string;
    views?: Number;
}