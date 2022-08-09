import React from "react";
import About from "./pages/About";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
