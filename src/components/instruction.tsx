import { motion, AnimationControls } from "framer-motion";

interface InstructionProps {
   toggleInstructionComplete: (index: number) => void;
   toggleIndex: number;
   complete: boolean;
   control: AnimationControls;
   content: string;
}

export default function Instruction({
   toggleInstructionComplete,
   toggleIndex,
   complete,
   control,
   content,
}: InstructionProps) {
   return (
      <div
         className={`bg-[#FFFFFF]/[4%] h-12 rounded-xl flex items-center p-7 justify-between`}
      >
         <div className='flex items-center gap-4 '>
            <img src='/arrow.svg' />
            <span
               className={`${complete ? "font-bold text-[#A4A9D6]" : ""}`}
               onClick={() => toggleInstructionComplete(toggleIndex)}
            >
               {content}
            </span>
         </div>

         {complete && (
            <motion.svg
               className='progress-icon'
               viewBox='0 0 50 50'
               animate={control}
               style={{ scale: 1, width: 40, height: 40 }}
            >
               <motion.path
                  fill='none'
                  strokeWidth='2'
                  stroke='#E19A4C'
                  d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
                  style={{ translateX: 5, translateY: 5 }}
               />
               <motion.path
                  fill='none'
                  strokeWidth='2'
                  stroke='#E19A4C'
                  d='M14,26 L 22,33 L 35,16'
                  strokeDasharray='0 1'
                  initial={{ pathLength: 0 }}
                  animate={{
                     pathLength: complete ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
               />
            </motion.svg>
         )}
      </div>
   );
}
