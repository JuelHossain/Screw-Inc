import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import React from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Confirm = ({ open, setOpen, title, text, agreed, falsy, truthy }) => {
    return (
      <div>

        <Dialog
          open={open}
                keepMounted
                TransitionComponent={Transition}
          onClose={() =>setOpen(false)}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color='error' onClick={()=>setOpen(false)}>{falsy ||'Cancal'}</Button>
                    <Button
                        color= 'success' 
                        onClick={() => {
                        agreed();
                        setOpen(false);
            }}>{truthy || 'Confirm'}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
};

export default Confirm;