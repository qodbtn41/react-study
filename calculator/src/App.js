import "./App.scss";
import CalculateArea from "./calculate/CalculateArea";
import HistoryArea from "./history/HistoryArea";

function App() {
  return (
    <div className="root">
      <CalculateArea />
      <HistoryArea />
    </div>
  );
}

export default App;
