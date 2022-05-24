import { Edit } from '@mui/icons-material';
import { Box, IconButton, InputBase, Paper, TextField } from '@mui/material';
import React from 'react';

const Title = ({value,register}) => {
  return (
      <Paper sx={{ p: 1, m:2}}>
      <input
        {...register("name")}
        className='text-5xl font-bold text-center w-full h-full text-stone-700'
        type="text"
        defaultValue={value}
      />
    </Paper>
  );
};

export default Title;