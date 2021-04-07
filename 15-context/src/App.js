import "./App.css";
import ColorBox from "./ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
