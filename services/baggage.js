import { NotFoundError } from "../errors/not-found";
import Baggage from "../models/baggage";



export const create = async (data)=>{
    const baggage = await Baggage.create(data);
    return baggage;
}
export const index = async(userID,tripID)=>{
    const baggage = await Baggage.find({user: userID, trip: tripID});
    return baggage;
}
export const update = async (id, data, userID) =>{
    const baggage = await Baggage.findOneAndUpdate({_id: id, user : userID }, data, { returnDocument: "after"});
    if(!baggage) {
        throw new NotFoundError("Baggage not found");
    }
    return baggage;
}
export const remove = async (id, userID) =>{
    const baggage = await Baggage.findOneAndDelete({_id: id, user : userID });
    if(!Baggage) {
        throw new NotFoundError("Baggage not found");
    }
    return baggage;
}
export const findOne = async (id, userID) =>{
    const baggage = await Baggage.findOne({ _id: id, user : userID }).populate("user","name").populate("title");
    if(!baggage) {
        throw new NotFoundError("Baggage not found");
    }
    return baggage;
}