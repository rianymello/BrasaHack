import React from "react";

export const ConfirmacaoCompra = () => {
    return (
        <div className="w-[430px] h-[932px] bg-[#f8f8f8] overflow-hidden">
            <div className="relative w-[1269px] h-[1352px] top-[-312px] left-[-815px]">
                <img className="absolute w-[228px] h-[455px] top-[359px] left-[815px]" alt="Ellipse" src="ellipse-1.svg" />
                <img className="absolute w-[204px] h-[455px] top-[762px] left-[1041px]" alt="Ellipse" src="ellipse-2.svg" />
                <div className="absolute w-[1037px] h-[1148px] top-[102px] left-[116px] bg-[#bababa1a] rounded-[49px] rotate-[13.03deg] blur-sm" />
                <img className="absolute w-[415px] h-[799px] top-[443px] left-[822px]" alt="Estoque" src="estoque.svg" />
                <div className="top-[944px] left-[1115px] absolute font-semibold-16-24 font-[number:var(--semibold-16-24-font-weight)] text-[#191919] text-[length:var(--semibold-16-24-font-size)] text-right tracking-[var(--semibold-16-24-letter-spacing)] leading-[var(--semibold-16-24-line-height)] whitespace-nowrap [font-style:var(--semibold-16-24-font-style)]">
                    R$87,80
                </div>
                <div className="top-[907px] left-[1114px] absolute font-semibold-16-24 font-[number:var(--semibold-16-24-font-weight)] text-[#191919] text-[length:var(--semibold-16-24-font-size)] text-right tracking-[var(--semibold-16-24-letter-spacing)] leading-[var(--semibold-16-24-line-height)] whitespace-nowrap [font-style:var(--semibold-16-24-font-style)]">
                    R$87,80
                </div>
                <div className="absolute w-[146px] top-[907px] left-[882px] font-semibold-16-24 font-[number:var(--semibold-16-24-font-weight)] text-default-black text-[length:var(--semibold-16-24-font-size)] tracking-[var(--semibold-16-24-letter-spacing)] leading-[var(--semibold-16-24-line-height)] [font-style:var(--semibold-16-24-font-style)]">
                    Subtotal
                </div>
                <div className="absolute w-[146px] top-[944px] left-[883px] font-semibold-16-24 font-[number:var(--semibold-16-24-font-weight)] text-default-black text-[length:var(--semibold-16-24-font-size)] tracking-[var(--semibold-16-24-letter-spacing)] leading-[var(--semibold-16-24-line-height)] [font-style:var(--semibold-16-24-font-style)]">
                    Total
                </div>
            </div>
        </div>
    );
};