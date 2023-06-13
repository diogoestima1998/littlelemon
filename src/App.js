import Nav from "./components/Nav"; 
import Hero from "./components/Hero"; 
import Highlights from "./components/Highlights"; 
import Testimonials from "./components/Testimonials"; 
import About from "./components/About"; 
import Footer from "./components/Footer"; 
import BookingForm from './components/BookingForm';
import { ChakraProvider } from "@chakra-ui/react"; 
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <main>
          <Nav/>
          <Hero/>
          <Highlights/>
          <Testimonials/>
          <About/>
          <Footer/>
        </main>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
