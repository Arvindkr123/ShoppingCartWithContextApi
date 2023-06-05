import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Nav from "./components/Nav";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Cart/>
      <HomeScreen />
    </div>
  );
};

export default App;
