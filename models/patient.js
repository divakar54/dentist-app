import mongoose from 'mongoose';
import {v4 as uuidv4} from 'uuid';
const {Schema} = mongoose;

const patientSchema = new Schema({
    patientName : {
        type : String,
        required : false
    },
    phone : {
        type: String,
        required : false
    },
    email : {
        type: String,
        required : false,
    },
    password : {
        type : String,
        required : false,
    },
    username : {
        type : String,
        required : false,
    },
    age : {
        type : String,
        required : false,
    },
    pincode : {
        type : String,
        required : false
    },
    address : {
        type : String,
        required : false
    }
})


const Patient = mongoose.model("Patient", patientSchema);
export default Patient;