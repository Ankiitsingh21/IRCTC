import TrainService from "../service/train-service.js";

const trainService =  new TrainService();

export const createTrain = async(req,res)=>{
        try {
                //console.log(req.body);
                const response = await trainService.createTrain(req.body);
                return res.status(200).json({
                        success : true,
                        message : "created train",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to create train",
                        data: {},
                        err : {error},
                })
        }
}

export const deleteTrain= async (req,res)=>{
        try {
                //console.log(req.params.id);
                const response = await trainService.deleteTrain(req.params.id);
                return res.status(200).json({
                        success : true,
                        message : "deleted train",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to delete train",
                        data: {},
                        err : {error},
                })
        }
}

export const updateTrain= async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await trainService.updateTrain(req.body.id,req.body.name);
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "updated train",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to update train",
                        data: {},
                        err : {error},
                })
        }
}

export const getAllTrain= async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await trainService.getAll();
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "all  trains",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to get all trains",
                        data: {},
                        err : {error},
                })
        }
}

export const getTrainById= async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await trainService.getTrainById(req.params.id);
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "all  train",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to get all train",
                        data: {},
                        err : {error},
                })
        }
}

export const getTrainByName= async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await trainService.getTrainByName(req.query);
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "all  train",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to get all train",
                        data: {},
                        err : {error},
                })
        }
}