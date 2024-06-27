import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ThemeRecs from "./pages/ThemeRecs";
import ThemeRecsQuestions from "./pages/ThemeRecsQuestions";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/themeRecs" Component={ThemeRecs} />
                <Route
                    path="/ThemeRecsQuestions"
                    Component={ThemeRecsQuestions}
                />
            </Routes>
        </Router>
    );
};

export default App;
