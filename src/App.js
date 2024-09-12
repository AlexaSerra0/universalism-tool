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
import Questions from "./Components/Questions";
import Document from "./Components/Document";
import DocumentsList from "./Components/DocumentList";

function App() {
    return (
        <Router>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/universalism-tool/" element={<Home />} />
                    <Route path="/universalism-tool/information" element={<Information />} />
                    <Route path="/universalism-tool/instructions" element={<Instructions />} />
                    <Route path="/universalism-tool/tool" element={<Tool />} />
                    <Route path="/universalism-tool/example_ShareTheMeal" element={<ExampleShareTheMeal />} />
                    <Route path="/universalism-tool/questions" element={<Questions />} />
                    <Route path="/universalism-tool/document" element={<Document />} />
                    <Route path="/universalism-tool/documents" element={<DocumentsList />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
