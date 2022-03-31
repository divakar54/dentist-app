import mongoose from 'mongoose';
import {v4 as uuidv4} from 'uuid';
const {Schema} = mongoose;

const doctorSchema = new Schema({
    name : String,
    department : String,
    city: String,
    pincode: String,
    address : String,
    fees : String,
    email : String
})
const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;