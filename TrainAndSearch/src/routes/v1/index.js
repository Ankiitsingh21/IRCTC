import express from "express";

import { createCity,deleteCity,updateCity,getAllCity,getCityById } from "../../controller/city-controller.js";
import {createTrain,deleteTrain, getAllTrain, getTrainById, updateTrain} from "../../controller/train-controller.js"
import { createTrainStation, deleteTrainStation, getAllTrainStation, getTrainStationById, updateTrainStation } from "../../controller/trainStation-controller.js";
import { createTrainSchedule, deleteTrainSchedule, getAllTrainSchedule, getTrainScheduleById, updateTrainSchedule } from "../../controller/trainschedule-controller.js";

const router= express.Router()

//city
router.post('/city',createCity);
router.delete('/city/:id',deleteCity);
router.patch('/city',updateCity);
router.get('/city/:id',getCityById);
router.get('/city',getAllCity);

//train 
router.post('/train',createTrain);
router.delete('/train/:id',deleteTrain);
router.patch('/train',updateTrain);
router.get('/train/:id',getTrainById);
router.get('/train',getAllTrain);

//train Station
router.post('/trainstation',createTrainStation);
router.delete('/trainstation/:id',deleteTrainStation);
router.patch('/trainstation',updateTrainStation);
router.get('/trainstation',getAllTrainStation);
router.get('/trainstation/:id',getTrainStationById);

//train schedule
router.post('/trainSchedule',createTrainSchedule);
router.delete('/trainSchedule/:id',deleteTrainSchedule);
router.patch('/trainSchedule',updateTrainSchedule);
router.get('/trainSchedule',getAllTrainSchedule);
router.get('/trainSchedule/:id',getTrainScheduleById);


export default router;