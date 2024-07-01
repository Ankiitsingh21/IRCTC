import TrainRepository from "../repository/train-repository.js";

class TrainService{
        constructor(){
                this.trainRepository = new TrainRepository();
        }

        async createTrain(data){
                try {
                        const train = await this.trainRepository.create({  
                                name: data.name,
                                capacity: data.number
                        });
                        return train;
                } catch (error) {
                        console.log("Something went wrong in service layer");
                        console.log(error);
                        throw {error};
                }
        }

        async deleteTrain(id){
                try {
                        const train = this.trainRepository.delete(id);
                        return train;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async updateTrain(id,data){
                try {
                        //console.log("service layer"+id,data);
                        const city = this.trainRepository.update(id,data);
                        //console.log(city.data);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async getAll(){
                try {
                        const city= this.trainRepository.getAll();
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }

        async getTrainById(id){
                try {
                        const city= this.trainRepository.get(id);
                        return city;
                } catch (error) {
                        console.log("Something went wrong in Service layer");
                        console.log(error);
                }
        }
}

export default TrainService;