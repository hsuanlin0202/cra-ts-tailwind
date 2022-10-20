import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "pages/Home";
import CardForm from "pages/CardForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/card-form" element={<CardForm />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
