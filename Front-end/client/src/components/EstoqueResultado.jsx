import React from "react";

export const EstoqueResultado = () => {
  return (
    <div className="w-[430px] h-[932px] bg-[#f8f8f8] overflow-hidden">
      <div className="relative w-[1269px] h-[1352px] top-[-312px] left-[-815px]">
        <img
          className="absolute w-[228px] h-[455px] top-[359px] left-[815px]"
          alt="Ellipse"
          src="ellipse-1.svg"
        />
        <img
          className="absolute w-[204px] h-[455px] top-[762px] left-[1041px]"
          alt="Ellipse"
          src="ellipse-2.svg"
        />
        <div className="absolute w-[1037px] h-[1148px] top-[102px] left-[116px] bg-[#bababa1a] rounded-[49px] rotate-[13.03deg] blur-sm" />
        <div className="absolute w-[174px] h-[68px] top-[357px] left-[940px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#26d0b6] text-[28px] text-center tracking-[0] leading-[normal]">
          ESTOQUE STONE
        </div>
        <p className="absolute w-[313px] h-[17px] top-[430px] left-[865px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424141] text-sm text-center tracking-[0] leading-[normal]">
          O controle do seu negócio a um clique de você
        </p>
        <div className="absolute w-[186px] h-[85px] top-[511px] left-[937px] bg-[#ffffff] rounded-[10px] shadow-[4px_4px_4px_#00000040]" />
        <div className="absolute w-[122px] h-[29px] top-[535px] left-[969px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#777777] text-2xl text-center tracking-[0] leading-[normal]">
          Upload
        </div>
        <img
          className="absolute w-[41px] h-[41px] top-[363px] left-[844px]"
          alt="arrow"
          src="arrow-left.svg"
        />
        <div className="flex flex-col w-[317px] items-center justify-center gap-2 absolute top-[684px] left-[872px]">
          <div className="relative self-stretch w-full h-[443px] bg-white rounded-lg shadow-shadow-01">
            <div className="flex w-[204px] h-9 items-center justify-center gap-5 relative top-[37px] left-14">
              <div className="inline-flex items-center justify-center gap-2 p-2 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-48.50px] mr-[-48.50px] border-b-2 [border-bottom-style:solid] border-[#424141]">
                <p className="relative w-fit mt-[-2.00px] font-bold-16-24 font-[number:var(--bold-16-24-font-weight)] text-[#424141] text-[length:var(--bold-16-24-font-size)] text-center tracking-[var(--bold-16-24-letter-spacing)] leading-[var(--bold-16-24-line-height)] whitespace-nowrap [font-style:var(--bold-16-24-font-style)]">
                  Sucesso! Segue O Texto Do Arquivo:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
