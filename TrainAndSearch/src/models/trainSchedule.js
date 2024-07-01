import mongoose from "mongoose";

const trainScheduleSchema = mongoose.Schema({
        trainnumber: {
                type: String,
                required: true
        },
        trainid: {
                type: String,
                required: true
        },
        departurestationid: {
                type: String,
                required: true
        },
        arrivalstationid: {
                type: String,
                required: true
        },
        arrivaltime: {
                type: Date,
                required: true
        },
        departuretime: {
                type: Date,
                required: true
        },
        price: {
                type: Number,
                required: true
        },
        totalseats: {
                type: Number,
                required: true
        }
}, { timestamps: true });

const TrainSchedule = mongoose.model('TrainSchedule', trainScheduleSchema);
export default TrainSchedule;





/**
 * flight should be having 
 * --flight number
 * --airplane id
 * --departure Airport id
 * --arrival Airport id
 * --arrival tim
 * -- departure time
 * -- price
 * -- total seats
 */