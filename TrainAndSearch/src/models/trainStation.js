import mongoose from "mongoose";

const trainStationScema = mongoose.Schema({
        name:{
                type: String,
                required: true,
        },
        address:{
                type: String,
                required: true,
        },
        CityId:{
              type : mongoose.Schema.Types.ObjectId,
              ref: 'City',
              required: true  
        }
},{timestamps:true});

const TrainStation = mongoose.model('TrainStation',trainStationScema);

export default TrainStation;