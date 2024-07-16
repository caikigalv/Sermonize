import React from 'react'
import { EscolhaItems } from '@/utils/Escolhautils'
const Escolha = () => {
  return (
    <div className='md:w-screen'>
        <div>
        <div className='bg-bgIntroducao '>
        <h2 className='container pl-10 m-auto drop-shadow text-4xl text-BlueMedio font-Montserrat font-bold'>POR QUE NOS <span className='text-BlueDark'>ESCOLHER?</span></h2>
        </div >
        <div className='bg-bgColaborador max-md:flex md:justify-center md:items-center self-center md:w-full'>
        <ul className=' bg-bgColaborador xl:flex md:grid md:grid-cols-2 md:justify-center flex justify-center items-center w-screen md:w-screen lg:items-center self-center max-md:flex-col max-md:justify-center  max-w-7xl mt-[60px] gap-[76px] m-auto text-center max-sm:my-4'>
        {EscolhaItems.map((item) => (    
            <li key={item.id} className='drop-shadow first:mt-8 tracking-tight '>
                <h1 className='max-w-[200px] m-auto font-Montserrat text-BlueDark text-[24px] font-bold'>{item.title}</h1>
                <p className=' font-bold font-Montserrat w-[255px] text-[15px] '>{item.text}</p>
            </li>          
        ))}
    </ul>
    <div className='max-w-7xl m-auto mt-2 mb-10 bg-bgColaborador'>
    <img src="decoracao.svg" className='drop-shadow max-xl:hidden  ' alt="" />
    </div>
    </div>
    </div>
    </div>
  )
}

export default Escolha