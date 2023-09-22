import "./App.css";
import Clients from "./component/Clients";
import Header from "./component/Header";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Clients />
      </div>
    </>
  );
}

export default App;
