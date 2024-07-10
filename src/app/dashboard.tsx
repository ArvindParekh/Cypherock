import { useState } from "react"
import dashboardData from "../data/dashboard"
import CustomizedDialogs from "./modal"

export default function Dashboard() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const synchronizedRow = (
        <div className="w-full h-14 flex flex-row-reverse items-center gap-5">
            <img src="lock.svg" />
            <img src="semicircle.svg" />
            <span className="text-[#F5CEA3] font-medium">Synchronized</span>
            <img src="tick.svg" className="w-7 h-7" />
        </div>
    )

    const walletRow = (
        <div className="w-full flex items-center justify-between">
            <h1 className="text-[#C78D4E] text-xl font-bold">Wallet 1</h1>
            <button className="flex bg-white/[6%] px-7 py-2 rounded-md text-[#BEB4A8]">
                + Add Coin
            </button>
        </div>
    )

    const coinRow = (
        <div className="w-full h-14 flex items-center justify-between bg-[#161C23] px-4">
            <span className="text-[#ADABAA]">Total coin - 6</span>
            <span className="text-[#BEB4A8]">Amount High - Low</span>
        </div>
    )

    const listRow = (
        <div className="w-full flex flex-col justify-center gap-5">


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
                        <CustomizedDialogs openStatus={open} close={handleClose} />
                        <span className="text-[#CAA276]">Send</span>
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