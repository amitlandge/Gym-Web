import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Footer from "./component/Footer";
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
