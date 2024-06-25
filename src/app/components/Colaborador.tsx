"use client"
import { colaboradores } from "@/utils/colaboradores"
import {  motion } from "framer-motion"



const fade = {
    initial:{
        opacity: 0,
        x:100,
        blur:15
        
    },
    animate:(index:number)=>({
        opacity:1,
        x:0,
        blur:0,
        scale:1,
        trasition:{
            delay: 0.05 * index,
        }

    })
}



export const Colaborador = () => {

    return (
        <div className="bg-bgColaborador w-screen xl:h-[538px] h-[900px] ">
            <div className="flex flex-col">
                <div className="container mx-auto pt-4  ml-8">
                    <h2 className="xl:text-[32px] text-[15px] text-BlueDarkMedio font-bold">Colaboradores</h2>
                    <h2 className="xl:text-[36px] text-[20px] text-BlueDark font-bold underline ml-[8%] ">SermonizeTech</h2>
                </div>

                <div className="w-screen xl:h-[350px] xl:flex justify-center  items-center">
                    {colaboradores.map((item, index )=> (
                        <>
                            <div className={` flex justify-center  ${item.id %2 === 0 ? 'hidden xl:flex' : 'flex'}`}>
                                <motion.div
                                key={index}
                                variants={fade}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once:true,
                                }}
                                custom={index}
                                >
                                {item.id === 3 || item.id === 7 ?
                                <img className='flex rounded-full ml-4 md:ml-0  h-[120px] xl:h-[200px]  mt-4 xl:mt-[140px]'src={item.img} alt="" />
                                    :
                                <img className=" flex rounded-full ml-4 md:ml-0 max-sm:h-[120px] mt-4 " src={item.img} alt="" />
                                }
                                <div className="">
                                    <p className="text-BlueDark xl:text-2xl text-center font-bold">{item.name}</p>
                                    <p className="text-BlueDark text-center xl:text-xl">{item.skils}</p>
                                </div>
                                </motion.div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

