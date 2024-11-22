const privateChatSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  messages: {type: String , required: true},
  },
  {timestamps: true});
  
  export default mongoose.model('PrivateChat', privateChatSchema);
  