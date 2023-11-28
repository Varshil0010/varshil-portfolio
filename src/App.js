import About from "./components/About/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";
import Home from "./components/intro/Home";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <Social/>
    </div>
  );
}

export default App;
