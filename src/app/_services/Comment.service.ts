import { Comment } from '../_model/Comment';


export class CommentService {
    data: Comment[];
    constructor() {
        this.data = [
        {id:1,body:"Serunt mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,PostId:1,userId:1,time:"11:00 AM",day:"20",month:"October",year:"2011"},
         {id:2,body:"Serunt mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,PostId:1,userId:1,time:"1:00 Am",day:"21",month:"November",year:"2012"},
         {id:3,body:"alaa mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,PostId:1,userId:2,time:"2:00 PM",day:"22",month:"December",year:"2013"},
         {id:3,body:"sara mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,PostId:2,userId:1,time:"14:00 Am",day:"23",month:"Junuary",year:"2009"},
         {id:3,body:"lolo mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,PostId:2,userId:2,time:"5:00 Am",day:"24",month:"March",year:"2010"},
         {id:3,body:"lolo mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,PostId:1,userId:2,time:"5:00 Am",day:"24",month:"March",year:"2010"},
         {id:3,body:"lolo mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,PostId:1,userId:2,time:"5:00 Am",day:"24",month:"March",year:"2010"},
        ]
    }
    getAll(): Comment[] {
        return this.data;
    }
    getById(id: number): Comment {
        return this.data.find((com) => com.id === id);
    }
    addComment(comment: Comment) {
        
        this.data.unshift(comment);
    }
    update(comment: Comment) {
        const i = this.data.findIndex(c => c.id === comment.id);
        this.data[i] = comment;
    }
    delete(id: number) {
        const i = this.data.findIndex(c => c.id === id);
        this.data.splice(id, 1);
    }
    getByPostId(postId:number): Comment[]{
        return this.data.filter((com) => com.PostId === postId);   
    }

}

