import { model, Schema } from "mongoose"; 

const goalSchema=new Schema({
    user:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text:{
        type:String,
        required:[true,'please add a text value']
    }
},{
    timestamps:true,
})

const Goal = model("Goal",goalSchema);

export default Goal