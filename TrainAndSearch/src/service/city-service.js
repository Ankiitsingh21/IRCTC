import CityRepository from '../repository/city-repository.js';

class CityService{

        constructor(){
                this.cityRepository = new CityRepository();
        }

        async createCity(name){
                try {
                        const city = this.cityRepository.create(name);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async deleteCity(id){
                try {
                        const city = this.cityRepository.delete(id);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async updateCity(id,data){
                try {
                        //console.log("service layer"+id,data);
                        const city = this.cityRepository.update(id,data);
                        //console.log(city.data);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async getAll(){
                try {
                        const city= this.cityRepository.getAll();
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async getCityById(id){
                try {
                        const city= this.cityRepository.get(id);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }
}

export default CityService;