import React from 'react'
import { introducaoItems } from '@/utils/introducaoItems'
const Introducao = () => {
  return (
    <div className='bg-bgIntroducao'>
        {introducaoItems.map((item) =>(
            <div className=' container max-w-6xl mx-auto flex  ' key={item.id}>
              <div className='mt-24 mb-14 drop-shadow '>
                <h1 className='text-5xl text-BlueMedio montserrat-bold font-bold'>{item.title}</h1>
                <h2 className='text-5xl text-BlueUltraLite montserrat-bold font-bold' >{item.title2}</h2>
                <p className='text-BlueDarkMedio w-3/5 mt-3 text-[16px] '>{item.text}</p>
              </div>
                <div>
                    <img className='max-w-96 mt-20 mb-14 drop-shadow  ' src={item.img} alt="caricatura da introdução" />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Introducao