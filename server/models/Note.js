const mongoose = require("mongoose");

const { Schema } = mongoose;

const noteSchema = new Schema({
  entryDate: {
    type: Date,
    default: Date.now,
  },
  noteText: {
    type: String,
    required: true,
    trim: true,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
