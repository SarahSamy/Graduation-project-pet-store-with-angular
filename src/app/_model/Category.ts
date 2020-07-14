import { Type } from './Type';
export interface Category {
	categoryId?: number;
	name?: string;
	image?: string;
	type?: Type;
	fkTypeId: number;
}