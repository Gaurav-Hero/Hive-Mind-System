import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store hashed passwords
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  profilePicture: { type: String }, // URL for the profile picture
  bio: { type: String }, // Optional description or details about the user
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);
