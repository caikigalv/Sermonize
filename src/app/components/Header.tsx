"use client"
import React, { useState } from 'react';
import { headerItems } from '@/utils/Header';
import { TiThMenu } from "react-icons/ti";

const Header: React.FC = () => {

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className='bg-bgFooter relative z-[1000]'>
      <div className="h-20 bg-bgFooter justify-between xl:flex place-items-center max-w-screen-2xl m-auto">
        <div className='flex justify-between items-center'>
          <img className="md:ml-28 ml-2" src="LogoSermonize.svg" alt="Logo Sermonize" />
          <TiThMenu onClick={() => setOpenMenu(!openMenu)} className='text-4xl mr-4 xl:hidden' />
        </div>

        <ul className={`xl:inline-flex bg-bgFooter p-1 max-sm:flex  max-sm:flex-col gap-4  md:gap-8 mr-28 text-xl font-roboto-medium md:items-center drop-shadow-md  ${openMenu ? 'top-15 opacity-100 w-screen text-right py-4 z-[1000] pl-4' : ' hidden'} md:opacity-100 opacity-0`}>
          {headerItems.map(item => (
            <li key={item.id} className={`${item.text !== 'Área Do Cliente'? 'md:hover:border-b-white md:hover:border-b-2 cursor-pointer': 'md:border-none'}`}>
              {item.text !== 'Área Do Cliente' ? (
                item.text
              ) : (
                <button className="text-xl bg-white text-BlueDarkMedio font-roboto-bold font-bold p-2.5 rounded-md border-2 border-BlueLite drop-shadow-md">
                  {item.text}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;