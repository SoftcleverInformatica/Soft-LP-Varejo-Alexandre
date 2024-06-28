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
        <h2 className="text-3xl font-bold" >Assista a apresentação do Sirius S@T </h2>

        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} w-full h-full justify-between gap-10`}>
          <iframe className="max-w-full rounded-lg w-[30rem] h-[16.2rem]" src="https://www.youtube.com/embed/cyZewkBguQ8?si=Glgqb5asSfIl7vRz" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          <div className={`w-[60%] ${isMobile && 'w-full gap-5'} flex flex-col justify-between items-start`}>
            <h2 className="text-xl font-semibold">Conheça o Sírius SAT:</h2>
            <p className="text-lg">Gerencie seu comércio, realize vendas de forma simples e rápida, e ainda atenda totalmente a legislação do estado de São Paulo.</p>
            <ButtonExpert
              color={'orange'}
              label='Converse agora com um especialista'
            />
          </div>
        </div>
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row-reverse'} w-full h-full justify-between gap-10`}>
          <iframe className="max-w-full rounded-lg w-[30rem] h-[16.2rem]" src="https://www.youtube.com/embed/tRzIs4gqI98?si=lSJmn-jWQbdRGi9x" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          <div className={`w-[60%] ${isMobile && 'w-full gap-5'} flex flex-col justify-between items-start`}>
            <h2 className="text-xl font-semibold">Conheça o Sírius PDV Web:</h2>
            <p className="text-lg">Realize vendas de forma simples e rápida, e também gerencie seu comércio.</p>
            <ButtonExpert
              color={'orange'}
              label='Converse agora com um especialista'
            />
          </div>
        </div>

      </div>
    </section>
  );
}
