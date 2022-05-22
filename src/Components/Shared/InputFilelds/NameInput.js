import { TextField } from '@mui/material';
import React from 'react';

const NameInput = ({register,errors,name,label,...props}) => {
    return (
      <TextField
        {...register(name, {
          required: {
            value: true,
            message: `${name} is required`,
          },
        })}
        error={Boolean(errors.firstName)}
        helperText={errors.firstName?.message}
        autoComplete="given-name"
        fullWidth
        label={label}
        {...props}
      />
    );
};

export default NameInput;