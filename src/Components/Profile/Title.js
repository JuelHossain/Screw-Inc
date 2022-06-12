
import {  Paper } from '@mui/material';
import React from 'react';

const Title = ({value,register}) => {
  return (
      <Paper sx={{ p: 1, m:2}}>
      <input
        {...register("name", {
          required: {
            value: true,
            message: 'Name is required'
          }
        })}
        className='text-5xl font-bold text-center w-full h-full text-stone-700'
        type="text"
        defaultValue={value}
      />
    </Paper>
  );
};

export default Title;