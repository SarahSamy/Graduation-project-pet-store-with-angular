import { Type } from './Type';
export interface Category {
	id: number;
	name: string;
	type?:Type;
	typeId:number;
}