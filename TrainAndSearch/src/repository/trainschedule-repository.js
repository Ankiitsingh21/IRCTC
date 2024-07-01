import TrainSchedule from "../models/trainSchedule.js";
import CrudRepository from "./crud-repository.js";

class TrainScheduleRepository extends CrudRepository{
        constructor(){
                super(TrainSchedule);
        }

        #createFilter(data){
                let filter ={};
                if(data.arrivalstationid){
                        filter.arrivalstationid=data.arrivalstationid;
                }
                if(data.departurestationid){
                        filter.departurestationid=data.departurestationid;
                }
                if(data.minPrice && data.maxPrice){
                        filter.$and = [
                                { price: { $lte: data.maxPrice } },
                                { price: { $gte: data.minPrice } }
                            ];
                }
                if(data.minPrice){
                        filter.price = {$gte: data.minPrice};
                }
                if(data.maxPrice){
                        data.price = {$lte: data.maxPrice};
                }
                return filter;
        }

        async getAllTrainSchedule(filter) {
                try {
                    const filterObject =  this.#createFilter(filter);
                    const result = await this.model.find(filterObject);
                    return result;
                } catch (error) {
                    console.log("Something went wrong in repository layer");
                    console.log(error);
                }
            }
}
export default TrainScheduleRepository;