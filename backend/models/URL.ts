import mongoose from 'mongoose';
const {Schema} = mongoose;

interface Url {
  originalUrl: string;
  shortenedUrl: string;
  date: DateConstructor;
}

const urlSchema = new Schema<Url>({
  originalUrl: String,
  shortenedUrl: String,
  date: {type: Date, default: Date}
})

export const Url = mongoose.model<Url>('URL', urlSchema)