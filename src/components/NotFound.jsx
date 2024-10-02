import React from "react";
import { Container, Typography, Button } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction"; 

const NotFound = () => {
  return (
    <Container className="not-found-container">
      <ConstructionIcon style={{ fontSize: "5rem", color: "#f57c00" }} />
      <Typography variant="h4" className="not-found-title">
        Page Under Development
      </Typography>
      <Typography variant="body1" className="not-found-description">
        We are working hard to bring you this page. Please check back later!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.href = "/"} // Navigate to homepage
        className="not-found-button"
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFound;
