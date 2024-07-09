const listItems = (
    <ul className="list-none space-y-8 mt-20 font-medium text-lg">
        <li className="flex items-center gap-5">
            <img src="/portfolio.svg"></img>
            <span>Portfolio</span>
        </li>
        <li className="flex items-center gap-5">
            <img src="/wallets.svg"></img>
            <span>Wallets</span>
        </li>
        <li className="flex items-center gap-5">
            <img src="transactions.svg"></img>
            <span>Last Transactions</span>
        </li>
        <li className="flex items-center gap-5">
            <img src="tutorials.svg"></img>
            <span>Tutorials</span>
        </li>
        <li className="flex items-center gap-5">
            <img src="settings.svg"></img>
            <span>Setting</span>
        </li>
    </ul>
)

const sidebarButton = (
    <button className="bg-[#E09D54] w-fit px-7 py-2 rounded-lg mb-14">Support</button>
)

const sidebar = [listItems, sidebarButton]

export default sidebar;