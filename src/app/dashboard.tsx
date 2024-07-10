import { FormControl, MenuItem, Select } from "@mui/material";
import dashboardData from "../data/dashboard"
import MaxWidthDialog from "./modal";

export default function Dashboard() {



    const synchronizedRow = (
        <div className="w-full h-14 flex flex-row-reverse items-center gap-5 mb-6">
            <img src="lock.svg" className="w-10 h-10" />
            <img src="semicircle.svg" className="w-10 h-10" />
            <span className="text-[#F5CEA3] font-medium">Synchronized</span>
            <img src="tick.svg" className="w-7 h-7" />
        </div>
    )

    const walletRow = (
        <div className="w-full flex items-center justify-between mb-3">
            <h1 className="text-[#C78D4E] text-2xl font-extrabold">Wallet 1</h1>
            <button className="flex bg-white/[6%] px-7 py-2 rounded-md text-[#BEB4A8]">
                + Add Coin
            </button>
        </div>
    )

    const coinRow = (
        <div className="w-full h-14 flex items-center justify-between border border-[#161C23] px-4">
            <span className="text-[#ADABAA]">Total coin - 6</span>
            {/* <span className="text-[#BEB4A8]">Amount High - Low</span> */}
            <FormControl sx={{ m: 1, minWidth: 120, color: "white" }}>
                <Select
                    value="adfa"
                    // onChange={handleChange}
                    label="adfa"
                    // inputProps={{ 'aria-label': 'Without label' }}
                    sx={{color: "white"}}
                >
                    <MenuItem value="" sx={{color: "white"}} defaultChecked>
                        Amount High - Low
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>Without label</FormHelperText> */}
            </FormControl>
        </div>
    )

    const listRow = (
        <div className="w-full flex flex-col justify-center gap-5">


            {dashboardData.map((data) => {
                return (<div className="w-full h-20 grid grid-cols-4 gap-3 place-items-center bg-[#161C23] text-[#ADABAA] font-bold">
                    <div className="flex items-center gap-2 place-self-stretch ml-10">
                        <img src={data.img} className="w-12" />
                        <span>{data.name}</span>
                    </div>
                    <div>{data.crypto}</div>
                    <div>{data.usd}</div>
                    <div className="flex items-center gap-5">
                        <MaxWidthDialog />
                        <div className="flex items-center gap-3 border-l border-l-[#222D3A] pl-5">
                            <img src="/up_arrow.svg" />
                            <span className="text-[#CAA276] font-bold">SEND</span>
                        </div>
                    </div>
                </div>)
            })}
        </div>
    )

    const dashboard = [synchronizedRow, walletRow, coinRow, listRow]

    return (
        dashboard.map((dashboardComponent) => {
            return dashboardComponent
        })
    )
}