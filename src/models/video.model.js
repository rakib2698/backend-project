import mongoose,{Schema} from "mongoose";
import mongooseAggregatePageinate from "mongoose-aggregate-paginate-v2"

const videoSchema=new Schema(
    {
      videoFile:{
        type:String,//cloudnary url
        required:true,
      },
      thamnail:{
        type:String,
        required:true,
      },
      title:{
        type:String,
        required:true,
      },
      description:{
        type:String,
        required:true,
      },
      duration:{
        type:Number,//cloudnary
        required:true
      },
      views:{
        type:Number,
        default:0,
      },
      isPublished:{
        type:Boolean,
        default:true,
      },
      owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
      }
    },{timestamps:true}
)

videoSchema.plugin(mongooseAggregatePageinate)

export const Video=mongoose.model("Video",videoSchema);