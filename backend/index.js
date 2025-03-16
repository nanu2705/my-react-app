import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactroute from './routes/contactroute.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const DB = process.env.MONGODB_URL
mongoose
  .connect(DB)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("mongo error", err));


  app.use('/',contactroute)
app.listen(3034, () => {
    console.log('Server is running on port 3034');
}
);