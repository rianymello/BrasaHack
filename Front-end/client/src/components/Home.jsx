import React from "react";
import Ellipse from "../../public/ellipse-1.svg";

export const Home = () => {
  return (
    <div className="w-[430px] h-[932px] bg-[#f8f8f8] overflow-hidden">
      <div className="relative w-[1269px] h-[1352px] top-[-312px] left-[-815px]">
        <img
          className="absolute w-[228px] h-[455px] top-[359px] left-[815px]"
          alt="Ellipse"
          src="/ellipse-1.svg"
        />
        <img
          className="absolute w-[204px] h-[455px] top-[762px] left-[1041px]"
          alt="Ellipse"
          src="/ellipse-2.svg"
        />
        <div className="absolute w-[1037px] h-[1148px] top-[102px] left-[116px] bg-[#bababa1a] rounded-[49px] rotate-[13.03deg] blur-sm" />
        <div className="absolute w-[148px] h-[45px] top-[860px] left-[843px] [font-family:'Kanit-SemiBold',Helvetica] font-semibold text-[#26d0b6] text-3xl text-center tracking-[0] leading-[normal]">
          Destaques
        </div>
        <div className="absolute w-[193px] h-[98px] top-[468px] left-[1043px]">
          <div className="absolute w-[184px] h-[68px] top-0 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#26d0b6] text-[28px] tracking-[0] leading-[normal]">
            LOJA <br />
            STONE
          </div>
          <p className="absolute w-[189px] h-[30px] top-[68px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#424141] text-xs tracking-[-0.72px] leading-[normal]">
            Acesse o pagamento ou insira o cartão para iniciar uma venda
          </p>
        </div>
        <div className="absolute w-[175px] h-[175px] top-[651px] left-[846px] bg-white rounded-[10px] shadow-[4px_4px_4px_#00000040]" />
        <div className="absolute w-[165px] h-[146px] top-[906px] left-[1053px] bg-white rounded-[10px] shadow-[4px_4px_4px_#00000040]" />
        <div className="absolute w-[162px] h-[146px] top-[1074px] left-[846px] bg-white rounded-[10px] shadow-[4px_4px_4px_#00000040]" />
        <div className="absolute w-[165px] h-[146px] top-[1074px] left-[1053px] bg-white rounded-[10px] shadow-[4px_4px_4px_#00000040]" />
        <div className="absolute w-[175px] h-[175px] top-[651px] left-[1043px] bg-white rounded-[10px] shadow-[4px_4px_4px_#00000040]" />
        <div className="h-[22px] top-[748px] [font-family:'Kanit-Medium',Helvetica] font-medium text-[#777777] text-[15px] text-center tracking-[0] leading-[normal] absolute w-[41px] left-[912px]">
          Menu
        </div>
        <div className="absolute w-6 h-[22px] top-[1160px] left-[915px] [font-family:'Kanit-Medium',Helvetica] font-medium text-[#777777] text-[15px] text-center tracking-[0] leading-[normal]">
          PIX
        </div>
        <div className="absolute w-[99px] h-[22px] top-[991px] left-[1086px] [font-family:'Kanit-Medium',Helvetica] font-medium text-[#777777] text-[15px] text-center tracking-[0] leading-[normal]">
          Cancelamento
        </div>
        <div className="absolute w-[77px] h-[22px] top-[748px] left-[1092px] [font-family:'Kanit-Medium',Helvetica] font-medium text-[#777777] text-[15px] text-center tracking-[0] leading-[normal]">
          Pagamento
        </div>
        <img
          className="h-[41px] top-[705px] absolute w-[41px] left-[912px]"
          alt="Menu"
          src="menu.svg"
        />
        <img
          className="absolute w-[55px] h-[55px] top-[944px] left-[1108px]"
          alt="Cancelamento"
          src="icone-3.svg"
        />
        <img
          className="absolute w-[50px] h-[50px] top-[1111px] left-[902px]"
          alt="Pix"
          src="icone-5.svg"
        />
        <img
          className="absolute w-[50px] h-[50px] top-[1111px] left-[1113px]"
          alt="Ph newspaper"
          src="icone-4.svg"
        />
        <div className="absolute w-[88px] h-[22px] top-[1160px] left-[1092px] [font-family:'Kanit-Medium',Helvetica] font-medium text-[#777777] text-[15px] text-center tracking-[0] leading-[normal]">
          Reimpressão
        </div>
        <div className="absolute w-[164px] h-[146px] top-[906px] left-[846px]">
          <div className="relative w-[162px] h-[146px] bg-white rounded-[10px] shadow-[4px_4px_4px_#00000040]">
            <img
              className="absolute w-[55px] h-[55px] top-[38px] left-[54px]"
              alt="Bx box"
              src="bx_box.svg"
            />
            <div className="absolute w-14 h-[22px] top-[86px] left-[53px] [font-family:'Kanit-Medium',Helvetica] font-medium text-[#777777] text-[15px] text-center tracking-[0] leading-[normal]">
              Estoque
            </div>
          </div>
        </div>
        <img
          className="absolute w-[61px] h-[53px] top-[693px] left-[1100px]"
          alt="Pagamento"
          src="celulares.svg"
        />
      </div>
    </div>
  );
};
