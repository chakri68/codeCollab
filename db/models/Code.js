import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const CodeData = new mongoose.Schema({
  title: {
    // Title of the code

    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  author: {
    // The author of the code

    type: String,
    maxlength: [60, "Owner's Name cannot be more than 60 characters"],
  },
  language: {
    // The language the code was written in

    type: String,
    required: [true, "Please specify the species of your pet."],
    maxlength: [40, "Species specified cannot be more than 40 characters"],
  },
  date: {
    // When the code was written

    type: Number,
  },
  code: {
    //   The code
    type: String,
    required: [true, "The code cannot be empty"],
    maxlength: [2000, "Code can't be more than 2000 characters long"],
  },
});

export default mongoose.models.Code || mongoose.model("Code", CodeData);
