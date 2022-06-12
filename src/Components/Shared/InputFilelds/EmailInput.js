import { TextField } from '@mui/material';
import React from 'react';

const EmailInput = ({register,errors,...props}) => {
    return (
      <TextField
        {...register("email", {
          required: {
            value: true,
            message: "Email Is Required",
          },
          pattern: {
            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message: "Email Must Be Valid",
          },
        })}
        error={Boolean(errors?.email)}
        helperText={errors?.email?.message}
        margin="normal"
        fullWidth
        label="Email Address"
        {...props}
      />
    );
};

export default EmailInput;