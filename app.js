import express from 'express';
import {conditions} from './DATA.js'
import cors from 'cors';
import bodyParse from 'body-parser';
import Condition from './routes/patient.js';
import Doctor from './routes/doctor.js';
import Auth from './routes/auth.js';
import mongoose from 'mongoose';
import 'dotenv/config'
const app = express();

//running middlewares
app.use(cors());
app.use(express.json());
app.use(cors());
app.use(bodyParse.json());

mongoose.connect(process.env.CONNECT_URL)
                .then()
                .catch(error => console.log(error))

app.get('/' , (req, res) => {
   
    res.send(conditions.pain)
})

// app.get('/')

app.use('/condition', Condition);
app.use('/doctors', Doctor)
app.use('/auth', Auth)
app.listen('3001', (req, res) => {
    console.log('Listening on port 3001')
})