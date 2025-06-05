'use client';

import { usePathname } from 'next/navigation';


export function PathnameWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
      <div className={`${pathname === "/" ? "bg-light text-dark" : "bg-dark text-light"} transition-colors duration-150`}>

      {children}
      </div>
  );
}

