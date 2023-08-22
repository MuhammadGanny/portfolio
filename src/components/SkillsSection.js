import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import '../index';

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
    <Container style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <Typography variant="h2" gutterBottom>
          Skills
        </Typography>
        <Typography variant="body1">
          Here are some of the skills I possess:
        </Typography>
        <Divider style={{ margin: '16px 0' }} />
        < List className="list">
          {skills.map((skill, index) => (
            <ListItem key={index}>
              <ListItemText primary={skill} />
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  );
};

export default SkillsSection;









// import React from 'react';
// import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

// const Section = ({ title, content }) => (
//   <Container style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//     <div>
//       <Typography variant="h2" gutterBottom>
//         {title}
//       </Typography>
//       <Typography variant="body1">
//         {content}
//       </Typography>
//     </div>
//   </Container>
// );

// const SkillsSection = () => {
//   const skills = [
//     'HTML5',
//     'CSS3',
//     'JavaScript',
//     'React',
//     'Node.js',
//     'Express.js',
//     'MongoDB'
//     // Add more skills
//   ];

//   return (
//     <Section title="Skills" content="Here are some of the skills I possess:">
//       <List>
//         {skills.map((skill, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={skill} />
//           </ListItem>
//         ))}
//       </List>
//     </Section>
//   );
// };

// export default SkillsSection;
