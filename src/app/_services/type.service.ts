import { Type } from '../_model/Type';


export class TypeService {
	types: Type[];
	

	constructor() {
		this.types = [
			{ id: 1, name: "Cat",motivationText:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ab quis consequatur? Architecto obcaecati expedita incidunt autem? Numquam tempore necessitatibus.",image:"../../../../assets/images/discover/kitten-jumping-landing-on-feet.jpg" },
			{ id: 2, name: "Dog" ,motivationText:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ab quis consequatur? Architecto obcaecati expedita incidunt autem? Numquam tempore necessitatibus.",image:"../../../../assets/images/discover/download.jpg" },
			{ id: 3, name: "Bird",motivationText:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ab quis consequatur? Architecto obcaecati expedita incidunt autem? Numquam tempore necessitatibus.",image:"../../../../assets/images/discover/Conure-Image.jpg"},
			{ id: 5, name: "Others",motivationText:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ab quis consequatur? Architecto obcaecati expedita incidunt autem? Numquam tempore necessitatibus.",image:"../../../../assets/images/discover/DSC00723JPG_crop350x250.jpg" }
		]
	}
	
	getAllTypes(): Type[] {
		return this.types;
	}
	// getAllCats(): Type[]{
		
	// 	return this.types.filter(t=>t.name=="Cat")
	// }
}