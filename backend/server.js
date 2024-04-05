import express from 'express';
import dotenv from 'dotenv' ;
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/authRoutes.js" ;
import messageRoutes from "./routes/messageRoutes.js"
import MongoConnect from './database/db.js';
import userRoutes from './routes/userRoutes.js'

const app = express() ;
dotenv.config() ; 

const PORT = process.env.PORT || 8000 ;

app.use(express.json());
app.use(cookieParser());

app.get("/" , (req, res)=> {
    res.send("backend working on home route")
})
app.use("/api/auth" , authRoutes) ;
app.use("/api/messages" , messageRoutes) ;
app.use("/api/users" , userRoutes ) ;

app.listen(PORT ,() =>{ 
    MongoConnect() ;
    console.log(`server is runing on ${PORT}`)
 }) ;







