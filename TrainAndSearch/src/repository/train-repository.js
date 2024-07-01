import Train from "../models/train.js";
import CrudRepository from "./crud-repository.js";

class TrainRepository extends CrudRepository{
        constructor(){
                super(Train);
        }
}

export default TrainRepository;