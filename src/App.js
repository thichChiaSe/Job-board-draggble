import "./App.css";
import Jobs from "./components/jobs";

function App() {
  return (
    <div className="App">
      <div className="app">
        <header style={{ padding: "10px", width: "100%", textAlign: "center" }}>
          <h1
            style={{
              color: "#000",
              fontSize: "2rem",
              fontFamily: "Poppins",
              color: "#fff",
            }}
          >
            Job Board Draggble
          </h1>
        </header>
        <main style={{ padding: "20px" }}>
          <Jobs />
        </main>
      </div>
    </div>
  );
}

export default App;
