import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, styled } from '@mui/material';
import HorizontalLinearStepper from './stepper';

export default function ReceiveModal() {
    const [open, setOpen] = React.useState(false);

    const BootstrapDialog = styled(Dialog)(() => ({
        '& .MuiDialogContent-root': {
            // padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            // padding: theme.spacing(1),
        },
        '& .MuiDialog-paper': {
            backgroundColor: '#13161A',
            color: 'white',
            // width: '886px', // Adjust the width here
            // height: '561px', // Adjust the height here
        },
    }));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <div className="flex items-center gap-3">
                <img src="/down_arrow.svg" />
                <button onClick={handleClickOpen} className="text-[#8484F1] font-extrabold">RECEIVE</button>
            </div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={true}
                maxWidth="md"
            >
                <DialogTitle id="customized-dialog-title" className="text-center" sx={{ mt: 4, fontSize: 28, fontWeight: "medium" }}>
                    Receive
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <img aria-label='close-button' className='w-5 h-5' src='/close.svg' sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        // color: (theme) => theme.palette.grey[500],
                    }} />
                </IconButton>

                <DialogContent sx={{ m: 0, p: 0 }}>
                    <HorizontalLinearStepper />
                </DialogContent>

            </BootstrapDialog>
        </React.Fragment>
    );
}
