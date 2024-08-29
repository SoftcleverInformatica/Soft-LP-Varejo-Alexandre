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
		<section className='flex w-full flex-col items-center py-10 xl:py-20'>
			<div className='flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]'>
				<div className='flex items-center justify-between gap-0'>
					<div className='flex flex-col gap-14'>
						<h1 className='text-justify text-lg font-semibold lg:text-left lg:text-3xl'>Porque a Soft Clever é a escolha certa para o seu negócio</h1>
						<ul className='flex max-w-[600px] flex-col gap-6 text-justify text-lg font-medium lg:text-left lg:text-lg'>
							<li className='flex items-center gap-4'>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>
									Somos a <strong className='text-orange-700'>ÚNICA</strong> empresa <strong className='text-orange-700'>SEM CONTRATO</strong> de fidelidade
								</span>
							</li>

							<li className='flex items-center gap-4'>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>
									Somos a <strong className='text-orange-700'>ÚNICA EMPRESA</strong> que oferece um atendimento <strong className='text-orange-700'>humanizado e personalizado</strong>, sem qualquer tipo de robô.
								</span>
							</li>

							<li className='flex items-center gap-4'>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>
									Temos o sistema <strong className='text-orange-700'>MAIS SIMPLES</strong> e <strong className='text-orange-700'>ÁGIL</strong> para ser usado.
								</span>
							</li>

							<li className='flex items-center gap-4'>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>Nossos pacotes são para todos os tipos e tamanhos de empresa.</span>
							</li>

							<li className='flex items-center gap-4'>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>Já atendemos mais de 12.000 usuários em milhares de projetos implantados.</span>
							</li>

							<li className='flex items-center gap-4'>
								<Image sizes='' alt='Tick' src={Tick} />
								<span>Somos a empresa mais tradicional do mercado, com mais de 30 anos de experiência.</span>
							</li>
						</ul>
					</div>

					<div className='hidden flex-col items-center justify-center lg:flex'>
						<div className='absolute h-[40%] max-h-64 w-[16%] max-w-64 rounded-3xl bg-primary xl:max-h-96'></div>
						<Image className='relative right-[14%] w-64 xl:right-[20%] xl:w-72' alt='Homem apertando a mão de outro Homem' src={DiferenciaisImagem}></Image>
					</div>
				</div>
				<ButtonExpert color={'orange'} label='Fale com um especialista' />
			</div>
		</section>
	);
}
