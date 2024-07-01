import TrainScheduleRepository from "../repository/trainschedule-repository.js"
import TrainRepository from "../repository/train-repository.js";

class TrainScheduleService{
        constructor(){
                this.trainScheduleRepository = new TrainScheduleRepository();
                this.trainRepository = new TrainRepository();
        }

        async createTrainSchedules(data){
                try {
                        const seats = await this.trainRepository.get(data.trainid);
                        const train = await this.trainScheduleRepository.create({  
                                trainnumber : data.trainnumber,
                                trainid : data.trainid,
                                departurestationid : data.departurestationid,
                                arrivalstationid : data.arrivalstationid,
                                arrivaltime : data.arrivaltime,
                                departuretime : data.departuretime,
                                price : data.price,
                                totalseats : seats.capacity
                        });
                        return train;
                } catch (error) {
                        console.log("Something went wrong in service layer");
                        console.log(error);
                        throw {error};
                }
        }

        async deleteTrainSchedules(id){
                try {
                        const train = this.trainScheduleRepository.delete(id);
                        return train;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async updateTrainSchedules(id,data){
                try {
                        const city = this.trainScheduleRepository.update(id,data);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async getAllTrainSchedules(data){
                try {
                        const city= this.trainScheduleRepository.getAllTrainSchedule(data);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async getTrainSchedulesById(id){
                try {
                        const city= this.trainScheduleRepository.get(id);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }
}


export default TrainScheduleService;


/**
 *   trainnumber: {
                type: Number,
                required: true
        },
        trainid: {
                type: Number,
                required: true
        },
        departurestationid: {
                type: Number,
                required: true
        },
        arrivalstationid: {
                type: Number,
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
 */