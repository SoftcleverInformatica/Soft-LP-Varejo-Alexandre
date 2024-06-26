'use client';
import ButtonExpert from '@/src/components/button_expert';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import HeaderPartial from '../../../assets/header.png';
import HeaderFull from '../../../assets/HeaderBG.png';
import LogoAzul from '../../../assets/logo_azul.svg';
import LogoBranco from '../../../assets/logo_branco.svg';

export default function Header() {
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

  const bg = isMobile ? { backgroundImage: `url(${HeaderFull.src})` } : undefined;
  return (

    <header
      style={bg}
      className={`bg-cover  grid relative overflow-x-hidden grid-cols-12 grid-rows-12 gap-3 md:h-[50rem] min-h-[27rem] xl:h-[42rem]  lg:min-h-[40rem] lg:max-h[42rem] bg-no-repeat bg-right-top pb-4 lg:bg-cover`}>
      <div
        className='
        col-span-full pl-10 min-w-[20rem] row-span-1 
            md:row-span-2 md:absolute md:left-[5%]
            lg:pl-0 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-2 flex lg:items-center pt-2'>
        <Image
          className='w-[60%] md:max-h-[4rem] lg:max-h-[3.5rem] lg:w-[100%] lg:ml-[6.5rem]'
          alt='logo Softclever'
          src={isMobile ? LogoBranco : LogoAzul}
        />
      </div>

      <div
        className=' flex flex-col col-start-2 col-span-10 row-start-2 row-span-10 p-2 gap-3 text-[#f2faff] 
            lg:text-[#003658] lg:col-span-5 lg:row-span-8 lg:col-start-3 lg:row-start-4'>

        <div className='flex flex-col gap-[18px] mb-5'>
          <h2 className='text-3xl font-bold'>Sirius Shop PDV</h2>

          <h4 className='text-xl font-bold text-justify text-orange-500 lg:text-orange-700'>Aumente suas vendas com o controle total <br /> do estoque e do caixa.</h4>
          <h4 className='text-xl font-bold text-justify text-orange-500 lg:text-orange-700'>Temos a solução para o crescimento do seu negócio</h4>
        </div>

        <p className='text-lg font-normal text-justify'>
          O Sirius Varejo é o único sistema sem contrato de fidelidade e que{' '}
          <strong>garante o melhor atendimento através de uma equipe dedicada</strong> para ajudar a decolar o seu negócio com a solução mais simples e ágil do mercado. Temos pacotes para todo o tipo e tamanho de comércio varejista com valores que cabem no seu bolso. Nossa versão de entrada custa apenas R$ 59,90 mensais. São mais de 30 anos desenvolvendo soluções para empresas como a sua. Venha fazer parte do nosso time.
        </p>
      </div>

      <div
        className='col-span-10  col-start-2 row-start-12
            lg:col-span-4 lg:col-start-3 lg:row-start-12'>
        <ButtonExpert
          color={'orange'}
          label='Quero atendimento personalizado'
          animation='animate-pulse'
        />
      </div>

      {!isMobile && (
        <>
          <Image
            className='h-[40.7rem] lg:col-span-6 lg:col-start-7'
            alt='background_image'
            src={HeaderPartial}
          />
        </>
      )}
    </header>
  );
}
