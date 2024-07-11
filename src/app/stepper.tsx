import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Divider, ThemeProvider, createTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

const steps = ["Device", "Verification", "Receive"];

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
   "& .MuiStepLabel-label": {
      color: "#A2A1A1", // Step label color when not active or completed
   },
   "& .MuiStepLabel-label.Mui-active": {
      fontWeight: "bold",
      color: "#E19A4C", // Active step label color
   },
   "& .MuiStepLabel-label.Mui-completed": {
      color: "#E19A4C", // Completed step label color
   },
}));

const theme = createTheme({
   components: {
      MuiStepIcon: {
         styleOverrides: {
            root: {
               "&.Mui-active": {
                  color: "#E19A4C", // Active step icon color
               },
               "&.Mui-completed": {
                  color: "#E19A4C", // Completed step icon color
               },
               "&": {
                  borderWidth: "2px", // Default border width
                  borderColor: "rgba(255, 255, 255, 0.23)", // Default border color with some transparency
                  borderRadius: "50%", // Ensures the border is circular for default state
               },
            },
         },
      },
   },
});

export default function HorizontalLinearStepper() {
   const [activeStep, setActiveStep] = useState(0);
   const [completedSteps, setCompletedSteps] = useState({
      0: [false, false, false],
      1: [false],
      2: [],
   });

   const controls = useAnimation();

   const [skipped, setSkipped] = useState(new Set<number>());

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
      setCompletedSteps({
         0: [false, false, false],
         1: [false],
         2: [],
      });
   };

   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText("25BKJNKNLJL58fjkdhfk26dnfds15");
         alert("Address copied to clipboard!");
      } catch (err) {
         console.error("Failed to copy text: ", err);
         alert("Failed to copy the address.");
      }
   };

   const toggleStepCompletion = (stepIndex: number) => {
      const newCompletedSteps = { ...completedSteps };
      newCompletedSteps[activeStep][stepIndex] =
         !newCompletedSteps[activeStep][stepIndex];
      setCompletedSteps(newCompletedSteps);
   };

   const allStepsCompleted = (step: number) => {
      return completedSteps[step].every((step) => step);
   };

   const getStepContent = (step: number) => {
      switch (step) {
         case 0:
            return (
               <Box className=''>
                  <Typography sx={{ color: "#B1B1B1", fontSize: 20 }}>
                     Follow the instruction on device
                  </Typography>
                  <div className='flex flex-col justify-center gap-5 mt-5 text-[#8A8B90]'>
                     <div
                        className={`bg-[#FFFFFF]/[4%] h-12 rounded-lg flex items-center p-7 justify-between`}
                     >
                        <div className='flex items-center gap-4 '>
                           <img src='/arrow.svg' />
                           <span
                              className={`${
                                 completedSteps[0][0]
                                    ? "font-bold text-[#A4A9D6]"
                                    : ""
                              }`}
                              onClick={() => toggleStepCompletion(0)}
                           >
                              Select the Wallet On device
                           </span>
                        </div>

                        {completedSteps[0][0] && (
                           <motion.svg
                              className='progress-icon'
                              viewBox='0 0 50 50'
                              animate={controls}
                              style={{ scale: 1, width: 40, height: 40 }}
                           >
                              <motion.path
                                 fill='none'
                                 strokeWidth='2'
                                 stroke='#E19A4C'
                                 d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
                                 style={{ translateX: 5, translateY: 5 }}
                              />
                              <motion.path
                                 fill='none'
                                 strokeWidth='2'
                                 stroke='#E19A4C'
                                 d='M14,26 L 22,33 L 35,16'
                                 strokeDasharray='0 1'
                                 initial={{ pathLength: 0 }}
                                 animate={{
                                    pathLength: completedSteps[0][0] ? 1 : 0,
                                 }}
                                 transition={{ duration: 0.3 }}
                              />
                           </motion.svg>
                        )}
                     </div>
                     <div
                        className={`bg-[#FFFFFF]/[4%] h-12 rounded-lg flex items-center p-7 justify-between`}
                     >
                        <div className='flex items-center gap-4 '>
                           <img src='/arrow.svg' />
                           <span
                              className={`${
                                 completedSteps[0][1]
                                    ? "font-bold text-[#A4A9D6]"
                                    : ""
                              }`}
                              onClick={() => toggleStepCompletion(1)}
                           >
                              Select the Coin on device
                           </span>
                        </div>

                        {completedSteps[0][1] && (
                           <motion.svg
                              className='progress-icon'
                              viewBox='0 0 50 50'
                              animate={controls}
                              style={{ scale: 1, width: 40, height: 40 }}
                           >
                              <motion.path
                                 fill='none'
                                 strokeWidth='2'
                                 stroke='#E19A4C'
                                 d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
                                 style={{ translateX: 5, translateY: 5 }}
                              />
                              <motion.path
                                 fill='none'
                                 strokeWidth='2'
                                 stroke='#E19A4C'
                                 d='M14,26 L 22,33 L 35,16'
                                 strokeDasharray='0 1'
                                 initial={{ pathLength: 0 }}
                                 animate={{
                                    pathLength: completedSteps[0][1] ? 1 : 0,
                                 }}
                                 transition={{ duration: 0.3 }}
                              />
                           </motion.svg>
                        )}
                     </div>
                     <div
                        className={`bg-[#FFFFFF]/[4%] h-12 rounded-lg flex items-center p-7 justify-between`}
                     >
                        <div className='flex items-center gap-4 '>
                           <img src='/arrow.svg' />
                           <span
                              className={`${
                                 completedSteps[0][2]
                                    ? "font-bold text-[#A4A9D6]"
                                    : ""
                              }`}
                              onClick={() => toggleStepCompletion(2)}
                           >
                              Tap 1 card of any 4 Cards
                           </span>
                        </div>

                        {completedSteps[0][2] && (
                           <motion.svg
                              className='progress-icon'
                              viewBox='0 0 50 50'
                              animate={controls}
                              style={{ scale: 1, width: 40, height: 40 }}
                           >
                              <motion.path
                                 fill='none'
                                 strokeWidth='2'
                                 stroke='#E19A4C'
                                 d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
                                 style={{ translateX: 5, translateY: 5 }}
                              />
                              <motion.path
                                 fill='none'
                                 strokeWidth='2'
                                 stroke='#E19A4C'
                                 d='M14,26 L 22,33 L 35,16'
                                 strokeDasharray='0 1'
                                 initial={{ pathLength: 0 }}
                                 animate={{
                                    pathLength: completedSteps[0][2] ? 1 : 0,
                                 }}
                                 transition={{ duration: 0.3 }}
                              />
                           </motion.svg>
                        )}
                     </div>
                  </div>
               </Box>
            );
         case 1:
            return (
               <Box>
                  <div className='w-full h-32 bg-[#FFFFFF]/[4%] border border-gray-50 border-dotted rounded-lg flex items-center justify-center my-10'>
                     <h1 className='text-[#E19A4C] font-bold text-2xl'>
                        25BKJNKNLJL58fjkdhfk26dnfds15
                     </h1>
                  </div>
                  <Typography
                     sx={{
                        color: "#B1B1B1",
                        fontSize: 20,
                        fontWeight: "medium",
                     }}
                  >
                     Verify address on device
                  </Typography>
                  <div className='flex flex-col justify-center gap-5 mt-5 text-[#8A8B90]'>
                     <div
                        className={`bg-[#FFFFFF]/[4%] h-12 rounded-lg flex items-center p-7 gap-4 ${
                           completedSteps[1][0] ? "completed-step" : ""
                        }`}
                     >
                        <img src='/arrow.svg' />
                        <span
                           className={`${
                              completedSteps[1][0]
                                 ? "font-bold text-[#A4A9D6]"
                                 : ""
                           }`}
                           onClick={() => toggleStepCompletion(0)}
                        >
                           Please match the{" "}
                           <span className='font-bold'>address</span> to be
                           shown in X1 Wallet
                        </span>
                     </div>
                  </div>
               </Box>
            );
         case 2:
            return (
               <Box>
                  <Typography
                     sx={{
                        color: "#B1B1B1",
                        fontSize: 20,
                        fontWeight: "medium",
                     }}
                  >
                     Coin Address
                  </Typography>
                  <div className='w-full h-20 bg-[#FFFFFF]/[4%] border border-gray-50 border-dotted rounded-lg flex items-center justify-evenly my-10'>
                     <h1 className='text-[#E19A4C] font-bold text-2xl'>
                        25BKJNKNLJL58fjkdhfk26dnfds15
                     </h1>
                     <button
                        onClick={handleCopy}
                        className='text-[#E7C49F] bg-[#FFFFFF]/[10%] px-5 py-2 rounded-lg text-center'
                     >
                        Copy
                     </button>
                  </div>
                  <div className='flex items-center gap-3 mt-5 text-[#4848F6]'>
                     <img src='/exclaimation.svg' />
                     <span>address verified</span>
                  </div>

                  <div className='flex items-center justify-center'>
                     <Button
                        onClick={handleReset}
                        sx={{
                           px: 8,
                           py: 1.5,
                           border: "1px solid #4848F6",
                           color: "#4848F6",
                           fontSize: 14,
                           fontWeight: "semibold",
                           textTransform: "none",
                           my: 5,
                        }}
                     >
                        Re-Verify
                     </Button>
                  </div>
               </Box>
            );
         default:
            return "Unknown step";
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
   );

   const finalStep = (
      <React.Fragment>
         <Typography sx={{ mt: 2, mb: 1, color: "white" }}>
            All steps completed - you're finished
         </Typography>
         <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
         </Box>
      </React.Fragment>
   );

   const intermediateSteps = (
      <React.Fragment>
         <Box sx={{ mt: 10, mb: 1, px: 13, mx: "auto" }}>
            {" "}
            {/* Adjusted padding and added automatic horizontal margin */}
            {getStepContent(activeStep)}
         </Box>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
               pt: 7,
               width: "100%",
            }}
         >
            {activeStep === steps.length - 1 ? (
               ""
            ) : (
               <>
                  <Divider
                     sx={{ width: "100%", border: "1px solid #272726" }}
                  />
                  <Button
                     onClick={handleNext}
                     disabled={!allStepsCompleted(activeStep)}
                     sx={{
                        color: allStepsCompleted(activeStep)
                           ? "#3E3935"
                           : "#A1A1A1", // Active state color
                        border: allStepsCompleted(activeStep)
                           ? "1px solid #3E3935"
                           : "1px solid #A1A1A1", // Active state border
                        alignSelf: "end",
                        my: 2,
                        mr: 7,
                        px: 7,
                        py: 1.5,
                        textTransform: "none",
                        fontWeight: "medium",
                        fontSize: 18,
                        backgroundColor: allStepsCompleted(activeStep)
                           ? "#E19A4C"
                           : "transparent",
                        "&.Mui-disabled": {
                           color: "#A1A1A1", // Disabled state color
                           border: "1px solid #A1A1A1", // Disabled state border
                        },
                     }}
                  >
                     Continue
                  </Button>
               </>
            )}
         </Box>
      </React.Fragment>
   );

   return (
      <ThemeProvider theme={theme}>
         <Box sx={{ width: "100%", color: "white", pt: 3 }}>
            {stepper}
            {activeStep === steps.length ? finalStep : intermediateSteps}
         </Box>
      </ThemeProvider>
   );
}
