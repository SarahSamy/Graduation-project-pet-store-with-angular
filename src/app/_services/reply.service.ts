import { Reply } from '../_model/Reply';


export class ReplyService {
    data: Reply[];
    constructor() {
        this.data = [
        {id:1,body:"Serunt mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,commentId:1,userId:1,time:"11:00 AM",day:"20",month:"October",year:"2011"},
         {id:2,body:"Serunt mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,commentId:1,userId:1,time:"1:00 Am",day:"21",month:"November",year:"2012"},
         {id:3,body:"alaa mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,commentId:1,userId:2,time:"2:00 PM",day:"22",month:"December",year:"2013"},
         {id:3,body:"sara mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,commentId:1,userId:1,time:"14:00 Am",day:"23",month:"Junuary",year:"2009"},
         {id:3,body:"lolo mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,commentId:1,userId:2,time:"5:00 Am",day:"24",month:"March",year:"2010"},
         {id:3,body:"lolo mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,commentId:1,userId:2,time:"5:00 Am",day:"24",month:"March",year:"2010"},
         {id:3,body:"lolo mollit animid est laborum ded uet perspiciatis unde omniste magna natus error volup mque laudantium totam rem aperiam eaque ipsa quae duiad inventore."
         ,commentId:1,userId:2,time:"5:00 Am",day:"24",month:"March",year:"2010"},
        ]
    }
    getAll(): Reply[] {
        return this.data;
    }
    getById(id: number): Reply {
        return this.data.find((r) => r.id === id);
    }
    addReply(reply: Reply) {
        
        this.data.unshift(reply);
    }
    update(reply: Reply) {
        const i = this.data.findIndex(r => r.id === reply.id);
        this.data[i] = reply;
    }
    delete(id: number) {
        const i = this.data.findIndex(r => r.id === id);
        this.data.splice(id, 1);
    }
    getByCommentId(commentId:number): Reply[]{
        return this.data.filter((rep) => rep.commentId === commentId);   
    }

}

