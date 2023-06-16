import Nav from "./Nav"; 
import Hero from "./Hero"; 
import Highlights from "./Highlights"; 
import Testimonials from "./Testimonials"; 
import About from "./About"; 
import Footer from "./Footer"; 

import { ChakraProvider } from "@chakra-ui/react"; 

function Homepage() {
  return (
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
  );
}

export default Homepage;