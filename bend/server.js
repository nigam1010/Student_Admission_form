const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const studentRoutes = require('./routes/studentRoutes');
const studentRoutes = require('./Routes/studentRoutes');
const cors = require('cors');
require('dotenv').config(); // ✅ Load .env variables

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoutes);

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
