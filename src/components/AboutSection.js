import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        {/* Your about me content */}
      </Typography>
    </Container>
  );
};

export default AboutSection;
