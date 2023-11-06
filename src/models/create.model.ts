import mongoose from "mongoose";

const createSchema = new mongoose.Schema({
    name:String,
    phone:String,
    password:String
})

const Create = mongoose.model("create",createSchema)
export default Create;
