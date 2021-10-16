import app from "./index";

app.listen(8000, () => {
  console.log("Server is live on" + process.env.PORT);
});
