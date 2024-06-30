import express from 'express';
import {connect} from './config/database.js';
import {PORT} from './config/ServerConfig.js';
import apiRoutes from "./routes/index.js";
import bodyParser from 'body-parser';

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRoutes);

app.listen(PORT,async ()=>{
        console.log(`Server started at port ${PORT}`);
        await connect();
        console.log("MongoDb connected");
});

