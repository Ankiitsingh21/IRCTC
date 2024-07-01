import TrainStationRepository from "../repository/TrainStation-repository.js";

class TrainStationService{
        constructor(){
                this.trainStationRepository = new TrainStationRepository();
        }

        async createTrainStation(name,address,cityId){
                try {
                        console.log(cityId);
                        const trainStation = await this.trainStationRepository.create({
                                name:name,
                                address:address,
                                CityId:cityId
                        });
                        return trainStation;
                } catch (error) {
                        console.log("Something went wrong in service layer");
                        console.log(error);
                }
        }

        async deleteTrainStation(id){
                try {
                        const train = this.trainStationRepository.delete(id);
                        return train;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async updateTrainStation(id,data){
                try {
                        //console.log("service layer"+id,data);
                        const city = this.trainStationRepository.update(id,data);
                        //console.log(city.data);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async getAllTrainStation(){
                try {
                        const city= this.trainStationRepository.getAll();
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async getTrainStationById(id){
                try {
                        const city= this.trainStationRepository.get(id);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async getTrainStationByName(data){
                try {
                        const name = data.name;
                        const city= this.trainStationRepository.getStationWithName(name);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }
}

export default TrainStationService;