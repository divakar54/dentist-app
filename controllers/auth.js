import Patient from "../models/patient.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import 'dotenv/config'

export const signup = async(req, res) => {
    const {email, username, password : plainTextPassword, phone, name : patientName, age, pincode, address} = req.body;

    if(!username || typeof username !== 'string'){
        return res.json({status:'error', error:'invalid username'})
    }
    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({status:'error', error:'invalid password'})
    }
    if(plainTextPassword.length < 5){
        return res.json({statu:'error', error:'Password too small. Must be at least 5 characters'});
    }
    const password = await bcrypt.hash(plainTextPassword, 10);

    try {
        const response = await Patient.create({
            username,
            password,
            email,
            phone,
            patientName,
            age, 
            pincode,
            address
        })
        console.log("patient registered successfully", response)
    } catch (error) {
        console.log(error);
        res.json({status : 'error'})
    }
    res.status(200).json("Patient registered successfully");
}

export const login = async(req, res) => {
    const {email, username, password : plainTextPassword} = req.body;
    const patient = await Patient.findOne({username}).lean();
    console.log(patient.password)
    if(!patient){
        return res.status(400).json({status:'error', error:'Invalid username/password'})
    }
    try {
        if(await bcrypt.compare(plainTextPassword, patient.password)){
            const token = jwt.sign({
                id : patient._id,
                username : patient.username
            }, process.env.JWT_SECRET_KEY)
           return res.status(200).json({status:'logged in successfully', data:token})
        }     
    } catch (error) {
        console.log("this is an error inside trycatch", error)
    }
   return res.status(400).json({status:'error', error:'invalid username/password'})
}