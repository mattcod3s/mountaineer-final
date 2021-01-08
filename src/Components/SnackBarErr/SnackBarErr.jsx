import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const ErrSnackbar = ({ error, setError }) => {
    

    const handleClose = ( event, reason ) => {
        if (reason === 'clickaway') return ;

        setError(false);
    }

    return (
        <div>
            <Snackbar
            anchorOrigin={{ vertical : 'top', horizontal : 'right' }}
            open={error}
            autoHideDuration={3000}
            onClose={handleClose}
            style={{marginTop: '200px', position: 'fixed'}}
            >
                <MuiAlert onClose={handleClose} severity="error" elevation={6} variant="filled">
                    Form Missing Required Fields
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default ErrSnackbar;