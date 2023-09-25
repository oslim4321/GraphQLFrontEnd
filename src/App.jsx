import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
function App() {
  // <Project />
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/project/:id" element={<Project />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
