import React from 'react';
import { headerItems } from '@/utils/Header';

const Header: React.FC = () => {
  return (
    <div className='bg-bgFooter'>
    <div className="h-20 bg-bgFooter justify-between flex place-items-center max-w-screen-2xl m-auto">
      <img className="ml-28" src="LogoSermonize.svg" alt="Logo Sermonize" />
      <ul className="inline-flex gap-5 mr-28 text-xl font-roboto-medium items-center drop-shadow-md">
        {headerItems.map(item => (
          <li key={item.id}>
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