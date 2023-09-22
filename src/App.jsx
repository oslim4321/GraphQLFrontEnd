import "./App.css";
import AddClient from "./component/AddClient";
import Clients from "./component/Clients";
import Header from "./component/Header";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AddClient />
        <Clients />
      </div>
    </>
  );
}

export default App;
