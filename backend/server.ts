import app from "./routes/index";
require("dotenv").config();
import {connect} from 'mongoose'

const mongoURI = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.72ay1.mongodb.net/lilliputly?retryWrites=true&w=majority`;

connect(mongoURI)

app.listen(8000, () => {
  console.log("Server is live on" + process.env.PORT);
});
