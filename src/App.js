const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "AdoptMe!"),
    React.createElement(Pet, {
      name: "Jimmy",
      animal: "Dog",
      breed: "German Shepard",
    }),
    React.createElement(Pet, { name: "Booki", animal: "Dog", breed: "Mixed" }),
  ]);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
