import { Post } from '../_model/Post';


export class PostsService {
    data: Post[];
    constructor() {
        this.data = [
            { id: 1,title:"How to Survive Giving Your Dog a Bath",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",userId:1,TagsId:[1,2],image:"../../../../assets/images/blog/adorable-animals-breed-374825.jpg",time:'11:00pm',day:"05",month:"DEC",year:"2013"},
            { id: 2,title:"Living with Cat Allergies",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",userId:2,TagsId:[1,2],image:"../../../../assets/images/blog/adorable-animals-beautiful-eyes-1643456.jpg",time:'12:00pm',day:"07",month:"NOV",year:"2012"},
            { id: 3,title:"How to Survive Giving Your Dog a Bath",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",userId:1,TagsId:[1,2],image:"../../../../assets/images/blog/adorable-animal-black-and-white-825947.jpg",time:'1:00pm',day:"10",month:"MAR",year:"2011"},
            { id: 4,title:"How to Survive Giving Your Dog a Bath",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",userId:2,TagsId:[1,2],image:"../../../../assets/images/blog/adorable-animals-breed-374825.jpg",time:'10:00pm',day:"12",month:"DEC",year:"2013"},
        ]
    }
    getAll(): Post[] {
        return this.data;
    }
    getById(id: number): Post {
        return this.data.find((post) => post.id === id);
    }
    addPet(post: Post) {
        post.id = this.data.length + 1;
        this.data.push(post);
    }
    update(post: Post) {
        const i = this.data.findIndex(p => p.id === post.id);
        this.data[i] = post;
    }
    delete(id: number) {
        const i = this.data.findIndex(p => p.id === id);
        this.data.splice(id, 1);
    }

}

