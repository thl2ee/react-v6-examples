import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// Function to create reusable component, like building a rubber stamp to stamp some where else
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "adopt-me-logo" }, "Adopt Me!"),
    // ...["Three", "Two", "One"].map((i) => React.createElement("h2", {}, i)),
    React.createElement(Pet, {
      name: "Aiyaaaaa!",
      animal: "Rabbit",
      region: "Thailand",
    }),
    React.createElement(Pet, {
      name: "Ta-Waan",
      animal: "Rabbit",
      region: "Thailand",
    }),
    React.createElement(Pet, {
      name: "Miiiiim",
      animal: "Cat",
      region: "Thailand",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
