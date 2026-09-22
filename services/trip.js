import Trip from "../models/trip"
import { NotFoundError } from "../utils/errors/not-found.js";

export const create = async (data)=>{
    const trip = await Trip.create(data);
    return trip;
}
 
export const index = async(userID)=>{
    const trip = await Trip.find({user: userID});
    return trip;
}

export const update = async (id, data, userID) =>{
    const trip = await Trip.findOneAndUpdate({_id: id, user : userID }, data, { returnDocument: "after"});
    if(!trip) {
        throw new NotFoundError("Trip not found");
    }
    return trip;
}

export const remove = async (id, userID) =>{
    const trip = await Trip.findOneAndDelete({_id: id, user : userID });
    if(!trip) {
        throw new NotFoundError("Trip not found");
    }
    return trip;
}

export const findOne = async (id, userID) =>{
    const trip = await Trip.findOne({ _id: id, user : userID }).populate("user","name").populate("collaborators","name email");
    if(!trip) {
        throw new NotFoundError("Trip not found");
    }
    return trip;
}

