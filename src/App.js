import React from "react";
import GeneralForm from "./component/GeneralForm";
import Select from "./component/Select";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import { createBrowserHistory } from "history";

import "./App.css";

function App() {
  const history = createBrowserHistory({ window });
  return (
    <div className="app">
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<GeneralForm />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
