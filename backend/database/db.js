import mongoose from 'mongoose'; 
import dotenv from 'dotenv' 
dotenv.config() ;

const MongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log( "Successfully Connected to Database !!!")
    } catch (error) {
        console.error( "Can't Connect to Database !!!")
    }
}

export default MongoConnect ;