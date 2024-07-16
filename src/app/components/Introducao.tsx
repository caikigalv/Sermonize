import React from 'react'
import { introducaoItems } from '@/utils/introducaoItems'
const Introducao = () => {
  return (
    <div className='bg-bgIntroducao'>
        {introducaoItems.map((item) =>(
            <div className=' container max-w-6xl mx-auto xl:flex' key={item.id}>
              <div className='xl:mt-24 mb-14 max-md:ml-4 p-4 drop-shadow '>
                <h1 className='xl:text-5xl text-3xl   text-BlueMedio montserrat-bold font-bold'>{item.title}</h1>
                <h2 className='xl:text-5xl text-3xl text-BlueUltraLite montserrat-bold font-bold' >{item.title2}</h2>
                <p className='text-BlueDarkMedio w-5/5 max-md:m-4 xl:w-3/5 mt-3 xl:text-[16px] flex justify-center'>{item.text}</p>
              </div>
                <div className='max-sm:w-screen flex justify-center'>
                    <img className=' w-[320px] xl:max-w-96 xl:mt-20 xl:mb-14 drop-shadow  ' src={item.img} alt="caricatura da introdução" />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Introducao