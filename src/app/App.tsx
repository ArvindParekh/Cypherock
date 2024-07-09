import dashboardData from "../data/dashboard";
import navbar from "./navbar";
import sidebar from "./sidebar"
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import HorizontalLinearStepper from "./stepper";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    backgroundColor: '#13161A',
    color: 'white',
    width: '686px', // Adjust the width here
    height: '561px', // Adjust the height here
  },
}));

function App() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <nav className="w-full h-24 flex items-center justify-between">
        {navbar.map((navbarComponent) => {
          return navbarComponent;
        })}
      </nav>

      <section className="flex items-center justify-center w-full h-full">
        <aside className="h-full flex flex-col items-center justify-between gap-5 w-[15%] bg-[#161C23]">
          {sidebar.map((sidebarComponent) => {
            return sidebarComponent;
          })}
        </aside>

        <article className="h-full w-[85%] flex flex-col p-5 gap-5">
          <div className="w-full h-14 border flex flex-row-reverse items-center gap-5">
            <img src="lock.svg" />
            <img src="semicircle.svg" />
            <span className="text-[#F5CEA3] font-medium">Synchronized</span>
            <img src="tick.svg" className="w-7 h-7" />
          </div>

          <div className="w-full flex items-center justify-between">
            <h1 className="text-[#C78D4E] text-xl font-bold">Wallet 1</h1>
            <button className="flex bg-white/[6%] px-7 py-2 rounded-md text-[#BEB4A8]">
              + Add Coin
            </button>
          </div>

          <div className="w-full h-14 flex items-center justify-between border bg-[#161C23] px-4">
            <span className="text-[#ADABAA]">Total coin - 6</span>
            <span className="text-[#BEB4A8]">Amount High - Low</span>
          </div>

          <div className="w-full border flex flex-col justify-center gap-5">


            {dashboardData.map((data) => {
              return (<div className="w-full h-20 grid grid-cols-4 gap-3 place-items-center bg-[#161C23] text-[#ADABAA] font-bold">
                <div className="flex items-center gap-5">
                  <img src={data.img} />
                  <span>{data.name}</span>
                </div>
                <div>{data.crypto}</div>
                <div>{data.usd}</div>
                <div>
                  <button variant="outlined" onClick={handleClickOpen} className="text-[#8484F1]">Receive</button>
                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <DialogTitle id="customized-dialog-title" className="text-center">
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
                      {/* <CloseIcon /> */}
                    </IconButton>
                    <DialogContent>
                      <HorizontalLinearStepper />

                    </DialogContent>
                    {/* <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                        Save changes
                      </Button>
                    </DialogActions> */}
                  </BootstrapDialog>
                  <span className="text-[#CAA276]">Send</span>
                </div>
              </div>)
            })}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
