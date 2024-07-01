import Train from "../models/train.js";
import CrudRepository from "./crud-repository.js";

class TrainRepository extends CrudRepository{
        constructor(){
                super(Train);
        }

        async getTrainByName(name){
                try {
                        console.log(name);
                        const train = await Train.find({name});
                        return train;
                } catch (error) {
                        console.log("Something went wrong in the repository layer");
                        console.log(error);
                }
        }
}

export default TrainRepository;