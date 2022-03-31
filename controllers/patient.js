import Patient from '../models/patient.js';
import {conditions} from '../DATA.js'

export const getCondition = async(req, res) => {
    console.log(req.body)
    const {category, subcategory} = req.body
    const newSubcategory = conditions[`${category}`];
    try {
        res.json(newSubcategory[`${subcategory}`]);
        
    } catch (error) {
    console.log(error)      
    }
}