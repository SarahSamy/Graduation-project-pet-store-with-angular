import { Post } from "../_model/Post";

export class PostsService {
  data: Post[];

  constructor() {
    this.data = [
      {
        id: 1,
        title: "How to Survive Giving Your Dog a Bath",
        body:
        "Ilana Pinto grew up around dogs in Canada — running dog sleds and spending ample time at the nearby dog park — but she never had her own. When she and Eric Pinto got married, she knew it was time. “I’m old enough to be married; I’m old enough to have a dog,” she told herself."
        ,userId: 1,
        TagsId: [1, 2],
        image: "../../../../assets/images/blog/adorable-animals-breed-374825.jpg",
        time: "11:00pm",
        day: "05",
        month: "DEC",
        year: "2013"
      },
      {
        id: 2,
        title: "Living with Cat Allergies",
        body:
        "Keep Pet Food Bags Away From Dogs and Cats While your pet is probably excited to have what’s inside his bag of food, make sure you keep the opened bag in a place your pet can’t access, and dispose of it immediately once it’s empty. Doing so will help ensure "
        ,userId: 2,
        TagsId: [1, 2],
        image: "../../../../assets/images/blog/adorable-animals-beautiful-eyes-1643456.jpg",
        time: "12:00pm",
        day: "07",
        month: "NOV",
        year: "2012"
      },
      {
        id: 3,
        title: "How to Survive Giving Your Dog a Bath",
        body:
        "When Mathé and Jordan visited the PS9 Pet Store hosting cats from New York Animal Care and Control last December, they knew they wanted a cat, but two? They didn’t see that coming. To their own surprise, the couple left with two young kittens, and now they can’t imagine it any other way. Two pets may sound like double",
        userId: 1,
        TagsId: [2],
        image: "../../../../assets/images/blog/adorable-animal-black-and-white-825947.jpg",
        time: "1:00pm",
        day: "10",
        month: "MAR",
        year: "2011"
      },
      {
        id: 4,
        title: "How to Survive Giving Your Dog a Bath",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        userId: 2,
        TagsId: [3],
        image: "../../../../assets/images/blog/adorable-animals-breed-374825.jpg",
        time: "10:00pm",
        day: "12",
        month: "DEC",
        year: "2013"
      },
      {
        id: 5,
        title: "How to Survive Giving Your Dog a Bath",
        body:
        "Monique Borrero had Princess, a Pug mix, for nine years when she decided to adopt Charlie, a Chihuahua mix. Charlie’s mother had been surrendered when she was pregnant, so Charlie had only known life in the shelter before his adoption, and he was happy in his new home",
        userId: 2,
        TagsId: [3],
        image: "../../../../assets/images/blog/adorable-animals-breed-374825.jpg",
        time: "3:40pm",
        day: "1",
        month: "DEC",
        year: "2018"
      },
      {
        id: 6,
        title: "How to Survive Giving Your Dog a Bath",
        body:
        "When Emily Burke stepped into her room just before Christmas, she knew someone had been there, and it wasn’t Santa Claus. Cellophane wrappers from caramels littered the floor. The family dogs",
        userId: 1,
        TagsId: [4],
        image: "../../../../assets/images/blog/adorable-animals-breed-374825.jpg",
        time: "10:00pm",
        day: "2",
        month: "JAN",
        year: "2019"
      }
    ];
  }
  getAll(): Post[] {
    return this.data;
  }
  getById(id: number): Post {
    return this.data.find(post => post.id === id);
  }
  addPost(post: Post) {
    post.id = this.data.length + 1;

    this.data.push(post);
  }
  findPostByTag(tagId: number): Post[] {
    return this.getAll().filter(post => post.TagsId.includes(tagId));
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
