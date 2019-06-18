import { Category } from '../_model/Category';


export class CategoryService {
	categories: Category[];
	constructor() {
		this.categories = [
			// { id: 1, name: "Dog" },
			// { id: 2, name: "Cat" },
			// { id: 3, name: "Others" }
		]
	}
	getAll(): Category[] {
		return this.categories;
	}
}