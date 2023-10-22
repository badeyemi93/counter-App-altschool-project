import "./App.css";
import Counter from "./components/counter";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter />
      <ErrorBoundary></ErrorBoundary>
    </div>
  );
}

export default App;
