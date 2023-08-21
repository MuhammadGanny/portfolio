import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth margin="normal" required />
        <TextField label="Email" type="email" fullWidth margin="normal" required />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" required />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default ContactSection;
