// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import memberRoutes from './routes/memberRoutes.js';
// import authRoutes from './routes/authRoutes.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/members', memberRoutes);
// app.use('/api/auth', authRoutes);

// // DB Connection ✅ Updated: removed deprecated options
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//     console.log('MongoDB Connected');
//   })
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import memberRoutes from './routes/memberRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import productRoutes from "./routes/productRoutes.js";
import saleRoutes from "./routes/saleRoutes.js";
import path from "path";
import fs from "fs";
dotenv.config();
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const app = express();
const PORT = process.env.PORT || 5000;

const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Enhanced CORS configuration
app.use(cors({
  origin: [
    'http://localhost:5173', // Your Vite frontend
    // 'https://gym-dashboard-project.netlify.app' // Your production frontend
    'https://gym-managment-adi.netlify.app'
  ],
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Updated Routes - removed '/api' prefix to match frontend
app.use('/api/members', memberRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api', adminRoutes); // So routes will be /api/admins/pending, etc.
// Enhanced MongoDB connection
app.use("/api/products", productRoutes);
app.use("/api/sales", saleRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('✅ MongoDB Connected');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1); // Exit if DB connection fails
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('🔥 Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import memberRoutes from './routes/memberRoutes.js';
// import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// import productRoutes from "./routes/productRoutes.js";
// import saleRoutes from "./routes/saleRoutes.js";
// import path from "path";
// import fs from "fs";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// const uploadDir = "uploads";
// if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// // CORS configuration
// app.use(cors({
//   origin: [
//     'http://localhost:5173',
//     'https://gym-managment-adi.netlify.app'
//   ],
//   methods: ['GET','POST','PATCH','PUT','DELETE'],
//   credentials: true
// }));

// app.use(express.json());

// // Routes
// app.use('/api/members', memberRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api', adminRoutes); // /api/admins/...
// app.use("/api/products", productRoutes);
// app.use("/api/sales", saleRoutes);

// // MongoDB connection with retry
// const connectWithRetry = async (retries = 5, delay = 5000) => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI); // no deprecated options
//     console.log('✅ MongoDB Connected');
//     app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
//   } catch (err) {
//     console.error(`❌ MongoDB connection error: ${err.message}`);
//     if (retries > 0) {
//       console.log(`🔄 Retrying in ${delay / 1000}s... (${retries} attempts left)`);
//       setTimeout(() => connectWithRetry(retries - 1, delay), delay);
//     } else {
//       console.error('💀 Could not connect to MongoDB. Exiting...');
//       process.exit(1);
//     }
//   }
// };


// connectWithRetry();

// // Health check endpoint
// app.get('/health', (req, res) => res.status(200).json({ status: 'healthy' }));

// // Global error handling
// app.use((err, req, res, next) => {
//   console.error('🔥 Server error:', err);
//   res.status(500).json({
//     success: false,
//     message: 'Internal server error',
//     error: process.env.NODE_ENV === 'development' ? err.message : undefined
//   });
// });


