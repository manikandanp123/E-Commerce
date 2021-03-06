const mongoose=require("mongoose");
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    password:{type:String,required:true}
},{
    timestamps:true
})

const users=mongoose.model("User",userSchema);

module.exports=users;
