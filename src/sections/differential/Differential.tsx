'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import DiferenciaisImagem from 'root/public/assets/DiferenciaisImage.png';
import Tick from 'root/public/assets/NossosDiferenciaisTick.svg';
import ButtonExpert from '@/components/button_expert';

export default function Differential() {
	const differentials: string[] = [
		'Experiência sólida desde 1994. São mais de 30 anos de experiência.',
		'Contrato mensal sem fidelidade. Nós confiamos nos serviços que oferecemos.',
		'Mais de 12.000 usuários atendidos em milhares de projetos implantados.',
		'Recomendados por centenas de escritórios contábeis. Os contadores confiam na segurança fiscal do nosso sistema.',
		'Pacotes para todos os tipos e tamanhos de empresa, seja do varejo, atacado, distribuição, indústria ou serviços.',
		'Suporte remoto e online totalmente humanizado. Na Soft Clever você não conversa com um robô.',
	];

	return (
		<section className='w-full flex flex-col items-center py-10 xl:py-20 '>
			<div className=' w-full flex flex-col gap-16  px-4 md:px-10  lg:px-24  lg:gap-16 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[90rem] '>
				<div className='flex items-center gap-0 justify-between '>
					<div className='flex flex-col gap-14 '>
						<h1 className='text-justify text-primary  text-lg font-semibold lg:text-left lg:text-3xl'>Porque a Soft Clever é a escolha certa para o seu negócio</h1>
						<ul className='flex flex-col gap-6  text-justify text-primary font-medium text-lg max-w-[600px] lg:text-left lg:text-lg'>
							<li className='flex gap-4 items-center '>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>
									Somos a <strong className='text-orange-700'>ÚNICA</strong> empresa <strong className='text-orange-700'>SEM CONTRATO</strong> de fidelidade
								</span>
							</li>

							<li className='flex gap-4 items-center '>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>
									Somos a <strong className='text-orange-700'>ÚNICA EMPRESA</strong> que oferece um atendimento <strong className='text-orange-700'>humanizado e personalizado</strong>, sem qualquer tipo de robô.
								</span>
							</li>

							<li className='flex gap-4 items-center '>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>
									Temos o sistema <strong className='text-orange-700'>MAIS SIMPLES</strong> e <strong className='text-orange-700'>ÁGIL</strong> para ser usado.
								</span>
							</li>

							<li className='flex gap-4 items-center '>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>Nossos pacotes são para todos os tipos e tamanhos de empresa.</span>
							</li>

							<li className='flex gap-4 items-center '>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>Já atendemos mais de 12.000 usuários em milhares de projetos implantados.</span>
							</li>

							<li className='flex gap-4 items-center '>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>Somos a empresa mais tradicional do mercado, com mais de 30 anos de experiência.</span>
							</li>
						</ul>
					</div>

					<div className='hidden  lg:flex flex-col justify-center items-center  '>
						<div className=' absolute w-[16%] max-w-64 h-[40%] max-h-64  xl:max-h-96 rounded-lg bg-primary'></div>
						<Image className='relative right-[14%] xl:right-[20%] w-64 xl:w-72' alt='Homem apertando a mão de outro Homem' src={DiferenciaisImagem}></Image>
					</div>
				</div>
				<ButtonExpert color={'orange'} label='Fale com um especialista' />
			</div>
		</section>
	);
}
