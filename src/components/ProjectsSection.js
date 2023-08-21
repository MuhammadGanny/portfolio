import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const ProjectsSection = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Project Title
          </Typography>
          <Typography variant="body1">
            {/* Project description */}
          </Typography>
          <Typography variant="body2">
            Technologies used: {/* List of technologies */}
          </Typography>
          <a href="project-link">Live Demo</a> | <a href="repo-link">Source Code</a>
        </CardContent>
      </Card>
      {/* Repeat Card components for each project */}
    </Container>
  );
};

export default ProjectsSection;
