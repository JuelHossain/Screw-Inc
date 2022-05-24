import { Edit, PhotoSizeSelectLarge,} from '@mui/icons-material';
import { Avatar, Box, IconButton, Input } from '@mui/material';
import React, { useState } from 'react';

const Photo = ({ photo,size,register,selected,}) => {
    const [hover, setHover] = useState(false);
    return (
      <Box justifyContent={"center"}>
        <label htmlFor="icon-button-file">
          <Input
            {...register('photoURL')}
            sx={{ display: "none" }}
            accept="image/*"
            id="icon-button-file"
            type="file"
          />
          <IconButton
            sx={{ height:size, width: size }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            {hover ? (
              <Avatar>
                <Edit></Edit>
              </Avatar>
            ):selected?<Avatar><PhotoSizeSelectLarge/></Avatar>:(
              <Avatar
                sx={{ height: "100%", width: "100%" }}
                alt={'Random Photo'}
                src={photo}
              />
            )}
          </IconButton>
        </label>
      </Box>
    );
};

export default Photo;