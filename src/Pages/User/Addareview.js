import { Star } from '@mui/icons-material';
import { Button, Container, Divider, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Addareview = () => {
    const labels = {
      0.5: "Useless",
      1: "Useless+",
      1.5: "Poor",
      2: "Poor+",
      2.5: "Ok",
      3: "Ok+",
      3.5: "Good",
      4: "Good+",
      4.5: "Excellent",
      5: "Excellent+",
    };

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    function getLabelText(value) {
      return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
    }
    return (
      <Container maxWidth="md">
        <Typography variant="h6">Please Add A Review About Us.</Typography>
        <Divider />
        <Box sx={{ position: "relative" }}>
          <TextField
            label="Say Something about Us here"
            variant="filled"
            multiline
            rows="4"
            fullWidth
          />
          <Button
            sx={{ position: "absolute", bottom: -50, right: 4 }}
            variant="outlined" 
          >
            {" "}
            Add
          </Button>
        </Box>
        <Box
          sx={{
                    width: 400,
               fontSize:'20px',

            display: "flex",
                    alignItems: "center",
                    mt: 1.5,
            ml:2
          }}
        >
                <Rating
                    sx={{fontSize:'30px'}}
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <Star style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
      </Container>
    );
};

export default Addareview;