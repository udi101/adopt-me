import React from "react";
import ReactDOM from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Jimmy" animal="Dog" breed="German Shefard" />
      <Pet name="Booki" animal="Dog" breed="Mixed" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
