"use client";

import { Menu } from 'lucide-react';

import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

interface MobileSideBarProps{
  apiLimitCount: number
}

const MobileSideBar = ({apiLimitCount}: MobileSideBarProps) => {
  const [isMounted, setIsMounted] = useState(false);

 // const [apiLimitCount, setApiLimitCount] = useState(2);

  useEffect(() => {
   setIsMounted(true);

  }, [])

if(!isMounted){
  return null;
}
  
  return (
    <Sheet>
        <SheetTrigger>
    <Button variant="ghost" size="icon" className='md:hidden'>
            <Menu />
        </Button>
        </SheetTrigger>
        <SheetContent side="left" className='p-0' >
            <Sidebar apiLimitCount={apiLimitCount}/>
        </SheetContent>
     </Sheet>
  )
}

export default MobileSideBar