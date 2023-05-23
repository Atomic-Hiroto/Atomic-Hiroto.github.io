import { Box } from '@chakra-ui/react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Box m={0} backgroundColor={"#222831"}>
    <NavBar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact /> 
    </Box>
    </>
  );
}

export default App;
