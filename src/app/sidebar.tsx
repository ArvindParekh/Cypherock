const listItems = (
    <ul className="list-none space-y-10 mt-20 font-medium text-xl">
        <li className="flex items-center gap-6">
            <img src="/portfolio.svg" className="w-7 h-7"></img>
            <span>Portfolio</span>
        </li>
        <li className="flex items-center gap-6">
            <img src="/wallets.svg" className="w-7 h-7"></img>
            <span className="text-[#E2C19D]">Wallets</span>
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
    <button className="bg-[#785B3C] text-[#F5CEA3] w-fit px-7 py-2 rounded-lg mb-14">Support</button>
)

const sidebar = [listItems, sidebarButton]

export default sidebar;