import express from "express";
import cors from "cors";
import 'dotenv/config'
import connectDB from "./config/mongodb.js";


// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

//middlewares

app.use(express.json());
app.use(cors());

//api endpoints

app.get("/", (req,res) => {
    res.send('<h1>Api is working</h1>');
});

//listening at port 4000

app.listen(port,()=> console.log(`listening on localhost:${port}`));