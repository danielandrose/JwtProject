import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add a name']
    },
    email:{
        type:String,
        required:[true,'Please add a email'],
        unique:true
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    },
    {
        timestamps: true,
    }
)

const User = mongoose.model("User",userSchema);

export default User