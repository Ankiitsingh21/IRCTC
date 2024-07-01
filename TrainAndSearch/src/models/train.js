import mongoose from "mongoose";

const trainScema = new mongoose.Schema({
        name:{
                type:String,
                required:true,
                unique:true
        },
        capacity:{
                type:Number,
                required:true
        }
},{timestamps:true});

const Train = mongoose.model('Train',trainScema);
export default Train;