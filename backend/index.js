import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"

dotenv.config({});
const app=express();


//middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const corsOptions = {
    origin:'https://66cc2b960c815ff3a2879a9f--jobshunter.netlify.app',
    credentials:true
}

app.use(cors(corsOptions));


const port=process.env.PORT ||3000;

// api's
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})