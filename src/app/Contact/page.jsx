import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { inputFormElements } from "./formElement";

const margin = {
  margin: "20px 0 12px",
};

const Contact = () => {
  return (
    <Box>
      <Typography gutterBottom variant="h3" align="center">
        Contact
      </Typography>
      <Grid container justifyContent="center">
        <Card style={{ maxWidth: 450, padding: "20px 5px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and our team will get back to you within 24
              hours.
            </Typography>
            <form>
              <Typography variant="body2" align="left" gutterBottom>
                Personal Info :{" "}
              </Typography>
              <Grid container spacing={1}>
                {inputFormElements.map((input, index) => (
                  <Grid key={index} xs={input.xs} sm={input.sm} item>
                    <TextField {...input} />
                  </Grid>
                ))}
                <Grid item xs={12} align="right">
                  <Button
                    style={margin}
                    type="reset"
                    variant="outlined"
                    color="primary"
                  >
                    Reset
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Contact;
