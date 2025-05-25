import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;


const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173'; 
app.use(cors({
  origin: clientOrigin,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  isnew: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

const noteSchema = new mongoose.Schema({
  content: String
});
const AdminNote = mongoose.model('AdminNote', noteSchema);


app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending message', error: err });
  }
});

app.post('/admin', async (req, res) => {
  const { password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching messages' });
  }
});

app.get('/admin/messages', async (req, res) => {
  const { newOnly } = req.query;
  try {
    const messages = newOnly === 'true'
      ? await Contact.find({ isnew: true }).sort({ createdAt: -1 })
      : await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching messages' });
  }
});

app.patch('/admin/message/:id/read', async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, { isnew: false });
    res.status(200).json({ message: 'Marked as read' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating message' });
  }
});


app.delete('/admin/message/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting message' });
  }
});


app.patch('/admin/message/:id/toggle', async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);
    message.isnew = !message.isnew;
    await message.save();
    res.status(200).json({ message: 'Toggled read status' });
  } catch (err) {
    res.status(500).json({ message: 'Error toggling message status' });
  }
});

app.listen(port, () => {
  console.log(`Server running on ${process.env.SERVER_URL || `http://localhost:${port}`}`);
});
