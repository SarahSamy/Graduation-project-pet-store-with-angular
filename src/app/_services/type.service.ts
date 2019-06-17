import { Type } from '../_model/Type';


export class TypeService {
	types: Type[];
	

	constructor() {
		this.types = [
			{ id: 1, name: "Cat" },
			{ id: 2, name: "Dog" },
			{ id: 3, name: "Bird" },
			{ id: 4, name: "Others" }
		]
	}
	
	getAllTypes(): Type[] {
		return this.types;
	}
}