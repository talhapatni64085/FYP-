import React from "react";
import { MyStack } from "./routes/homestack";
import Ground from "./src/screens/Ground";
import SignIn from "./src/screens/SignIn";
import Home from "./src/screens/Home";
import RLCA from "./src/screens/RLCA";
import GroundHome from "./src/screens/GroundHome";

const App = () => {
  return (
    <MyStack>
      <SignIn/>
    </MyStack>
    //<Ground/>
  );
}

export default App;