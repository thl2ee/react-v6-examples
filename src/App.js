const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.region),
  ])
}

// Function to create reusable component, like building a rubber stamp to stamp some where else
const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", { id: "adopt-me-logo" }, "Adopt Me!"),
      // ...["Three", "Two", "One"].map((i) => React.createElement("h2", {}, i)),
      React.createElement(Pet, { name: "Aiya", animal: "Rabbit", region: "Thailand" }),
      React.createElement(Pet, { name: "Ta-Waan", animal: "Rabbit", region: "Thailand" }),
      React.createElement(Pet, { name: "Mim", animal: "Cat", region: "Thailand" }),
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));