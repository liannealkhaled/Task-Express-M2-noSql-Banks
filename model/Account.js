const { Schema, model } = require("mongoose");

const accountSchema = new Schema({
  username: { type: String, required: true },
  funds: { type: Number, required: true },
});
module.exports = model("account", accountSchema);
