import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose
    .connect(process.env.MONGO_URL,{
        dbName:"jobportal",
    })
    .then(()=>{
        console.log("Connected to Database!!");
    })
    .catch((err)=>{
        console.log(`some error come while connecting database ${err}`);
    });
}