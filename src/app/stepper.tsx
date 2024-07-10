import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';

const steps = ['Device', 'Verification', 'Receive'];

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
    '& .MuiStepLabel-label': {
        color: '#A2A1A1', // Step label color when not active or completed
    },
    '& .MuiStepLabel-label.Mui-active': {
        fontWeight: "bold",
        color: '#E19A4C', // Active step label color
    },
    '& .MuiStepLabel-label.Mui-completed': {
        color: 'gray', // Completed step label color
    },
}));

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());

    // const isStepOptional = (step: number) => step === 1;

    const isStepSkipped = (step: number) => skipped.has(step);

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText('25BKJNKNLJL58fjkdhfk26dnfds15');
            alert('Address copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy the address.');
        }
    };
    

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <Box className="">
                        <Typography sx={{ color: '#B1B1B1', fontSize: 20 }}>
                            Follow the instruction on device
                        </Typography>
                        <div className='flex flex-col justify-center gap-5 mt-5 text-[#8A8B90]'>

                            <div className='bg-[#FFFFFF]/[4%] h-12 rounded-lg flex items-center p-7 gap-4'>
                                <img src='/arrow.svg' />
                                <span>Select the Wallet On device</span>
                            </div>
                            <div className='bg-[#FFFFFF]/[4%] h-12 rounded-lg flex items-center p-7 gap-4'>
                                <img src='/arrow.svg' />
                                <span>Select the Coin on device</span>
                            </div>
                            <div className='bg-[#FFFFFF]/[4%] h-12 rounded-lg flex items-center p-7 gap-4'>
                                <img src='/arrow.svg' />
                                <span>Tap 1 card of any 4 Cards</span>
                            </div>

                        </div>
                    </Box>
                );
            case 1:
                return (
                    <Box>
                        <div className='w-full h-32 bg-[#FFFFFF]/[4%] border border-gray-50 border-dotted rounded-lg flex items-center justify-center my-10'>
                            <h1 className='text-[#E19A4C] font-bold text-2xl'>25BKJNKNLJL58fjkdhfk26dnfds15</h1>
                        </div>
                        <Typography sx={{ color: '#B1B1B1', fontSize: 20, fontWeight: "medium" }}>
                            Verify address on device
                        </Typography>
                        <div className='flex flex-col justify-center gap-5 mt-5 text-[#8A8B90]'>

                            <div className='bg-[#FFFFFF]/[4%] h-12 rounded-lg flex items-center p-7 gap-4'>
                                <img src='/arrow.svg' />
                                <span>Please match the <span className='font-bold'>address</span> to be shown in X1 Wallet</span>
                            </div>
                        </div>
                    </Box>
                );
            case 2:
                return (
                    <Box>
                        <Typography sx={{ color: '#B1B1B1', fontSize: 20, fontWeight: "medium" }}>
                            Coin Address
                        </Typography>
                        <div className='w-full h-20 bg-[#FFFFFF]/[4%] border border-gray-50 border-dotted rounded-lg flex items-center justify-evenly my-10'>
                            <h1 className='text-[#E19A4C] font-bold text-2xl'>25BKJNKNLJL58fjkdhfk26dnfds15</h1>
                            <button onClick={handleCopy} className='text-[#E7C49F] bg-[#FFFFFF]/[10%] px-5 py-2 rounded-lg text-center'>Copy</button>

                        </div>
                        <div className='flex items-center gap-3 mt-5 text-[#4848F6]'>
                            <img src='/exclaimation.svg' />
                            <span>address verified</span>
                        </div>

                        <div className='flex items-center justify-center'>
                            <Button onClick={handleReset} sx={{ px: 8, py: 1.5, border: "1px solid #4848F6", color: "#4848F6", fontSize: 14, fontWeight: "semibold", textTransform: "none", my: 5 }}>
                                Re-Verify
                            </Button>
                        </div>

                    </Box>
                );
            default:
                return 'Unknown step';
        }
    };

    const stepper = (
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                    optional?: React.ReactNode;
                } = {};
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step key={label} {...stepProps}>
                        <CustomStepLabel {...labelProps}>{label}</CustomStepLabel>
                    </Step>
                );
            })}
        </Stepper>
    )

    const finalStep = (
        <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, color: 'white' }}>
                All steps completed - you're finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
            </Box>
        </React.Fragment>
    )

    const intermediateSteps = (
        <React.Fragment>
            <Box sx={{ mt: 10, mb: 1, px: 13, mx: 'auto' }}> {/* Adjusted padding and added automatic horizontal margin */}
                {getStepContent(activeStep)}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pt: 7, width: '100%' }}>
                {activeStep === steps.length - 1 ? (
                    ""
                ) : (
                    <>
                        <Divider sx={{ width: '100%', border: "1px solid #272726" }} />
                        <Button onClick={handleNext} sx={{ color: '#3E3935', border: "1px solid #3E3935", alignSelf: 'end', my: 2, mr: 7, px: 7, py: 1.5, textTransform: "none", fontWeight: "medium", fontSize: 18 }}> {/* Centered button */}
                            Continue
                        </Button>
                    </>
                )}
            </Box>
        </React.Fragment>
    );


    return (
        <Box sx={{ width: '100%', color: 'white', pt: 3 }}>

            {stepper}

            {activeStep === steps.length ? (
                finalStep
            ) : (
                intermediateSteps
            )
            }
        </Box >
    );
}
