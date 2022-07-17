import mongoose from "mongoose";

/* CodeData will correspond to a collection in your MongoDB database. */
const CodeData = new mongoose.Schema({
  pasteId: {
    type: String,
    unique: true,
  },
  title: {
    // Title of the code

    type: String,
    required: [true, "Please provide a name for this code."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  author: {
    // The author of the code

    type: String,
    maxlength: [60, "Author's name cannot be more than 60 characters"],
  },
  language: {
    // The language the code was written in

    type: String,
    required: [true, "Please specify the language."],
    maxlength: [40, "language can't be more than 40 characters"],
  },
  code: {
    //   The code
    type: String,
    required: [true, "The code cannot be empty"],
    maxlength: [4000, "Code can't be more than 2000 characters long"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
  },
});

CodeData.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.models.CodeData || mongoose.model("CodeData", CodeData);
