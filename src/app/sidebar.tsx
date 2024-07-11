const listItems = (
    <ul className="list-none space-y-10 mt-16 font-medium text-base">
        <li className="flex items-center gap-6">
            <img src="/portfolio.svg" className="w-7 h-7"></img>
            <span>Portfolio</span>
        </li>
        <li className="flex flex-col gap-1">
            <div className="flex items-center gap-6">
                <img src="/wallets.svg" className="w-7 h-7"></img>
                <span className="text-[#E2C19D]">Wallets</span>
            </div>
            <div className="flex flex-col gap-1 ml-16">
                <span className="font-extrabold text-lg text-[#C78D4E]">Wallet 1</span>
                <span className="border-2 text-base border-dotted border-[#616161] text-center text-[#616161] rounded-2xl py-1 px-0">+ add wallet</span>
            </div>
        </li>
        <li className="flex items-center gap-6">
            <img src="transactions.svg" className="w-7 h-7"></img>
            <span>Last Transactions</span>

        </li>
        <li className="flex items-center gap-6">
            <img src="tutorials.svg" className="w-7 h-7"></img>
            <span>Tutorials</span>
        </li>
        <li className="flex items-center gap-6">
            <img src="settings.svg" className="w-7 h-7"></img>
            <span>Setting</span>
        </li>
    </ul>
)

const sidebarButton = (
    <button className="bg-[#785B3C] text-[#F5CEA3] w-fit px-9 py-2 rounded-lg mb-14">Support</button>
)

const sidebar = [listItems, sidebarButton]

export default sidebar;