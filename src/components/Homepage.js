import Nav from "./Nav"; 
import Hero from "./Hero"; 
import Highlights from "./Highlights"; 
import Testimonials from "./Testimonials"; 
import About from "./About"; 
import Footer from "./Footer"; 

import { ChakraProvider } from "@chakra-ui/react"; 
import Highlights2 from "./Highlights2";
import Hero2 from "./Hero2";

function Homepage() {
  return (
      <ChakraProvider>
        <main>
          <Nav/>
          <Hero2/>
          <Highlights2/>
          <Testimonials/>
          <About/>
          <Footer/>
        </main>
      </ChakraProvider>
  );
}

export default Homepage;