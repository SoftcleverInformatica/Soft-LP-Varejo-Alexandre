'use client';

import ButtonExpert from '@/components/button_expert';
import { LogoSoftclever } from '@/components/svgs';

export default function Header() {
	return (
		<header className='w-full flex flex-col items-center py-10 xl:py-20 '>
			<div className='w-full flex flex-col gap-16  px-4 md:px-10  lg:px-24  lg:gap-16 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[90rem]'>
				<a className='' href='https://softclever.com.br/' target='_blank'>
					<LogoSoftclever width={190} height={53} className='fill-white lg:fill-primary' />
				</a>

				<div className='absolute top-0 left-0 -z-10 w-full h-[64rem] md:h-[44rem] xl:h-full bg-bannerMobile lg:bg-banner bg-no-repeat bg-[right_0%_top_0%] bg-[length:60rem_71.5rem] lg:bg-[length:32rem_38rem] xl:bg-[length:40rem_47.5rem] 2xl:bg-[length:48rem_57rem] '></div>

				<div className=' flex flex-col gap-6 text-white lg:text-primary w-full lg:w-3/5 '>
					<div className='flex flex-col gap-10'>
						<h2 className='text-3xl font-bold'>Sirius Shop PDV</h2>
						<h4 className='text-xl font-bold text-justify text-orange-500 lg:text-orange-500'>
							Aumente suas vendas com o controle total <br /> do estoque e do caixa.
						</h4>
						<h4 className='text-xl font-bold text-justify text-orange-500 lg:text-orange-500'>Temos a solução para o crescimento do seu negócio</h4>
					</div>

					<p className='text-lg font-normal text-justify'>
						O Sirius Varejo é o único sistema sem contrato de fidelidade e que <strong>garante o melhor atendimento através de uma equipe dedicada</strong> para ajudar a decolar o seu negócio com a solução mais simples e
						ágil do mercado. Temos pacotes para todo o tipo e tamanho de comércio varejista com valores que cabem no seu bolso. Nossa versão de entrada custa apenas R$ 59,90 mensais. São mais de 30 anos desenvolvendo
						soluções para empresas como a sua. Venha fazer parte do nosso time.
					</p>
					<ButtonExpert color={'orange'} label='Quero atendimento personalizado' animation='animate-jump' className='md:w-96' />
				</div>
			</div>
		</header>
	);
}
