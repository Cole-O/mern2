import CountButton from "./CountButton";

function App() {
  return (
    <div className="App">
      <CountButton incrementBy={2} />
      <CountButton incrementBy={5} />

      <br></br>
      Github: Cole-O
    </div>
  );
}

export default App;
