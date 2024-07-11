interface SidebarComponentProps {
   image: string;
   title: string;
}

export default function SidebarComponent({
   image,
   title,
}: SidebarComponentProps) {
   return (
      <>
         <img src={`/${image}.svg`} className='w-7 h-7'></img>
         <span>{title}</span>
      </>
   );
}
