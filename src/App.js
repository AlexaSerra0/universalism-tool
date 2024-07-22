import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Components/Home";
import Information from "./Components/Information";
import Instructions from "./Components/Instructions";
import Navbar from "./Components/Navbar";
import Tool from "./Components/Tool";
import ExampleShareTheMeal from "./Components/ExampleShareTheMeal";
import ExampleBrightSky from "./Components/ExampleBrightSky";
import Questions from "./Components/Questions";
import Document from "./Components/Document";
 
function App() {
  return (
      <Router>
        <Navbar/>
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/information" element={<Information />} />
              <Route path="/instructions" element={<Instructions />} />
              <Route path="/tool" element={<Tool />} />
              <Route path="/example_ShareTheMeal" element={<ExampleShareTheMeal />} />
              <Route path="/example_BrightSky" element={<ExampleBrightSky />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/document" element={<Document />} />
          </Routes>
        </main>
      </Router>
  );
}

export default App;
