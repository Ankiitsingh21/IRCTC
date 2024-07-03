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
                        filter.price = {$lte: data.maxPrice};
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







// import TrainSchedule from "../models/trainSchedule.js";
// import CrudRepository from "./crud-repository.js";
// import TrainStationRepository from "./TrainStation-repository.js";

// class TrainScheduleRepository extends CrudRepository{
//         constructor(){
//                 super(TrainSchedule);
//                 this.trainStationRepository = new TrainStationRepository();
//         }

//         async createFilter(data){
//                 let filter ={};
//                 if(data.arrivalstationname){
//                         const arrivalstationid = await this.trainStationRepository.getStationWithName(data.arrivalstationname);
//                         filter.arrivalstationname=arrivalstationid[0]._id;
//                 }
//                 if(data.departurestationname){
//                         filter.departurestationname=data.departurestationname;
//                 }
//                 if(data.minPrice && data.maxPrice){
//                         filter.$and = [
//                                 { price: { $lte: data.maxPrice } },
//                                 { price: { $gte: data.minPrice } }
//                             ];
//                 }
//                 if(data.minPrice){
//                         filter.price = {$gte: data.minPrice};
//                 }
//                 if(data.maxPrice){
//                         data.price = {$lte: data.maxPrice};
//                 }
//                 return filter;
//         }

//         async getAllTrainSchedule(filter) {
//                 try {
//                         console.log(filter);
//                     const filterObject = await this.createFilter(filter);
//                     console.log(filterObject.arrivalstationname);
//                     const obj=filterObject.arrivalstationname.toString();
//                     const result = await this.model.find({obj});
//                     console.log(result);
//                     return result;
//                 } catch (error) {
//                     console.log("Something went wrong in repository layer");
//                     console.log(error);
//                 }
//             }
// }
// export default TrainScheduleRepository;