import mongoose from 'mongoose';
const {Schema} = mongoose;

const urlSchema = new Schema({
  originalUrl: String,
  shortenedUrl: String,
  date: {type: Date, default: Date.now}
})

export const URL = mongoose.model('URL', urlSchema)