import City from "../models/city.js";
import CrudRepository from "./crud-repository.js";

class CityRepository extends CrudRepository{
        constructor(){
                super(City);
        }
}

export default CityRepository;