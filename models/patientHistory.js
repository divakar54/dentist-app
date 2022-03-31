import mongoose from 'mongoose';
import {vs as uuidv4} from 'uuid';
const {Schema} = mongoose;

const patientHistorySchema = new Schema({
    patientName : {
        type : String,
        required : false
    },
    patientAge : {
        type : String,
        required : false,
    },
    previousVisits : [{
        name : String,
        department : String,
        address : String,
    }]
})
const patientHistory = mongoose.model("patientHistory", patientHistorySchema);
export default patientHistory;