import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </main>
    </>
  );
}

export default App;
