import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connect() {
    const mongoURL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/test';
    const mongoHOST = process.env.MONGO_USER || '';
    const mongoPWD = process.env.MONGO_PWD || '';
    await mongoose.connect(`mongodb+srv://${mongoHOST}:${mongoPWD}@${mongoURL}`)
    .catch(err => { console.log(err) });
}

export async function disconnect() {
    await mongoose.disconnect();
}