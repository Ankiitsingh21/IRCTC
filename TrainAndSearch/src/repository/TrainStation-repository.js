import TrainStation from "../models/trainStation.js";
import CrudRepository from "./crud-repository.js";

class TrainStationRepository extends CrudRepository{
        constructor(){
                super(TrainStation);
        }
}

export default TrainStationRepository;