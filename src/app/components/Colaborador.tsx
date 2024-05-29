"use client"
import { colaboradores } from "@/utils/colaboradores"
import {  motion } from "framer-motion"
import { transform } from "next/dist/build/swc"
import style from "@/app/components/style.module.css"


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
        <div className="bg-bgColaborador w-screen h-[538px] ">
            <div className="flex flex-col">
                <div className="container mx-auto pt-4 ">
                    <h2 className="text-[32px] text-BlueDarkMedio font-bold">Colaboradores</h2>
                    <h2 className="text-[36px] text-BlueDark font-bold underline ml-[8%] ">SermonizeTech</h2>
                </div>

                <div className="w-screen h-[350px] flex  justify-center items-center">
                    {colaboradores.map((item, index )=> (
                        <>
                            <div  className="">
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
                                    <img className=" flex rounded-full mt-[140px] " src={item.img} alt="" />
                                    :
                                    <img className=" flex rounded-full" src={item.img} alt="" />
                                }
                                <div className="">
                                    <p className="text-BlueDark text-2xl text-center font-bold">{item.name}</p>
                                    <p className="text-BlueDark text-center text-xl">{item.skils}</p>
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

