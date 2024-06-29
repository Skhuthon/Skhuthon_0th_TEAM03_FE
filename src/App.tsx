import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ThemeRecs from "./pages/ThemeRecs";
import ThemeRecsQuestions from "./pages/ThemeRecsQuestions";
import ThemeRecsResult from "./pages/ThemeRecsResult";
import Navbar from "./components/Navbar";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import ReviewWriting from "./pages/ReviewWriting";
import ReviewList from "./pages/ReviewList";

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
                <Route path="/userPage" element={<UserPage />} />
                <Route path="/loginPage" element={<LoginPage />} />
                <Route path="/auth/kakao/redirect" element={<UserPage />} />
                <Route path="/reviewList" element={<ReviewList />} />
                <Route path="/reviewWriting" element={<ReviewWriting />} />
            </Routes>
        </Router>
    );
};

export default App;
