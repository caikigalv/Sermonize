export const Footer = () => {
    return (
        <div className="w-screen  bg-bgFooter xl:h-[171px] h-[200px]">
            <div className="container mx-auto w-screen xl:flex justify-around items-center h-full">
                <div className="pt-4">
                    <div className="flex gap-4 justify-center">
                        <a href="" className="border-b-2 text-[16px]">Sobre-nós</a>
                        <a href="" className="border-b-2 text-[16px]">Formulário</a>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <a href="" className="border-b-2 text-[16px]">Contato</a>
                        <a href="" className="border-b-2 text-[16px]">Projetos</a>
                    </div>
                </div>

                <div><p className="font-bold text-xl flex justify-center pt-4">Developed by Sermonize © </p></div>

                <div className="flex flex-col gap-2 pt-4">
                    <div className="flex justify-center gap-2  items-center">
                        <img className="h-[32px]" src="phone.png" alt="" />
                        <p className="text-xl">+55 (64) 99211-5732</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <img className="h-[16px]" src="mail_icon.png" alt="" />
                        <p className="text-xl">sermonizetech@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}