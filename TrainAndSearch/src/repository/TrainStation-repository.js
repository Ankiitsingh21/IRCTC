import TrainStation from "../models/trainStation.js";
import CrudRepository from "./crud-repository.js";

class TrainStationRepository extends CrudRepository{
        constructor(){
                super(TrainStation);
        }

        async getStationWithName(name){
                try {
                        //console.log(name);
                        const Station = await TrainStation.find({name});
                        // const station = Station[0]; // Access the first element in the array
                        // console.log(station._id);
                        return Station; 
                } catch (error) {
                        console.log("Something went wrong in the Respository Layer");
                        console.log(error);
                }
        }
}

export default TrainStationRepository;