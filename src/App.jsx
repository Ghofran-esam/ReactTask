import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

function App(){
  return <>

  <Navbar/>
      <Hero/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>


  </>
  
}
export default App;