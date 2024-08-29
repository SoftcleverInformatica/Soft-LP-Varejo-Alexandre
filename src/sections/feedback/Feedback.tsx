import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ButtonExpert from '@/components/button_expert';
import { ReadMore } from '@/components/ReadMore';
import feedbackImageBg from '../../../public/assets/feedback.png';
import star from '../../../public/assets/star.svg';
import starGray from '../../../public/assets/starGray.svg';

export default function Feedback() {
	const bgStarGray = { backgroundImage: `url(${starGray.src})` };
	const bgStar = { backgroundImage: `url(${star.src})` };

	const feedbacks: {
		name: string;
		message: string;
		score: number;
		image: any;
	}[] = [
		{
			name: 'Aurelio Vari',
			message:
				'A Soft Cleber desde 2015 mantém um atendimento muito bom. Tem o domínio do software e da política financeira do governo. O custo de contrato mensal também está bem competitivo. Enfim, é uma boa empresa para contratar.',
			score: 5,
			image: 'Aurelio Vari.png',
		},
		{
			name: 'Rosely Barbosa',
			image: 'Rosely Barbosa.png',
			score: 5,
			message: 'Trabalhamos com a Soft Clever há mais de 10 anos, sempre nos atendeu bem, com cordialidade e rapidez. Nossas solicitações sempre foram atendidas.',
		},
		{
			name: 'Buker engrenagens',
			image: 'Buker engrenagens.png',
			score: 5,
			message:
				'A Soft Clever resolveu-me um problema que durante muito tempo a tentar resolver, sem sucesso. Analisaram com o máximo cuidado, conseguiram identificar o problema, e ver a melhor solução. Somos gratos por essa parceria de tanto tempo!!!!',
		},
		{
			name: 'RHVAUD VAUD',
			image: 'RHVAUD VAUD.png',
			score: 5,
			message: 'O sistema é ágil e prático para emissão de notas fiscais. Sempre que surge algum problema, o pessoal do suporte são super competentes e atenciosos.',
		},
		{
			name: 'AIA Embalagens',
			image: 'AIA Embalagens.png',
			score: 5,
			message: 'adoro trabalhar com a equipe da soft clever, ERP descomplicado, funcionários sempre dispostos a ajudar, explicam e auxiliam sempre da melhor forma... super indico !',
		},
		{
			name: 'Bax Festas',
			image: 'Bax Festas.png',
			score: 5,
			message: 'Excelente atendimento e rapidez para solucionar os problemas. Parceria duradoura e eficiente.',
		},
		{
			name: 'Alex Cavalcante',
			image: 'Alex Cavalcante.png',
			score: 5,
			message: 'Empresa muito prestativa sempre muito rápida para o atendimento e com muita postura, indico.',
		},
		{
			name: 'Cristiano Boscariol',
			image: 'Cristiano Boscariol.png',
			score: 5,
			message: 'Bom Atendimento , sempre sendo muito bem atendido ..',
		},
		{
			name: 'Ana Maria Giamarini Couto',
			image: 'Ana Maria Giamarini Couto.png',
			score: 5,
			message: 'Minha experiência está sendo boa, sendo atendida dentro da minha necessidade.',
		},
		{
			name: 'Stefano Klein',
			image: 'Stefano Klein.png',
			score: 5,
			message: 'Atendimento nota 10,paciência dos atendentes,( já se tornaram amigos) nota 10,meus parabens',
		},
		{
			name: 'Valdeir Oliveira',
			image: 'Valdeir Oliveira.png',
			score: 5,
			message: 'E muito bom o atendimento  com quem falei sempre  min atenderam muito bem estão  de parabéns',
		},
		{
			name: 'renovando moda',
			image: 'renovando moda.png',
			score: 5,
			message: 'ótimo atendimento e estão sempre com disposição para ajudar!',
		},
		{
			name: 'Michelle Mendes',
			image: 'Michelle Mendes.png',
			score: 5,
			message: 'Bons profissionais, sistema customizado e bom custo benefício!',
		},
		{
			name: 'Stefanie Prado',
			image: 'Stefanie Prado.png',
			score: 5,
			message: 'A soft Clever tem um atendimento maravilhoso,  super rápido e ágil.',
		},
		{
			name: 'Pedro Lima',
			image: 'Pedro Lima.png',
			score: 5,
			message: 'Excelente atendimento, sempre atenciosos no que precisar!',
		},
		{
			name: 'Rita de Cassia Troiano Trindade',
			image: 'Rita de Cassia Troiano Trindade.png',
			score: 5,
			message: 'Os serviços e explicações foram rápidas e claras.',
		},
		{
			name: 'Cadiveu Academy',
			image: 'Cadiveu Academy.png',
			score: 5,
			message:
				'Conheço o trabalho da empresa de longa data, são extremamente sérios e comprometidos com seus clientes. O suporte realmente funciona, estão sempre interessados em resolver os problemas e solucionar as nossas dúvidas, dá para perceber que eles realmente entendem do que estão falando. ',
		},
		{
			name: 'Caio Felipe de Mendonça',
			image: 'Caio Felipe de Mendonca.png',
			score: 5,
			message:
				'Tenho o sistema da Soft Clever cerca de 7 anos e sempre recebi um atendimento excelente, tanto do suporte quanto do comercial. Sistema atende a todas as minhas necessidades e estou muito satisfeito. Já tive outros sistemas e só com o Sírius tive um custo beneficio muito positivo',
		},
		{
			name: 'Edna Guaita',
			image: 'Edna Guaita.png',
			score: 5,
			message: 'foi tudo normal',
		},
		{
			name: 'Israel Bezerra',
			image: 'Israel Bezerra.png',
			score: 5,
			message: 'Muito bom o atendimento e presteza!!',
		},
		{
			name: 'Marcelo Doelitzschi',
			image: 'Marcelo Doelitzschi.png',
			score: 5,
			message:
				'O comentário aqui quem voz faz, é de um conhecedor da qualidade tanto no desenvolvimento de sistemas quanto no atendimento direto ao cliente. Conhecedor a exatamente  14 anos, acompanhado todo o processo de evolução em tecnologia e capacitação de pessoal, indico sem sombra de dúvidas a empresa em questão.',
		},
		{
			name: 'Larissa Romão',
			image: 'Larissa Romao.png',
			score: 5,
			message:
				'Estou com o sistema a alguns anos, e durante este período recebi auxilio em todas as minhas solicitações. Não tenho reclamação quanto ao atendimento, comercial e do suporte, gosto bastante do sistema, pois é de simples manuseio.',
		},
		{
			name: 'joao silva',
			image: 'joao silva.png',
			score: 5,
			message:
				'O sistema atende a todas as necessidades do cliente, na sua forma modular, te proporciona conforto na contratação, atendimento perfeito no suporte com pessoas capacitadas. Sistema de fácil utilização e rapidez no atendimento ao consumidor final.',
		},
		{
			name: 'Wendel Faria',
			image: 'Wendel Faria.png',
			score: 5,
			message: 'Excelente empresa',
		},
		{
			name: 'Simone Barbosa',
			image: 'Simone Barbosa.png',
			score: 5,
			message: 'Atendimento excelente.',
		},
		{
			name: 'Jessica Moniz de Souza',
			image: 'Jessica Moniz de Souza.png',
			score: 5,
			message: 'Software de qualidade, pratico, fácil de operar e que atende a todas as necessidade, suporte preparado para atender as duvidas do cliente, sem dúvida o melhor custo x beneficio que encontrei.',
		},
		{
			name: 'Quezia Fabiana',
			image: 'Quezia Fabiana.png',
			score: 5,
			message: 'ótima empresa, não tenho reclamações, indico a todos meus conhecidos.',
		},
		{
			name: 'Nanci Menezes',
			image: 'Nanci Menezes.png',
			score: 5,
			message: 'Atendimento de qualidade.',
		},
		{
			name: 'Leia Ferreira',
			image: 'Leia Ferreira.png',
			score: 5,
			message: 'Excelente atendimento',
		},
		{
			name: 'Flavia Nunes',
			image: 'Flavia Nunes.png',
			score: 5,
			message: 'Ótima empresa, soluções rápidas e cabiveis. super recomendo!!',
		},
		{
			name: 'Residencial Pousada Cantinho Ocian',
			image: 'Residencial Pousada Cantinho Ocian.png',
			score: 5,
			message: 'O sistema atendê a nossas necessidades, suporte rápido e equipe prestativo.',
		},
		{
			name: 'Rafaela Miranda',
			image: 'Rafaela Miranda.png',
			score: 5,
			message: 'ótima empresa, não tenho reclamações, indico a todos meus conhecidos.',
		},
		{
			name: 'Kaique Chaves',
			image: 'Kaique Chaves.png',
			score: 5,
			message: 'Sistema fácil, utilizo a muito tempo. Recomendo para todos.',
		},
		{
			name: 'Gus Almeida',
			image: 'Gus Almeida.png',
			score: 5,
			message: 'Ótima empresa, super indico a todos.',
		},
		{
			name: 'Belsau beleza & saúde saúde',
			image: 'Belsau beleza e saude saude.png',
			score: 5,
			message: 'Empresa séria, atendimento de primeira. Cumpre o que promete.',
		},
		{
			name: 'Laercio Inacio Da Rosa',
			image: 'Laercio Inacio Da Rosa.png',
			score: 5,
			message: 'Recebi tratamento de primeira, muito bom.',
		},
		{
			name: 'Atelie - Ateliê da Linguiça',
			image: 'Atelie da Linguica.png',
			score: 5,
			message: 'Empresa séria e com pessoas competentes.',
		},
		{
			name: 'Marcos Goulart',
			image: 'Marcos Goulart.png',
			score: 5,
			message: 'Melhor lugar, otimos atendentes <3',
		},
		{
			name: 'Alek dias',
			image: 'Alek dias.png',
			score: 5,
			message: 'Tecnologia a favor da sua empresa.',
		},
		{
			name: 'Tatiana Conti',
			image: 'Tatiana Conti.png',
			score: 5,
			message: 'Sempre nos atende no que precisamos.',
		},
		{
			name: 'carolina romao',
			image: 'carolina romao.png',
			score: 5,
			message: 'Muito boa',
		},
		{
			name: 'Douglas Gouveia',
			image: 'Douglas Gouveia.png',
			score: 5,
			message: 'Muito bom.',
		},
		{
			name: 'Romaoromao Romao',
			image: 'Romaoromao Romao.png',
			score: 5,
			message: 'Otimo',
		},
		{
			name: 'Ellba Ferreira',
			image: 'Ellba Ferreira.png',
			score: 5,
			message: 'Sempre tive um excelente atendimento... realmente é uma empresa seria..',
		},
	];

	return (
		<section className='flex w-full flex-col items-center bg-feedbackImageBg bg-cover bg-no-repeat py-10 xl:py-20'>
			<div className='flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]'>
				<h2 className='text-justify text-lg font-semibold text-white lg:text-left lg:text-3xl'>Quem usa nos recomenda</h2>
				<Carousel className='w-full' plugins={[Autoplay({ delay: 10000 })]}>
					<CarouselContent className=' '>
						{feedbacks.map((_, index) => (
							<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5'>
								<div className='flex h-80 flex-col justify-between rounded-3xl bg-white px-6 py-8'>
									<div className='flex flex-col'>
										<span className='text-4xl font-bold'>&#34;</span>
										<ReadMore className='text-justify text-[0.9rem] leading-6' text={_.message} amountOfWords={16} />
										<p className='text-justify'></p>
										<span className='w-full text-right text-4xl font-bold'>&#34;</span>
									</div>

									<div className='flex flex-col gap-2'>
										{/* from */}
										<div className='flex items-center gap-5'>
											{/* avatar */}
											<Image
												className='max-h-5 max-w-5'
												src={`/reviews/${_.image}`}
												key={`review-image-${index}`}
												width={40}
												height={40}
												// src={avatar}
												alt={`Imagem do perfil do usuário  ${_.name}`}
											/>
											{/* info */}
											<div className='flex flex-col'>
												<p className='text-[9px] font-semibold'>{_.name}</p>
												<div className='flex items-center gap-2'>
													<p className='text-[10px]'>{_.score}</p>
													<div className='h-[0.6rem] w-[2.8rem] bg-starGray'>
														<div style={{ backgroundImage: `url(${star.src})`, width: `${_.score * 20}%` }} className='h-full'></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					{/* <CarouselPrevious className='hidden lg:flex' />
					<CarouselNext className='hidden lg:flex' /> */}
				</Carousel>
				<ButtonExpert color={'orange'} label='Fale com um especialista' />
			</div>
		</section>
	);
}
