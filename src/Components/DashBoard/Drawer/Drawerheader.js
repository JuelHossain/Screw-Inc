import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { DrawerHeader } from './Mixins';

const Drawerheader = ({handleDrawerClose,theme}) => {
    return (
        <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRight/>
          ) : (
            <ChevronLeft/>
          )}
        </IconButton>
      </DrawerHeader>
    );
};

export default Drawerheader;