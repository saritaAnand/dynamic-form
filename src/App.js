import React from "react";
import GeneralForm from "./component/GeneralForm";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";

// import { createBrowserHistory } from "history";

import "./App.css";

function App() {
  // const history = createBrowserHistory({ window });
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<GeneralForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
