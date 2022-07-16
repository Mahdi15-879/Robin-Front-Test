import React from "react";

// Components
import Box from "./components/Box";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__body">
        <Box />
      </div>

      <div className="App__footer">
        <h4>&copy; 2022 Robin. All rights reserved.</h4>
      </div>
    </div>
  );
}

export default App;
