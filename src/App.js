import { useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
  const observer = new IntersectionObserver((entries, test2) => {
    entries.forEach(entry => {
      console.log(entry);
      console.log(entry.isIntersecting);
      console.log(entry.intersectionRect.height + ' height');
      console.log(entry.intersectionRect.bottom + ' bottom');
      console.log(entry.intersectionRect.y + ' y');
      console.log(entry.intersectionRatio.valueOf() + ' value');
      // if entry is intersecting
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        // entry.target.classList.remove('hidden')
      } else {
        entry.target.classList.remove('show')
        // entry.target.classList.add('hidden')
      }
        // add class "show"
      // else remove show
    });
  });
  const hiddenElements = document.querySelectorAll('.page')
  hiddenElements.forEach(el => observer.observe(el))
    // return () => {
    //  unobserve 
    // };
}, []);
  return (
    <div class="holster">
      <div class="container y mandatory-scroll-snapping" dir="ltr">
        <div className="page">1</div>
        <div className="page">2</div>
        <div className="page">3</div>
        <div className="page">4</div>
        <div className="page">5</div>
      </div>
    </div>
  );
}

export default App;
