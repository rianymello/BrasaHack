import React from "react";

export const EstoqueHome = () => {
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
        <div className="absolute w-[246px] h-[202px] top-[590px] left-[904px] bg-white rounded-[10px] shadow-[4px_4px_4px_#00000040]" />
        <div className="absolute w-[86px] h-6 top-[619px] left-[931px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#777777] text-xl text-center tracking-[0] leading-[normal]">
          Scanner
        </div>
        <p className="absolute w-[106px] h-[84px] top-[664px] left-[1015px] [font-family:'Kanit-Medium',Helvetica] font-medium text-[#777777] text-sm text-center tracking-[0] leading-[normal]">
          Escaneie sua nota para adicionar ao estoque.
        </p>
        <div className="absolute w-[250px] h-[202px] top-[822px] left-[904px]">
          <div className="relative w-[246px] h-[202px] bg-white rounded-[10px] shadow-[4px_4px_4px_#00000040]">
            <div className="absolute w-[193px] h-[90px] top-[66px] left-[18px]">
              <img
                className="absolute w-[90px] h-[90px] top-0 left-0"
                alt="Bx box"
                src="bx-box.svg"
              />
              <p className="absolute w-[106px] h-[84px] top-1.5 left-[87px] [font-family:'Kanit-Medium',Helvetica] font-medium text-[#777777] text-sm text-center tracking-[0] leading-[normal]">
                Acesse seu estoque online e veja todas as informações
              </p>
            </div>
            <div className="absolute w-[86px] h-6 top-[30px] left-[27px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#777777] text-xl text-center tracking-[0] leading-[normal]">
              Estoque
            </div>
          </div>
        </div>
        <img
          className="absolute w-[41px] h-[41px] top-[363px] left-[844px]"
          alt="Ph arrow down bold"
          src="ph-arrow-down-bold.png"
        />
        <img
          className="absolute w-[88px] h-[88px] top-[661px] left-[931px]"
          alt="Ph scan fill"
          src="ph-scan-fill.png"
        />
      </div>
    </div>
  );
};
