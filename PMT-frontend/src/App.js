import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="content d-flex flex-column">
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
