const mongoose = require("../config/database");
const { v4: uuidv4 } = require("uuid");

const UserSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  phone: { type: String },
  createAt: { type: Date, default: Date.now },
});


const Clients = mongoose.model("Clients", UserSchema);

module.exports = Clients;