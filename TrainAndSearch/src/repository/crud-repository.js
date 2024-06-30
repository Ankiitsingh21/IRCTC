class CrudRepository {
        constructor(model) {
            this.model = model;  
        }
    
        async create(name) {
            try {
                const result = await this.model.create({name});
                return result;
            } catch (error) {
                console.log("Something went wrong in repository layer");
                console.log(error);
            }
        }
    
        async delete(id) {
            try {
                const result = await this.model.findByIdAndDelete(id);  
                return result;
            } catch (error) {
                console.log("Something went wrong in repository layer");
                console.log(error);
            }
        }
    
        async getAll() {
            try {
                const result = await this.model.find();
                return result;
            } catch (error) {
                console.log("Something went wrong in repository layer");
                console.log(error);
            }
        }
    
        async get(id) {
            try {
                const result = await this.model.findById(id);
                return result;
            } catch (error) {
                console.log("Something went wrong in repository layer");
                console.log(error);
            }
        }
    
        async update(id, data) {
            try {
                //console.log("Repository layer: "+ id+" "+data);
                const res= await this.model.findByIdAndUpdate(id,data,{new:true});
                res.name=data;
                res.save();
                //console.log(res);
                // const result = await this.model.findByIdAndUpdate(id, data,{new:true});  
                // console.log(result);
                return res;
            } catch (error) {
                console.log("Something went wrong in repository layer");
                console.log(error);
            }
        }
}
    
export default CrudRepository;
    