import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FormControl = ({agreed,setAgreed}) => {
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
            I Agree to The{" "}
            <Link
              to={"/termsandconditions"}
              className="underline-offset-2 underline"
            >
              Terms And Conditions
            </Link>
          </Typography>
        }
      />
    );
};

export default FormControl;