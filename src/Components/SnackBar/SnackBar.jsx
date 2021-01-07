
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './snackBarStyles';

const CustomizedSnackbar = ({ open, setOpen }) => {
    
    const classes = useStyles();

    const handleClose = ( event, reason ) => {
        if (reason === 'clickaway') return ;

        setOpen(false);
    }

    return (
        
            <Snackbar
            anchorOrigin={{ vertical : 'top', horizontal : 'right' }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            style={{marginTop: '200px', position: 'fixed'}}
            >
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
                    Trip Successfully Created.
                </MuiAlert>
            </Snackbar>
       
    )
}

export default CustomizedSnackbar;