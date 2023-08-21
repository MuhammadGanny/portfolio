import React from "react"
import './App.css';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Nav from "./components/NavBar"
import AboutSection from "./components/AboutSection"
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import SkillsSection from './components/SkillsSection';



const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Change the primary color
    },
    secondary: {
      main: '#ff6f00', // Change the secondary color
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Nav />
        <Container>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
