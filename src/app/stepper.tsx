import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

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
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => step === 1;

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

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%', color: 'white', p: 3 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    // if (isStepOptional(index)) {
                    //     labelProps.optional = (
                    //         // <Typography variant="caption" sx={{ color: 'white' }}>
                    //         //     Optional
                    //         // </Typography>
                    //     );
                    // }
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
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1, color: 'white' }}>
                        All steps completed - you're finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset} sx={{ color: 'white' }}>
                            Reset
                        </Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 10, mb: 1, color: '#B1B1B1' }}>
                        {/* Step {activeStep + 1} */}
                        <h1>Follow the instruction on device</h1>
                        <div className='flex flex-col justify-center gap-5 mt-5'>
                            <div className='bg-[#FFFFFF]/[4%] h-12 rounded-lg flex items-center'>adfjajkdfja</div>
                            <div className='bg-[#FFFFFF]/[4%] h-12 rounded-lg flex items-center'>adfjajkdfja</div>
                            <div className='bg-[#FFFFFF]/[4%] h-12 rounded-lg flex items-center'>adfjajkdfja</div>
                        </div>
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1, color: 'white' }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1, color: 'white' }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext} sx={{ color: 'white' }}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
