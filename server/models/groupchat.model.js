const groupSchema = new mongoose.Schema({
    groupName: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    messages: [
      {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  });
  
  export default mongoose.model('Group', groupSchema);
  