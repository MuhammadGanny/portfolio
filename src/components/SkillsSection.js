import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const SkillsSection = () => {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    // Add more skills
  ];

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1">
        Here are some of the skills I possess:
      </Typography>
      <Divider style={{ margin: '16px 0' }} />
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SkillsSection;
