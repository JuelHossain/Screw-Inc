import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react';

const FormControl = ({agreed,setAgreed,setTermsOpen}) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            onClick={() => {
              setAgreed(!agreed);
            }}
            value="allowExtraEmails"
            color="primary"
          />
        }
        label={
          <Typography>
            I Agree to The
            <Button
              sx={{
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              }}
              onClick={() => {
                setTermsOpen(true);
              }}
            >
              Terms And Conditions
            </Button>
          </Typography>
        }
      />
    );
};

export default FormControl;