import React from "react";
import { MyStack } from "./routes/homestack";
import SignIn from "./src/screens/SignIn";

const App = () => {
  return (
    <MyStack>
      <SignIn/>
    </MyStack>
  );
}

export default App;