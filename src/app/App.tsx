import navbar from "./navbar";
import sidebar from "./sidebar";
import Dashboard from "./dashboard";
import { motion } from "framer-motion";

function App() {
   return (
      <main className='flex flex-col items-center justify-center w-[100vw] h-[100vh]'>
         <nav className='w-full h-24 flex items-center justify-between'>
            {navbar.map((navbarComponent) => {
               return navbarComponent;
            })}
         </nav>

         <section className='flex items-center justify-center w-full h-full'>
            <aside className='h-full flex flex-col items-center justify-between gap-5 w-[18%] bg-[#161C23] px-10'>
               {sidebar.map((sidebarComponent) => {
                  return sidebarComponent;
               })}
            </aside>

            <article className='h-full w-[82%] flex flex-col px-24 gap-5'>
               <Dashboard />
            </article>

            
         </section>
      </main>
   );
}

export default App;
