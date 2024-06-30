import CityService from "../service/city-service.js";


const cityService = new CityService();

export const createCity=async(req,res)=>{
        try {
                //console.log(req.body);
                const response = await cityService.createCity(req.body.name);
                return res.status(200).json({
                        success : true,
                        message : "created city",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to create city",
                        data: {},
                        err : {error},
                })
        }
}

export const deleteCity= async (req,res)=>{
        try {
                //console.log(req.params.id);
                const response = await cityService.deleteCity(req.params.id);
                return res.status(200).json({
                        success : true,
                        message : "deleted city",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to delete city",
                        data: {},
                        err : {error},
                })
        }
}

export const updateCity= async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await cityService.updateCity(req.body.id,req.body.name);
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "updated city",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to update city",
                        data: {},
                        err : {error},
                })
        }
}

export const getAllCity= async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await cityService.getAll();
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "all  cities",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to get all cities",
                        data: {},
                        err : {error},
                })
        }
}

export const getCityById= async (req,res)=>{
        try {
                //console.log(req.body.id,req.body.name);
                const response = await cityService.getCityById(req.params.id);
                //console.log(response);
                return res.status(200).json({
                        success : true,
                        message : "all  cities",
                        data: response,
                        err : {}
                })
        } catch (error) {
                console.log(error);
                //throw {error};
                return res.status(401).json({
                        success : false,
                        message : "not able to get all cities",
                        data: {},
                        err : {error},
                })
        }
}