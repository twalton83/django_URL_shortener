import mongoose from 'mongoose';
const {Schema} = mongoose;

export const urlSchema = new Schema({
  originalUrl: String,
  shortenedUrl: String,
  date: {type: Date, default: Date.now}
})
