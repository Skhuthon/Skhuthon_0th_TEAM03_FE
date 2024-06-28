import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ThemeRecs from "./pages/ThemeRecs";
import ThemeRecsQuestions from "./pages/ThemeRecsQuestions";
import ThemeRecsResult from "./pages/ThemeRecsResult";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/themeRecs" element={<ThemeRecs />} />
                <Route
                    path="/ThemeRecsQuestions"
                    element={<ThemeRecsQuestions />}
                />
                <Route path="/themeRecsResult" element={<ThemeRecsResult />} />
            </Routes>
        </Router>
    );
};

export default App;
