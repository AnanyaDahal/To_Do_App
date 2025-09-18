// require('dotenv').config();
// const mongoose = require('mongoose');

// console.log('Starting connection...');

// const connectWithTimeout = async () => {
//   const timeout = 10000; // 10 seconds timeout

//   const timer = setTimeout(() => {
//     console.error('MongoDB connection timed out!');
//     process.exit(1);
//   }, timeout);

//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     clearTimeout(timer);
//     console.log('MongoDB connected');
//     process.exit(0);
//   } catch (err) {
//     clearTimeout(timer);
//     console.error('MongoDB connection error:', err);
//     process.exit(1);
//   }
// };

// connectWithTimeout();
