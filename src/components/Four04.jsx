import React from "react";
import { Container, Typography, Button } from "@mui/material";
// import ConstructionIcon from "@mui/icons-material/Construction"; 
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Four04 = () => {
  return (
    <Container className="not-found-container">
      <ErrorOutlineIcon style={{ fontSize: "5rem", color: "#f57c00" }} />
      <Typography variant="h4" className="not-found-title">
        404
      </Typography>
      <Typography variant="body1" className="not-found-description">
        Sorry, this page is not available. Please check back later!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => (window.location.href = "/")} 
        className="not-found-button"
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default Four04;
