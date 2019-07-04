import React from "react";
import AdvForm from "./AdvForm";
import AdvList from "./AdvList";
import "./App.css";

const App = () => {
  return (
    <div className="ui container">
      <AdvForm />
      <AdvList />
    </div>
  );
};

export default App;
