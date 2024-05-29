import { servico } from "@/utils/servico"

export const NossoServico = () => {



    return (
        <div className="bg-bgServico w-screen h-[544px]">
            <div>
                <div className="container mx-auto pt-8 flex flex-col justify-center w-screen p-8  ">
                    <h3 className="uppercase text-[24px] text-textColor font-bold ">conheça</h3>
                    <h2 className="text-[36px] uppercase text-BlueMedio font-bold "><span className="text-BlueDark font-bold ">Nossos</span> serviços</h2>

                    <div className="flex justify-around items-center gap-16 mt-4">
                        {servico.map(item => (
                            <ul key={item.id} className="">
                                <li className="text-bold text-[32px] font-bold text-BlueDark mb-8 text-center">{item.title}</li>
                                <li className=" h-[141px] mb-8 flex justify-center"><img src={item.img} alt="" /></li>
                                <li className="text-BlueDark text-[16px] font-bold ml-8 w-[320px] ">{item.text}</li>
                            </ul>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}