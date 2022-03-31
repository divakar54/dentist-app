import Doctor from "../models/doctor.js";

export const getDoctors = async(req, res) => {
    try {
        Doctor.find({})
                .then(data => {
                    res.status(200).json(data);
                })
                .catch(err => {
                    console.log(error);
                })
    } catch (error) {
        console.log(error)
    }
}