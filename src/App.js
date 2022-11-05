import CountButton from "./components/CountButton/CountButton";
import Github from "./components/Github";

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <h2>Cole Orelup - c67g568</h2>

      <hr></hr>
      <CountButton incrementBy={1} />
      <hr></hr>
      <CountButton incrementBy={2} />
      <hr></hr>
      <Github />
      <hr></hr>
    </div>
  );
}

export default App;
