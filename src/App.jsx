import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Hamburger from "./component/Hamburger.jsx";
import { useState } from "react";
import Navbar from "./component/Navbar.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import GetInTouch from "./pages/GetInTouch.jsx";
function App() {
  const [open, setOpen] = useState(false);
  const onPop = () => {
    setOpen(true);
  };
  const onCloseDrawer = () => {
    setOpen(false);
  };
  return (
    <>
      <nav>
        <Hamburger onOpenDrawerHandler={onPop} />
        <Navbar isOpen={open} toggleDrawer={onCloseDrawer} />
        <Header />
      </nav>
      <main>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<About />} path="/about" />
          <Route element={<Services />} path="/services" />
          <Route element={<GetInTouch />} path="/contact" />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
