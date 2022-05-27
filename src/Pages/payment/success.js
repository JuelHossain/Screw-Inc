import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Success = ({title,des}) => {
    return (
      <Container maxWidth="sm">
        <Paper>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="h6">{des}</Typography>
        </Paper>
      </Container>
    );
};

export default Success;