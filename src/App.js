import React from "react";
import "./App.css";

import Header from "./Components/Header";
import VideoChat from "./Components/VideoChat";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <VideoChat />
      </main>
      <Footer />
    </div>
  );
};

export default App;
