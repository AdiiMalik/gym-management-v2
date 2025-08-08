// import mongoose from "mongoose";

// const memberSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: { type: String, required: true },
//   membershipType: {
//     type: String,
//     enum: ['Gold', 'Silver', 'Premium'],
//     required: true,
//   },
// });

// const Member = mongoose.model("Member", memberSchema);
// export default Member;


import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  membershipType: {
    type: String,
    enum: ['Gold', 'Silver', 'Premium'],
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // ✅ Added
});

const Member = mongoose.model("Member", memberSchema);
export default Member;

