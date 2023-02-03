import { Box, Container, Typography } from "@mui/material";
import Header from "../header/Header";

function About() {
  return (
    <Container>
      <Header />
      <Box sx={{ width: '100%' }}>
        <Typography variant="h3" gutterBottom sx={{ p: 2 }}>
          1. Lolien
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ p: 2 }}>
          2. 클랜장
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ p: 2 }}>
          3. 개발자
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
