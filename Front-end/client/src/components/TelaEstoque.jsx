import React from "react";

export const EstoqueHome = ({ className }) => {
    return (
        <div className={`relative w-[430px] h-[2129px] bg-[#f8f8f8] overflow-hidden overflow-y-scroll ${className}`}>
            <div className="absolute w-[1269px] h-[1397px] top-[-312px] left-[-815px]">
                <img className="absolute w-[228px] h-[455px] top-[359px] left-[815px]" alt="Ellipse" src="ellipse-1.svg" />
                <img className="absolute w-[204px] h-[455px] top-[762px] left-[1041px]" alt="Ellipse" src="ellipse-2.svg" />
                <div className="absolute w-[1037px] h-[1148px] top-[102px] left-[116px] bg-[#bababa1a] rounded-[49px] rotate-[13.03deg] blur-sm" />
                <div className="absolute w-[174px] h-[68px] top-[357px] left-[940px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#26d0b6] text-[28px] text-center tracking-[0] leading-[normal]">
                    ESTOQUE
                    <br />
                    STONE
                </div>
                <img
                    className="absolute w-[41px] h-[41px] top-[363px] left-[844px]"
                    alt="Ph arrow down bold"
                    src="ph-arrow-down-bold.svg"
                />
                <img
                    className="absolute w-[430px] h-[329px] top-[494px] left-[815px]"
                    alt="Statistics details"
                    src="statistics-details.svg"
                />
                <div className="inline-flex flex-col items-start gap-2 absolute top-[815px] left-[852px]">
                    <div className="flex w-[352px] items-center justify-around gap-[63px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-header-22-32 font-[number:var(--header-22-32-font-weight)] text-gray-02 text-[length:var(--header-22-32-font-size)] tracking-[var(--header-22-32-letter-spacing)] leading-[var(--header-22-32-line-height)] whitespace-nowrap [font-style:var(--header-22-32-font-style)]">
                            Vendas Recentes
                        </div>
                    </div>
                    <img
                        className="relative flex-[0_0_auto] mb-[-45.00px] ml-[-25.00px] mr-[-25.00px]"
                        alt="Content"
                        src="content.svg"
                    />
                </div>
                <p className="absolute w-[313px] h-[17px] top-[430px] left-[865px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424141] text-sm text-center tracking-[0] leading-[normal]">
                    O controle do seu negócio a um clique de você
                </p>
            </div>
            <div className="absolute w-[430px] h-[1308px] top-[1111px] left-0">
                <img className="absolute w-[204px] h-[455px] top-[403px] left-[226px]" alt="Ellipse" src="ellipse-3.svg" />
                <img className="absolute w-[228px] h-[455px] top-0 left-0" alt="Ellipse" src="ellipse-4.svg" />
                <img className="absolute w-[373px] h-[512px] top-[21px] left-7" alt="Content" src="image.svg" />
                <div className="flex flex-col w-[365px] h-[724px] items-start gap-2 absolute top-[584px] left-8">
                    <div className="flex w-[352px] items-center justify-around gap-[63px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-header-22-32 font-[number:var(--header-22-32-font-weight)] text-gray-02 text-[length:var(--header-22-32-font-size)] tracking-[var(--header-22-32-letter-spacing)] leading-[var(--header-22-32-line-height)] whitespace-nowrap [font-style:var(--header-22-32-font-style)]">
                            Registro De Compra
                        </div>
                    </div>
                    <img
                        className="relative self-stretch w-full h-[399px] ml-[-25.00px] mr-[-25.00px]"
                        alt="Content"
                        src="content-2.svg"
                    />
                </div>
            </div>
        </div>
    );
};