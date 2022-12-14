const { Schema, model } = require("../index");

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /\w+@\w+\.\w+/ },
    password: { type: String, required: true },
    isMale: Boolean,
    birthday: { type: Date },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User
