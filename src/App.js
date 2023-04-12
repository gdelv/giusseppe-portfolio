// import { useEffect } from "react";
import About from "./components/About";
import "./App.css";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Nav from "./components/shared/Nav";
import Projects from "./components/Projects";
import Loading from "./components/shared/Loading";

function App() {
  return (
    <>
      <Nav/>
      <div class="holster">
        <div class="container y mandatory-scroll-snapping" dir="ltr">
          <Loading />
          <Intro />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
