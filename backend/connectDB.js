import mongoose from 'mongoose';

async function connectDB() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI, { family: 4 });
    console.log('connected with server'.bgRed.bold);
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDB;
