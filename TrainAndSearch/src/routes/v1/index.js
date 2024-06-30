import express from "express";

import { createCity,deleteCity,updateCity,getAllCity,getCityById } from "../../controller/city-controller.js";


const router= express.Router()

router.post('/city',createCity);
router.delete('/city/:id',deleteCity);
router.patch('/city',updateCity);
router.get('/cit/:id',getCityById);
router.get('/city',getAllCity);

export default router;