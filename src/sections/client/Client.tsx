import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import CountUp from 'react-countup';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import ButtonExpert from '@/components/button_expert';
import iconClient from '../../../public/assets/clients.svg';
import clientBax from '../../../public/assets/clients/bax.png';
import clientBinelli from '../../../public/assets/clients/binelli.png';
import clientBollatel from '../../../public/assets/clients/bollatel.png';
import clientColormix from '../../../public/assets/clients/colormix.png';
import clientCoopercas from '../../../public/assets/clients/coopercas.png';
import clientEscaleve from '../../../public/assets/clients/escaleve.png';
import clientPolar from '../../../public/assets/clients/polar.png';
import clientPortoro from '../../../public/assets/clients/portoro.png';
import iconTeam from '../../../public/assets/team.svg';
import iconUser from '../../../public/assets/user.svg';

export default function Client() {
	const imgs: { alt: string; src: any }[] = [
		{
			alt: 'Logo da empresa Bax',
			src: clientBax,
		},
		{
			alt: 'Logo da empresa Binelli',
			src: clientBinelli,
		},
		{
			alt: 'Logo da empresa Bollatel',
			src: clientBollatel,
		},
		{
			alt: 'Logo da empresa Colormix',
			src: clientColormix,
		},
		{
			alt: 'Logo da empresa Coopercas',
			src: clientCoopercas,
		},
		{
			alt: 'Logo da empresa Escaleve',
			src: clientEscaleve,
		},
		{
			alt: 'Logo da empresa Polar',
			src: clientPolar,
		},
		{
			alt: 'Logo da empresa Portoro',
			src: clientPortoro,
		},
	];

	return (
		<section className='flex w-full flex-col items-center py-10 xl:py-20'>
			<div className='flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]'>
				<h2 className='text-justify text-lg font-semibold lg:text-left lg:text-3xl'>São Mais de 30 anos de experiência</h2>
				<p className='text-center text-lg'>Nós da Soft Clever temos o intuito de ter sua empresa como membro do nosso grupo e não somente como mais um cliente.</p>
				<div className='flex flex-wrap items-center justify-center gap-20'>
					{/* Users */}
					<div className='flex flex-col items-center justify-items-center gap-1.5'>
						<div className='gap- flex items-center justify-items-center gap-5'>
							<Image className='' alt='Ícone de clientes' src={iconUser}></Image>
							<div className='flex flex-col items-start justify-items-center gap-2'>
								<p className='font-primary text-lg font-extrabold'>USUÁRIOS</p>
								<p className='text-lg font-extrabold text-secondary'>
									<CountUp duration={2} separator='' delay={1} start={0} end={12000} /> +
								</p>
							</div>
						</div>
						<div>
							<p className='text-base font-extrabold'>+ de 12000</p>
							<p className='text-base font-extrabold'>USUÁRIOS</p>
						</div>
					</div>
					{/* Clients */}
					<div className='flex flex-col items-center justify-items-center gap-1.5'>
						<div className='gap- flex items-center justify-items-center gap-5'>
							<Image className='' alt='Ícone de clientes' src={iconClient}></Image>
							<div className='flex flex-col items-start justify-items-center gap-2'>
								<p className='font-primary text-lg font-extrabold'>CLIENTES</p>
								<p className='text-lg font-extrabold text-secondary'>
									<CountUp duration={2} separator='' delay={1} start={0} end={3700} /> +
								</p>
							</div>
						</div>
						<div>
							<p className='text-base font-extrabold'>+ de 3700</p>
							<p className='text-base font-extrabold'>CLIENTES</p>
						</div>
					</div>
					{/* Team */}
					<div className='flex flex-col items-center justify-items-center gap-1.5'>
						<div className='flex items-center justify-items-center gap-5'>
							<Image className='' alt='Ícone de clientes' src={iconTeam}></Image>
							<div className='flex flex-col flex-wrap items-start justify-items-center gap-2'>
								<p className="whitespace-pre-wrap font-primary text-lg font-extrabold before:content-['NOSSA\\\\A_EQUIPE'] sm:before:content-['NOSSA_EQUIPE']"></p>
								<p className='text-lg font-extrabold text-secondary'>
									<CountUp duration={2} separator='' delay={1} start={0} end={20} /> +
								</p>
							</div>
						</div>
						<div>
							<p className='text-base font-extrabold'>+ de 20</p>
							<p className='text-base font-extrabold'>FUNCIONÁRIOS</p>
						</div>
					</div>
				</div>
				<div>
					<Carousel plugins={[Autoplay({ delay: 1500 })]} opts={{ loop: true }}>
						<CarouselContent>
							{imgs.map((_, index) => (
								<CarouselItem className='md:basis-1/3 lg:basis-1/5' key={index}>
									<div className='flex items-center justify-center'>
										<Image className='h-16 object-scale-down' alt={_.alt} src={_.src} />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
				<ButtonExpert color={'orange'} label='Fale com um especialista' />
			</div>
		</section>
	);
}
