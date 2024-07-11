import SidebarComponent from "../components/sidebar_component";

const listItems = (
   <ul className='list-none space-y-10 mt-16 font-medium text-base'>
      <li className='flex items-center gap-6'>
         <SidebarComponent image='portfolio' title='Portfolio' />
      </li>
      <li className='flex flex-col gap-1'>
         <div className='flex items-center gap-6'>
            <SidebarComponent image='wallets' title='Wallets' />
         </div>
         <div className='flex flex-col gap-1 ml-16'>
            <span className='font-extrabold text-lg text-[#C78D4E]'>
               Wallet 1
            </span>
            <span className='border-2 text-base border-dotted border-[#616161] text-center text-[#616161] rounded-2xl py-1 px-0'>
               + add wallet
            </span>
         </div>
      </li>
      <li className='flex items-center gap-6'>
         <SidebarComponent image='transactions' title='Last Transactions' />
      </li>
      <li className='flex items-center gap-6'>
         <SidebarComponent image='tutorials' title='Tutorials' />
      </li>
      <li className='flex items-center gap-6'>
         <SidebarComponent image='settings' title='Setting' />
      </li>
   </ul>
);

const sidebarButton = (
   <button className='bg-[#785B3C] text-[#F5CEA3] w-fit px-9 py-2 rounded-lg mb-14'>
      Support
   </button>
);

const sidebar = [listItems, sidebarButton];

export default sidebar;
