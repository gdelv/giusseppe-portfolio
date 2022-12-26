// import { useEffect } from "react";
import "./App.css";
import Intro from "./Intro";
import Nav from "./Nav";
import { Test } from "./Test";

function App() {
//     useEffect(() => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       console.log(entry);
//       console.log(entry.isIntersecting);
//       console.log(entry.intersectionRect.height + ' height');
//       console.log(entry.intersectionRect.bottom + ' bottom');
//       console.log(entry.intersectionRect.y + ' y');
//       console.log(entry.intersectionRatio.valueOf() + ' value');
//       // if entry is intersecting
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show')
//         // entry.target.classList.remove('hidden')
//       } else {
//         entry.target.classList.remove('show')
//         // entry.target.classList.add('hidden')
//       }
//         // add class "show"
//       // else remove show
//     });
//   });
//   const hiddenElements = document.querySelectorAll('#giusseppe')
//   hiddenElements.forEach(el => observer.observe(el))
//     // return () => {
//     //  unobserve 
//     // };
// }, []);
  return (
    <>
    <Nav/>
    <div class="holster">
      <div class="container y mandatory-scroll-snapping" dir="ltr">
        <Intro/>
        {/* <div className="page">1</div>
        <div className="page">2</div> */}
        <Test/>
        {/* <div id="giusseppe" className="page">3</div>
        <div className="page">4</div>
        <div className="page">5</div> */}
      </div>
    </div>
    </>
  );
}

export default App;
