import logo from "./logo.svg";
import "./App.css";
import React, {useEffect} from "react";

function App() {
  useEffect(() => {
    fetch("http://project.loc/php+react/srever/api/single_read.php/?id=6")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  }, []);

  return <div className="App"></div>;
}

export default App;
