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
		<>
			<div className='overflow-x-hidden flex flex-col gap-10 px-[2.5rem] py-[1.8rem] items-center lg:py-[3.625rem]  '>
				<div className='flex flex-col items-center gap-12 lg:max-w-2xl xl:max-w-4xl w-full '>
					<h2 className='text-2xl font-bold text-primary	'>São Mais de 30 anos de experiência</h2>
					<p className='text-primary text-center text-lg'>Nós da Soft Clever temos o intuito de ter sua empresa como membro do nosso grupo e não somente como mais um cliente.</p>
					<div className='flex flex-wrap justify-center items-center gap-20  '>
						{/* Users */}
						<div className='flex flex-col gap-1.5 items-center justify-items-center '>
							<div className='flex gap-5 items-center justify-items-center gap-'>
								<Image className='' alt='Ícone de clientes' src={iconUser}></Image>
								<div className='flex flex-col gap-2 items-start justify-items-center '>
									<p className='text-primary font-primary text-lg font-extrabold'>USUÁRIOS</p>
									<p className='text-secondary text-lg font-extrabold '>
										<CountUp duration={2} separator='' delay={1} start={0} end={12000} /> +
									</p>
								</div>
							</div>
							<div>
								<p className='text-primary text-base font-extrabold'>+ de 12000</p>
								<p className='text-primary text-base font-extrabold'>USUÁRIOS</p>
							</div>
						</div>
						{/* Clients */}
						<div className='flex flex-col gap-1.5 items-center justify-items-center '>
							<div className='flex gap-5 items-center justify-items-center gap-'>
								<Image className='' alt='Ícone de clientes' src={iconClient}></Image>
								<div className='flex flex-col gap-2 items-start justify-items-center '>
									<p className='text-primary font-primary text-lg font-extrabold'>CLIENTES</p>
									<p className='text-secondary text-lg font-extrabold '>
										<CountUp duration={2} separator='' delay={1} start={0} end={3700} /> +
									</p>
								</div>
							</div>
							<div>
								<p className='text-primary text-base font-extrabold'>+ de 3700</p>
								<p className='text-primary text-base font-extrabold'>CLIENTES</p>
							</div>
						</div>
						{/* Team */}
						<div className='flex flex-col gap-1.5 items-center justify-items-center '>
							<div className='flex gap-5 items-center justify-items-center '>
								<Image className='' alt='Ícone de clientes' src={iconTeam}></Image>
								<div className='flex flex-col gap-2 items-start justify-items-center flex-wrap'>
									<p className="text-primary font-primary text-lg font-extrabold whitespace-pre-wrap before:content-['NOSSA\A_EQUIPE'] sm:before:content-['NOSSA_EQUIPE'] "></p>
									<p className='text-secondary text-lg font-extrabold '>
										<CountUp duration={2} separator='' delay={1} start={0} end={20} /> +
									</p>
								</div>
							</div>
							<div>
								<p className='text-primary text-base font-extrabold'>+ de 20</p>
								<p className='text-primary text-base font-extrabold'>FUNCIONÁRIOS</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<Carousel plugins={[Autoplay({ delay: 1500 })]} className=' lg:max-w-xl xl:max-w-2xl w-full '>
						<CarouselContent>
							{imgs.map((_, index) => (
								<CarouselItem className='flex  justify-center md:basis-1/5 lg:basis-1/5 ' key={index}>
									<div className='flex  '>
										<Image className='self-center h-16 object-contain' alt={_.alt} src={_.src} />
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
				<ButtonExpert color={'orange'} label='Fale com um especialista' />
			</div>
			<div className='section9 bg-cover bg-no-repeat w-full h-[15vh] lg:h-[25vh] max-h-[15rem] min-h-[8rem]'></div>
		</>
	);
}
