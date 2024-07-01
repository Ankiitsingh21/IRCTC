import TrainStationService from "../service/TrainStation-service.js";

const trainStationService = new TrainStationService();

export const createTrainStation= async(req,res)=>{
        try {
                //console.log(req.body);
                const response = await trainStationService.createTrainStation(req.body.name,req.body.address,req.body.cityid);
                return res.status(200).json({
                        success : true,
                        message : "created train Station",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to create train Station",
                        data: {},
                        err : {error},
                })
        }
}

export const deleteTrainStation= async (req,res)=>{
        try {
                //console.log(req.params.id);
                const response = await trainStationService.deleteTrainStation(req.params.id);
                return res.status(200).json({
                        success : true,
                        message : "deleted train Station",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to delete train Station",
                        data: {},
                        err : {error},
                })
        }
}

export const updateTrainStation= async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await trainStationService.updateTrainStation(req.body.id,req.body.name);
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "updated train Station",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to update train Station",
                        data: {},
                        err : {error},
                })
        }
}

export const getAllTrainStation= async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await trainStationService.getAllTrainStation();
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "all  trains Station",
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

export const getTrainStationById= async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await trainStationService.getTrainStationById(req.params.id);
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "all  train Station",
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

export const getTrainStationByName= async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await trainStationService.getTrainStationByName(req.query);
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "all  train Station",
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