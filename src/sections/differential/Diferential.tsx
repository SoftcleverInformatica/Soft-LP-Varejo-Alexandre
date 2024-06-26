'use client';
import Image from 'next/image';
import DiferenciaisImagem from '@/assets/DiferenciaisImage.png';
import { useEffect, useState } from 'react';
import ButtonExpert from '@/src/components/button_expert';
import Tick from '@/assets/NossosDiferenciaisTick.svg';

export default function Differential() {
	const differentials: string[] = [
		'Experiência sólida desde 1994. São mais de 30 anos de experiência.',
		'Contrato mensal sem fidelidade. Nós confiamos nos serviços que oferecemos.',
		'Mais de 12.000 usuários atendidos em milhares de projetos implantados.',
		'Recomendados por centenas de escritórios contábeis. Os contadores confiam na segurança fiscal do nosso sistema.',
		'Pacotes para todos os tipos e tamanhos de empresa, seja do varejo, atacado, distribuição, indústria ou serviços.',
		'Suporte remoto e online totalmente humanizado. Na Soft Clever você não conversa com um robô.',
	];

	const [isMobile, setIsMobile] = useState(true);
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
		<section className='flex flex-col justify-center items-center p-10 gap-10 w-full'>
			<div className=' lg:max-w-3xl xl:max-w-4xl '>
				<div className='flex items-center gap-10 '>
					<div className='flex flex-col gap-14 '>
						<h1 className='text-justify text-sc  text-lg font-semibold lg:text-left lg:text-3xl'>
							Porque a Sirius Varejo é a escolha certa para o seu negócio
						</h1>

						<ul
							className='flex flex-col gap-[6rem] lg:gap-6 row-start-3 text-justify text-sc font-medium text-lg							max-w-[600px]
            lg:text-left lg:text-lg'>
							<li className='flex flex-row gap-4 items-center h-[2rem]'>
								<Image
									sizes=''
									alt='Tick'
									src={Tick}
								/>
								<span>
									O <strong className='text-[#CC4125]'>ÚNICO</strong> sistema{' '}
									<strong className='text-[#CC4125]'>SEM CONTRATO</strong> de fidelidade
								</span>
							</li>
							<li className='flex flex-row gap-4 items-center h-[2rem]'>
								<Image
									sizes=''
									alt='Tick'
									src={Tick}
								/>
								<span>
									A <strong className='text-[#CC4125]'>ÚNICA EMPRESA</strong> que oferece um atendimento{' '}
									<strong className='text-[#CC4125]'>humanizado e personalizado</strong>, sem qualquer tipo de robô.
								</span>
							</li>
							<li className='flex flex-row gap-4 items-center h-[2rem]'>
								<Image
									sizes=''
									alt='Tick'
									src={Tick}
								/>
								<span>
									O sistema <strong className='text-[#CC4125]'>MAIS SIMPLES</strong> e{' '}
									<strong className='text-[#CC4125]'>ÁGIL</strong> para ser usado.
								</span>
							</li>
							<li className='flex flex-row gap-4 items-center h-[2rem]'>
								<Image
									sizes=''
									alt='Tick'
									src={Tick}
								/>
								<span>Pacotes para todos os tipos e tamanhos de empresa</span>
							</li>
							<li className='flex flex-row gap-4 items-center h-[2rem]'>
								<Image
									sizes=''
									alt='Tick'
									src={Tick}
								/>
								<span>Mais de 12.000 usuários atendidos em milhares de projetos implantados.</span>
							</li>
							<li className='flex flex-row gap-4 items-center h-[2rem]'>
								<Image
									sizes=''
									alt='Tick'
									src={Tick}
								/>
								<span>A empresa mais tradicional do mercado, com mais de 30 anos de experiência</span>
							</li>
						</ul>
					</div>
					<div>
						{!isMobile && (
							<div className=' flex flex-col justify-center items-center  '>
								<div className=' absolute w-[20%] max-w-[18rem] h-[50%]  max-h-[23.875rem] rounded-lg bg-sc'></div>
								<Image
									className='relative right-[20%] w-[18rem]'
									alt='Homem apertando a mão de outro Homem'
									src={DiferenciaisImagem}></Image>
							</div>
						)}
					</div>
				</div>
			</div>
			<ButtonExpert
				color={'orange'}
				label='Fale com um especialista'
			/>
		</section>
	);
}
