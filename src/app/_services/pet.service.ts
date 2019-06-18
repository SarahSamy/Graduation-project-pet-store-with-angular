import { Pet } from '../_model/Pet';

export class PetService {
    data: Pet[];
    constructor() {
        this.data = [

        ]
    }
    getAll(): Pet[] {
        return this.data;
    }
    getById(id: number): Pet {
        return this.data.find((pet) => pet.id === id);
    }
    addPet(pet: Pet) {
        pet.id = this.data.length + 1;
        this.data.push(pet);
    }
    update(pet: Pet) {
        // const i = this.data.indexOf(pet);
        const i = this.data.findIndex(p => p.id === pet.id);
        this.data[i] = pet;
    }
    delete(id: number) {
        const i = this.data.findIndex(p => p.id === id);
        this.data.splice(id, 1);
    }
}