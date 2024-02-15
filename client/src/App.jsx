import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}
