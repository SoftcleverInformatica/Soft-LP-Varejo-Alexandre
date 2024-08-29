'use client';

import SobreNos from '@/../../public/assets/about-us.png';
import Image from 'next/image';
import ButtonExpert from '@/components/button_expert';

export default function AboutUs() {
	return (
		<section className='flex w-full flex-col items-center py-10 xl:py-20'>
			<div className='flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]'>
				<h1 className='text-justify text-lg font-semibold lg:text-left lg:text-3xl'>Sobre nós</h1>

				<div className='w-full text-justify text-lg font-medium lg:text-left lg:text-base'>
					<div className='flex gap-8'>
						<div className='flex w-full flex-col gap-8 lg:w-2/3'>
							<p>
								A Soft Clever tem uma trajetória sólida no desenvolvimento de sistemas desde 1994. Com mais de 12.000 usuários atendidos e inúmeras parcerias estabelecidas com escritórios de contabilidade, nossa empresa
								está empenhada em oferecer um serviço cada vez mais aprimorado. Nosso segredo reside no compromisso com a excelência, priorizando o bem-estar de nossos clientes e buscando sempre orientá-los para as
								melhores decisões. Isso resulta em confiança e satisfação em cada interação com nossos serviços.
							</p>

							<div className='hidden sm:block'>
								<p>
									Contamos com uma equipe altamente qualificada e própria, capacitada para atender às diversas demandas do mercado com agilidade e comprometimento. A fidelidade de nossos clientes é a maior prova da
									qualidade dos serviços que oferecemos. Desenvolvemos projetos específicos para empresas de todos os tamanhos, desde micro empreendimentos até médias empresas, adaptando-nos às necessidades individuais
									de cada cliente.
								</p>
							</div>
							<ButtonExpert color={'orange'} label='Fale com um especialista' />
						</div>
						<div className='relative hidden flex-col items-center justify-center lg:flex'>
							<div className='absolute right-0 -z-10 h-full max-h-80 w-full max-w-64 rounded-3xl bg-primary'></div>
							<Image className='right-0 h-auto w-96' alt='Homem apertando a mão de outro Homem' src={SobreNos}></Image>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
