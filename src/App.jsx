import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

function App(){
  return <>
  <Navbar/>
    <Portfolio/>
    <About/>
    <Contact/>

  </>
  
}
export default App;