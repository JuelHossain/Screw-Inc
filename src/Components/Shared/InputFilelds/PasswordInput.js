import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';

const PasswordInput = ({ register, errors,...props }) => {
  //show password state
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextField
      {...register("password", {
        required: {
          value: true,
          message: "Password Is Required",
        },
        minLength: {
          value: 6,
          message: "Password Should At Least 6 Character",
        },
      })}
      error={Boolean(errors.password)}
      helperText={errors.password?.message}
      margin="normal"
      required
      fullWidth
      label="Password"
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default PasswordInput;