import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { Route } from "react-router";
import About from "./About";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
