// import { useEffect } from "react";
import About from "./components/About";
import "./App.css";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Nav from "./components/shared/Nav";

function App() {
  return (
    <>
    <Nav/>
    <div class="holster">
      <div class="container y mandatory-scroll-snapping" dir="ltr">
        <Intro/>
        <About/>
        <Contact/>
      </div>
    </div>
    </>
  );
}

export default App;
