import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <ScrollLink to="about" smooth={true}><Button color="inherit">About</Button></ScrollLink>
        <ScrollLink to="skills" smooth={true}><Button color="inherit">Skills</Button></ScrollLink>
        <ScrollLink to="projects" smooth={true}><Button color="inherit">Projects</Button></ScrollLink>
        <ScrollLink to="contact" smooth={true}><Button color="inherit">Contact</Button></ScrollLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
