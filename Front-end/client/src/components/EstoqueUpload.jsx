import React, { useState } from "react";

export const EstoqueUpload = () => {
  const [file, setFile] = useState()

  const handleFileUpload = (e) => {
    setFile(e.target.files[0])
    console.log(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('nota_fiscal', file);
    // https://hacka-stone-tesseract-ocr.onrender.com/read
    const response = await fetch('http://localhost:3000/read', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        nota_fiscal: formData
      }
    })
    const data = await response.json()
    console.log(data)
    return data
  }
  
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
        <form onSubmit={handleSubmit} className="relative max-w-max flex items-center justify-center flex-col h-[500px] top-[650px] left-[847px]" action="https://hacka-stone-tesseract-ocr.onrender.com/read" method="post" encType="multipart/form-data">
          <input onChange={handleFileUpload} type="file" name="nota_fiscal" />
          <button className="bg-[#525256] px-8 py-4 rounded-md font-semibold text-white text-3xl mt-5">Enviar</button>
        </form>

        
      </div>
    </div>
  );
};
