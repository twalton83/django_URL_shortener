import mongoose, { Document } from 'mongoose';
const {Schema, model} = mongoose;

interface ShortenedUrl extends Document{
  originalUrl: string;
  shortenedUrl: string;
  date: DateConstructor;
}

const schema = new Schema<ShortenedUrl>({
  originalUrl: String,
  shortenedUrl: String,
  date: {type: Date, default: Date}
})


export const ShortenedURL = mongoose.model<ShortenedUrl>('URL', schema)