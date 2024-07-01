import TrainScheduleRepository from "../repository/trainschedule-repository.js"
import TrainRepository from "../repository/train-repository.js";
import TrainStationRepository from "../repository/TrainStation-repository.js";

class TrainScheduleService{
        constructor(){
                this.trainScheduleRepository = new TrainScheduleRepository();
                this.trainRepository = new TrainRepository();
                this.trainStationRepository = new TrainStationRepository();
        }

        async createTrainSchedules(data){
                try {
                        // const seats = await this.trainRepository.get(data.trainid);
                        // console.log(seats);
                        const trainId= await this.trainRepository.getTrainByName(data.trainname);
                        //console.log(trainId[0]._id);
                        //const departurename=data.departurestationname;
                        //console.log(data.departurestationname);
                        const departurestationid = await this.trainStationRepository.getStationWithName(data.departurestationname);
                        //console.log(departurestationid[0]._id);
                        //console.log("hi");
                        //const arrivalname=data.arrivalstationname;
                        const arrivalstationid = await this.trainStationRepository.getStationWithName(data.arrivalstationname);
                        const train = await this.trainScheduleRepository.create({  
                                trainnumber : data.trainnumber,
                                trainid : trainId[0]._id,
                                departurestationid : departurestationid[0]._id,
                                arrivalstationid : arrivalstationid[0]._id,
                                arrivaltime : data.arrivaltime,
                                departuretime : data.departuretime,
                                price : data.price,
                                totalseats : trainId[0].capacity
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