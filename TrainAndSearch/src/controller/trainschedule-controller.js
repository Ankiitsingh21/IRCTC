import TrainScheduleService from "../service/trainschedule-service.js";

const trainScheduleService = new TrainScheduleService();

export const createTrainSchedule = async(req,res)=>{
        try {
                //console.log(req.body);
                const response = await trainScheduleService.createTrainSchedules(req.body);
                return res.status(200).json({
                        success : true,
                        message : "created train Schedule",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to create train Schedule",
                        data: {},
                        err : {error},
                })
        }
}

export const deleteTrainSchedule = async (req,res)=>{
        try {
                //console.log(req.params.id);
                const response = await trainScheduleService.deleteTrainSchedules(req.params.id);
                return res.status(200).json({
                        success : true,
                        message : "deleted train Schedule",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to delete train Schedule",
                        data: {},
                        err : {error},
                })
        }
}

export const updateTrainSchedule = async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await trainScheduleService.updateTrainSchedules(req.body.id,req.body.name);
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "updated train Schedule",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to update train Schedule",
                        data: {},
                        err : {error},
                })
        }
}

export const getAllTrainSchedule = async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await trainScheduleService.getAllTrainSchedules(req.query);
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "all  trains Schedule",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to get all Schedule",
                        data: {},
                        err : {error},
                })
        }
}

export const getTrainScheduleById = async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await trainScheduleService.getTrainSchedulesById(req.params.id);
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "all  train Schedule by ID",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to get all Schedule by ID",
                        data: {},
                        err : {error},
                })
        }
}