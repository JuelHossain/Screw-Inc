import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

const ConfirmPasswordInput = ({ register, errors,passwordValue, ...props }) => {
  //show password state
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextField
      {...register("confirmPassword", {
        required: {
          value: true,
          message: "Password Should Match",
        },
        validate: (value) =>
          value === passwordValue || "Password Doesn't Match",
      })}
      error={Boolean(errors.confirmPassword)}
      helperText={errors.confirmPassword?.message}
      margin="normal"
      required
      fullWidth
      label="Confirm Password"
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

export default ConfirmPasswordInput;
