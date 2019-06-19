import { Type } from './Type';
export interface Category {
	categoryId: number;
	category_name: string;
	type?: Type;
	fkTypeId: number;
}