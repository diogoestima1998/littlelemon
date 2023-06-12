import './App.css';
import Header from "./components/Header"; 
import Hero from "./components/Hero"; 
import Highlights from "./components/Highlights"; 
import Testimonials from "./components/Testimonials"; 
import About from "./components/About"; 
import Footer from "./components/Footer"; 


function App() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
    </main>
  );
}

export default App;
