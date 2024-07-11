import navbar from "./navbar";
import sidebar from "./sidebar";
import Dashboard from "./dashboard";

function App() {
   return (
      <main className='flex flex-col items-center w-[100vw] h-[100vh] overflow-hidden'>
         <nav className='w-full h-16 shrink-0 flex items-center justify-between'>
            {navbar.map((navbarComponent) => {
               return navbarComponent;
            })}
         </nav>

         <section className='flex items-center justify-center w-full h-full overflow-hidden'>
            <aside className='h-full shrink-0 flex flex-col items-start justify-between gap-5 w-[18%] bg-[#161C23] px-10'>
               <div className='h-full flex flex-col items-center justify-between gap-5'>
                  {sidebar.map((sidebarComponent) => {
                     return sidebarComponent;
                  })}
               </div>
            </aside>

            <article className='h-full w-[82%] flex flex-col pl-16 pr-9 gap-5 overflow-y-auto'>
               <Dashboard />
            </article>
         </section>
      </main>
   );
}

export default App;
