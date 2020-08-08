import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RoomProvider } from "./context";

ReactDOM.render(
  <RoomProvider>
    <App />
  </RoomProvider>,
  document.querySelector("#root")
);
