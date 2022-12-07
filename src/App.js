import "./App.css";
import { BodysNeeds, AllTheLatest } from "./components";

function App() {
  return (
    <div className="app">
      {/* Body's Needs */}
      <div>
        <BodysNeeds />
      </div>
      {/* All the Latest */}
      <div>
        <AllTheLatest />
      </div>
    </div>
  );
}

export default App;
