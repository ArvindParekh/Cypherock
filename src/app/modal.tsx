import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
import HorizontalLinearStepper from './stepper';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
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

export default function CustomizedDialogs({ openStatus, close }) {

    return (
        <BootstrapDialog
            onClose={close}
            aria-labelledby="customized-dialog-title"
            open={openStatus}
            fullWidth={true}
            maxWidth="md"
        >
            <DialogTitle id="customized-dialog-title" className="text-center" sx={{ mt: 4, fontSize: 28, fontWeight: "medium" }}>
                Receive
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={close}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <img onClick={close} aria-label='close-button' className='w-5 h-5' src='/close.svg' sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }} />
            </IconButton>

            <DialogContent sx={{ m: 0, p: 0 }}>
                <HorizontalLinearStepper />
            </DialogContent>

            {/* <DialogActions>
                <Button autoFocus onClick={close}>
                    Save changes
                </Button>
            </DialogActions> */}
        </BootstrapDialog>
    );
}
