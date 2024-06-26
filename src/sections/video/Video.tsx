import ButtonExpert from "@/src/components/button_expert";
import { useEffect, useState } from "react";

export default function Video() {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 320 && window.innerWidth <= 1023) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    function updateText() {
      if (window.innerWidth >= 320 && window.innerWidth <= 1023) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    // Adiciona um ouvinte de evento de redimensionamento da janela
    window.addEventListener('resize', updateText);

    // Remove o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', updateText);
    };
  }, []);

  return (
    <section className='flex flex-col gap-10 bg-sc text-white px-10 py-14 items-center w-full'>
      <div className='flex flex-col items-center gap-12 lg:max-w-2xl xl:max-w-4xl w-full '>
        <h2 className="text-3xl" >Assista a apresentação do Sirius S@T </h2>

        <div className={`flex ${isMobile?'flex-col':'flex-row'} w-full h-full justify-between gap-3`}>
          <iframe className="max-w-full rounded-lg w-[28.8rem] h-[16.2rem]" src="https://www.youtube.com/watch?v=tRzIs4gqI98" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          <iframe className="max-w-full rounded-lg w-[28.8rem] h-[16.2rem]" src="https://www.youtube.com/watch?v=cyZewkBguQ8" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      <ButtonExpert
        color={'orange'}
        label='Converse agora com um especialista'
      />
    </section>
  );
}
