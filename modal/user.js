import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  image:{
   type:String,
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  additionalInfo:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Profile"
  }
});

export default mongoose.model("User", userSchema);

