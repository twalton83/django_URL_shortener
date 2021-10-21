import app from "./index";
require("dotenv").config();
const { MongoClient } = require("mongodb");

const mongoURI = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.72ay1.mongodb.net/lilliputly?retryWrites=true&w=majority`;

const client = new MongoClient(mongoURI);

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
}

main();

app.listen(8000, () => {
  console.log("Server is live on" + process.env.PORT);
});
