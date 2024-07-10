import { FormControl, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import dashboardData from "../data/dashboard";
import MaxWidthDialog from "./modal";
import { useState, useEffect } from "react";

export default function Dashboard() {
    const [age, setAge] = useState('');
    const [sortedData, setSortedData] = useState(dashboardData);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    useEffect(() => {
        let sorted = [...dashboardData];
        switch (age) {
            case "adfa": // Amount Low - High
                sorted.sort((a, b) => parseFloat(a.usd.replace('USD ', '')) - parseFloat(b.usd.replace('USD ', '')));
                break;
            case "": // Amount High - Low
                sorted.sort((a, b) => parseFloat(b.usd.replace('USD ', '')) - parseFloat(a.usd.replace('USD ', '')));
                break;
            case 20: // Arrange A - Z
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 30: // Arrange Z - A
                sorted.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                sorted = dashboardData;
                break;
        }
        setSortedData(sorted);
    }, [age]);

    const synchronizedRow = (
        <div className="w-full h-14 flex flex-row-reverse items-center gap-5 mb-6">
            <img src="lock.svg" className="w-10 h-10" />
            <img src="semicircle.svg" className="w-10 h-10" />
            <span className="text-[#F5CEA3] font-medium">Synchronized</span>
            <img src="tick.svg" className="w-7 h-7" />
        </div>
    );

    const walletRow = (
        <div className="w-full flex items-center justify-between mb-3">
            <h1 className="text-[#C78D4E] text-2xl font-extrabold">Wallet 1</h1>
            <button className="flex bg-white/[6%] px-7 py-2 rounded-md text-[#BEB4A8]">
                + Add Coin
            </button>
        </div>
    );

    const coinRow = (
        <div className="w-full h-14 flex items-center justify-between border border-[#161C23] px-4">
            <span className="text-[#ADABAA]">Total coin - 6</span>
            <FormControl sx={{ m: 1, minWidth: 120, color: "white", backgroundColor: "transparent", display: "flex" }}>
                <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ backgroundColor: "transparent", color: "#BEB4A8" }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: "#404854",
                                color: "#BEB4A8",
                                "& .MuiMenuItem-root": {
                                    backgroundColor: "#404854",
                                    "&:hover": {
                                        backgroundColor: "#505a67"
                                    },
                                    "&.Mui-selected": {
                                        backgroundColor: "#505a67 !important"
                                    }
                                }
                            }
                        }
                    }}
                >
                    <MenuItem value="" sx={{ color: "#BEB4A8" }}>
                        <div className="flex items-center gap-2">
                            <img src="/up_down_arrow.svg" className="w-5" />
                            <span className="text-[#BEB4A8]">Amount High - Low</span>
                            <img src="/half_down_arrow.svg" className="w-5" />
                        </div>
                    </MenuItem>
                    <MenuItem value={"adfa"} sx={{ color: "#BEB4A8" }}>
                        <div className="flex items-center gap-2">
                            <img src="/up_down_arrow.svg" className="w-5" />
                            <span className="text-[#BEB4A8]">Amount Low - High</span>
                            <img src="/half_down_arrow.svg" className="w-5" />
                        </div>
                    </MenuItem>
                    <MenuItem value={20} sx={{ color: "#BEB4A8" }}>
                        <div className="flex items-center gap-2">
                            <img src="/up_down_arrow.svg" className="w-5" />
                            <span className="text-[#BEB4A8]">Arrange A - Z</span>
                            <img src="/half_down_arrow.svg" className="w-5" />
                        </div>
                    </MenuItem>
                    <MenuItem value={30} sx={{ color: "#BEB4A8" }}>
                        <div className="flex items-center gap-2">
                            <img src="/up_down_arrow.svg" className="w-5" />
                            <span className="text-[#BEB4A8]">Arrange Z - A</span>
                            <img src="/half_down_arrow.svg" className="w-5" />
                        </div>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );

    const listRow = (
        <div className="w-full flex flex-col justify-center gap-5">
            {sortedData.map((data, index) => {
                return (
                    <div className="w-full h-20 grid grid-cols-4 gap-3 place-items-center bg-[#161C23] text-[#ADABAA] font-bold" key={`${data.name}-${index}`}>
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
                                <span className="text-[#CAA276] font-extrabold">SEND</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );

    const dashboard = [synchronizedRow, walletRow, coinRow, listRow];

    return (
        dashboard.map((dashboardComponent, index) => {
            return <div key={index}>{dashboardComponent}</div>;
        })
    );
}
