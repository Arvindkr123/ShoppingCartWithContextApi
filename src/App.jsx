import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <HomeScreen />
    </div>
  );
};

export default App;
