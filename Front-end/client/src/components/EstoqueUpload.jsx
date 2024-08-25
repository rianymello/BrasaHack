import React from "react";

export const EstoqueUpload = () => {
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
        <div className="absolute w-[186px] h-[85px] top-[511px] left-[937px] bg-white rounded-[10px] shadow-[4px_4px_4px_#00000040]" />
        <div className="absolute w-[122px] h-[29px] top-[535px] left-[969px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#777777] text-2xl text-center tracking-[0] leading-[normal]">
          Upload
        </div>
        <a href="/options">
          <img
            className="absolute w-[41px] h-[41px] top-[363px] left-[844px]"
            alt="arrow"
            src="arrow-left.svg"
          />
        </a>
        <img
          className="absolute w-[367px] h-[181px] top-[708px] left-[847px]"
          alt="Upload arquivo"
          src=".svg"
        />
        <form action="https://hacka-stone-tesseract-ocr.onrender.com/read" method="post" enctype="multipart/form-data">
          <input type="file" name="nota_fiscal" />
          <button>Enviar</button>
        </form>

        <div className="absolute w-[312px] h-16 top-[957px] left-[875px]">
          <div className="relative w-[310px] h-16 bg-[#525256] rounded-[15px]">
            <div className="absolute w-20 top-5 left-[106px] font-semibold-16-24 font-[number:var(--semibold-16-24-font-weight)] text-white text-[length:var(--semibold-16-24-font-size)] tracking-[var(--semibold-16-24-letter-spacing)] leading-[var(--semibold-16-24-line-height)] [font-style:var(--semibold-16-24-font-style)]">
              Confirmar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
