import "./App.css";
import AddClient from "./component/AddClient";
import Clients from "./component/Clients";
import Header from "./component/Header";
import Project from "./component/Project";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AddClient />
        <Project />
        <Clients />
      </div>
    </>
  );
}

export default App;
