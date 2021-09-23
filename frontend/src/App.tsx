import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL!).then((res) =>
      res.json().then((data) => console.log(data))
    );
  });
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
