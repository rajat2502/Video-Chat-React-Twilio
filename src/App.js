import React from "react";
import "./App.css";

import VideoChat from "./Components/VideoChat";

const App = () => {
  return (
    <div className="app">
      <header>
        <h2>Video Chat with React</h2>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          Made with{" "}
          <span role="img" aria-label="React">
            ⚛
          </span>{" "}
          by <a href="https://github.com/rajat2502">Rajat</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
