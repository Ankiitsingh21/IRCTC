import mongoose from "mongoose";

const cityScema = new mongoose.Schema({
        name:{
                type:String,
                required:true,
                max:[50,'City name can not be more then 50 characters'],
        }
},{timestamps:true});

const City = mongoose.model('City',cityScema);
export default City;