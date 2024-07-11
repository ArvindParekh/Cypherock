import {
   FormControl,
   Select,
   MenuItem,
   SelectChangeEvent,
} from "@mui/material";
import dashboardData from "../data/dashboard";
import ReceiveModal from "./modal";
import { useState, useEffect } from "react";

export default function Dashboard() {
   const [sortOption, setSortOption] = useState("");
   const [sortedData, setSortedData] = useState(dashboardData);

   const handleChange = (event: SelectChangeEvent) => {
      setSortOption(event.target.value);
   };

   useEffect(() => {
      let sorted = [...dashboardData];
      switch (sortOption) {
         case "amountLowHigh": // Amount Low - High
            sorted.sort(
               (a, b) =>
                  parseFloat(a.usd.replace("USD ", "")) -
                  parseFloat(b.usd.replace("USD ", ""))
            );
            break;
         case "amountHighLow": // Amount High - Low
            sorted.sort(
               (a, b) =>
                  parseFloat(b.usd.replace("USD ", "")) -
                  parseFloat(a.usd.replace("USD ", ""))
            );
            break;
         case "az": // Arrange A - Z
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
         case "za": // Arrange Z - A
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
         default:
            sorted = dashboardData;
            break;
      }
      setSortedData(sorted);
   }, [sortOption]);

   const synchronizedRow = (
      <div className='w-full h-14 flex flex-row-reverse items-center gap-16 mb-6'>
         <div className='flex items-center flex-row-reverse gap-5'>
            <img src='lock.svg' className='w-10 h-10' />
            <img src='semicircle.svg' className='w-10 h-10' />
         </div>
         <div className='flex items-center flex-row-reverse gap-4'>
            <span className='text-[#F5CEA3] font-medium'>Synchronized</span>
            <img src='tick.svg' className='w-7 h-7' />
         </div>
      </div>
   );

   const walletRow = (
      <div className='w-full flex items-center justify-between mb-3'>
         <h1 className='text-[#C78D4E] text-3xl font-extrabold'>Wallet 1</h1>
         <button className='flex bg-white/[6%] px-12 font-medium py-2 rounded-md tracking-wide text-[#BEB4A8]'>
            + Add Coin
         </button>
      </div>
   );

   const coinRow = (
      <div className='w-full h-16 flex items-center justify-between border border-[#161C23] px-4'>
         <span className='text-[#ADABAA]'>Total Coin - 6</span>
         <div className='flex items-center'>
            <img src='/up_down_arrow.svg' className='w-5' />
            <FormControl
               sx={{
                  m: 1,
                  minWidth: 120,
                  color: "white",
                  backgroundColor: "transparent",
                  display: "flex",
                  textAlign: "center",
               }}
            >
               <Select
                  value={sortOption}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{ backgroundColor: "transparent", color: "#BEB4A8" }}
                  MenuProps={{
                     PaperProps: {
                        sx: {
                           backgroundColor: "#272A2F",
                           px: 4,
                           textAlign: "center",
                           color: "#BEB4A8",
                           "& .MuiMenuItem-root": {
                              backgroundColor: "#272A2F",
                              "&:hover": {
                                 // backgroundColor: "#505a67",
                              },
                              "&.Mui-selected": {
                                 // backgroundColor: "#505a67 !important",
                                 fontWeight: "bold",
                                 backgroundColor: "none",
                              },
                           },
                        },
                     },
                  }}
               >
                  <MenuItem
                     value=''
                     sx={{ color: "#BEB4A8", textAlign: "center", my: 1 }}
                  >
                     <div className='flex items-center gap-2'>
                        <span className='text-[#BEB4A8]'>
                           Amount High - Low
                        </span>
                     </div>
                  </MenuItem>
                  <MenuItem
                     value='amountLowHigh'
                     sx={{ color: "#BEB4A8", my: 1 }}
                  >
                     <div className='flex items-center gap-2'>
                        <span className='text-[#BEB4A8]'>
                           Amount Low - High
                        </span>
                     </div>
                  </MenuItem>
                  <MenuItem value='az' sx={{ color: "#BEB4A8", my: 1 }}>
                     <div className='flex items-center gap-2'>
                        <span className='text-[#BEB4A8]'>Arrange A - Z</span>
                     </div>
                  </MenuItem>
                  <MenuItem value='za' sx={{ color: "#BEB4A8", my: 1 }}>
                     <div className='flex items-center gap-2'>
                        <span className='text-[#BEB4A8]'>Arrange Z - A</span>
                     </div>
                  </MenuItem>
               </Select>
            </FormControl>
            <img src='/half_down_arrow.svg' className='w-5' />
         </div>
      </div>
   );

   const listRow = (
      <div className='w-full flex flex-col justify-center gap-5'>
         {sortedData.map((data, index) => {
            return (
               <div
                  className='w-full h-[5.2rem] grid grid-cols-4 gap-3 place-items-center bg-[#161C23] text-[#ADABAA] font-bold rounded-sm'
                  key={`${data.name}-${index}`}
               >
                  <div className='flex items-center gap-2 place-self-stretch ml-10'>
                     <img src={data.img} className='w-12' />
                     <span>{data.name}</span>
                  </div>
                  <div>{data.crypto}</div>
                  <div>{data.usd}</div>
                  <div className='flex items-center gap-5'>
                     <ReceiveModal />
                     <div className='flex items-center gap-3 border-l border-l-[#222D3A] pl-5'>
                        <img src='/up_arrow.svg' className='w-3' />
                        <span className='text-[#CAA276] text-lg font-extrabold'>
                           SEND
                        </span>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );

   const dashboard = [synchronizedRow, walletRow, coinRow, listRow];

   return dashboard.map((dashboardComponent, index) => {
      return <div key={index}>{dashboardComponent}</div>;
   });
}
