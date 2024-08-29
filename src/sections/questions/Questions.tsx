'use client';

import { useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ButtonExpert from '@/components/button_expert';

export default function Questions() {
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

	const QuestionsResponse: { Question: string; Response: string }[] = [
		{
			Question: 'Em quais tipos de estabelecimentos comerciais o sistema pode ser utilizado?',
			Response:
				'As soluções de vendas fiscais e não fiscais da Soft Clever voltadas para o varejo podem ser utilizadas em qualquer tipo negócio, tais como: bar, restaurante, lanchonete, loja, pizzaria, autopeça, mercado, mercadinho, empório, pet shop, ótica, lojas em geral, farmácia, posto de gasolina, adega, entre outros. É importante observar que dispomos de módulos específicos para certos segmentos, como no caso do setor de alimentação.',
		},
		{
			Question: 'Qual a diferença entre SAT e NFC-e ?',
			Response:
				'A diferença está no método de transmissão. Os dois métodos são utilizados para emissão de nota fiscal ao consumidor (cupom fiscal eletrônico), mas em alguns estados (como o de São Paulo), existe a obrigatoriedade do equipamento SAT Fiscal, tanto para empresas abertas quanto para a abertura de novas empresas. O projeto SAT foi desenvolvido com o objetivo de disponibilizar um método de contingência (geração dos documentos fiscais sem interrupção) em caso de falta da internet, uma vez que o equipamento SAT armazena os cupons fiscais por dez dias os transmite assim que o serviço de internet é reestabelecido, e, no caso da NFC-e, o serviço fica TOTALMENTE interrompido quando da falta do serviço de internet. O Sírius SAT Fiscal está preparado para operar em ambos os métodos, e, inclusive, concomitantemente.',
		},
		{
			Question: 'Todas as versões do sistema finalizam a venda emitindo um cupom fiscal?',
			Response:
				'O Sírius SAT Fiscal tem por objetivo emitir um documento fiscal ao final de cada venda, logo, todas as vendas efetuadas por ele serão enviadas a Secretaria da Fazenda e tributadas. Já o SíriusPré Venda emite um pedido de venda ao final (sem valor fiscal) e todas as vendas efetuadas não serão tributadas. As duas ferramentas podem trabalhar separadamente ou em conjunto. Nos casos onde a empresa contrata as duas ferramentas é possível processar todas as vendas no SíriusPré Venda (no balcão de vendas ou em pontos de venda espalhados pela loja) e fazer a captura da prévenda no caixa através do Sírius SAT Fiscal para a transformação da pré venda em um documento fiscal. Essa captura não é automática e é facultativa ao operador do caixa.',
		},
		{
			Question: 'Eu devo utilizar o sistema instalado no meu computador ou na nuvem (internet)?',
			Response:
				'As nossas ferramentas estão preparadas para trabalhar nos dois ambientes, mas quando se trata de SAT Fiscal, a única maneira de utilização é diretamente em um computador local. O equipamento SAT Fiscal exige a instalação e comunicação através de uma saída USB. Nos casos onde a empresa opta pelo uso exclusivo da NFC-e ou de outras ferramentas que não o SAT Fiscal, o uso pode ser feito através da nuvem (internet).',
		},
		{
			Question: 'O que é necessário para o sistema funcionar em rede?',
			Response:
				'Para utilizar o sistema em rede, ou seja, em mais de um computador, é necessário que um técnico de rede seja contratado, uma vez que será necessário executar a passagem de cabeamento específico a fim de que os computadores possam enxergar-se. Nos casos onde a empresa utiliza um número grande de terminais de vendas, pode ser necessária a contratação de um servidor. É importante observar que não é adequado o padrão de redes WiFi para esse fim, uma vez que os bancos de dados de forma geral costumam corromper devido a instabilidade deste tipo de sinal. Nos casos onde o sistema roda a partir da nossanuvem (internet), não há a necessidade de qualquer tipo de preparo neste sentido, visto que o acesso é feito diretamente através da internet, e, portanto, basta que o computador esteja conectado através de um cabo ou através do sinal de WiFi.',
		},
		{
			Question: 'Os módulos auxiliares do Sírius podem gerar documentos fiscais?',
			Response:
				'Ferramentas auxiliares como pré vendas, delivery, comandas, e afins não geram documentos fiscais, elas geram somente os pedidos de vendas. Elas podem ser contratadas separadamente do nosso módulo fiscal e servirão para o controle de vendas do seu negócio, mas não gerarão qualquer documento fiscal. Para a geração do documento fiscal será necessário contratar o Sírius SAT Fiscal e integrá-lo a ferramenta já contratada anteriormente. Esse procedimento é simples e é realizado pelo nosso suporte remotamente.',
		},
		{
			Question: 'Como farei para instalar, aprender a usar o sistema e tirar dúvidas acerca do se funcionamento?',
			Response:
				'A Soft Clever oferece instalação, treinamento e suporte remoto gratuito HUMANIZADO (sem uso de robôs). O atendimento é feito via telefone e conexão remota (tudo simultaneamente, ou seja, você ouve a voz do especialista e enxerga com ele tudo o que está sendo feito na sua tela). A partir do momento que você finaliza a contratação do pacote desejado junto ao nosso departamento comercial, um especialista entra em contato contigo a fim de agendar a instalação do sistema. A instalação é remota, ou seja, você permite o acesso do nosso especialista ao seu computador e em seguida todo o processo de instalação é realizado. Ao final da instalação é feito o agendamento do primeiro treinamento, que também é remoto. Pronto, você já está apto a fazer o uso das nossas ferramentas, mas não se preocupe, caso você tenha qualquer dúvida na operação do sistema, basta ligar na nossa central de atendimento que você será atendido por um de nossos especialistas.',
		},
	];
	return (
		<section className='flex w-full flex-col items-center bg-primary py-10 xl:py-20'>
			<div className='flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]'>
				<div className='flex w-full flex-col items-center justify-between gap-4 sm:flex-row'>
					<div className='w-full lg:w-4/12'>
						<h2 className='mb-4 text-3xl font-bold text-white lg:text-5xl lg:leading-[3.5rem]'>Perguntas Frequentes</h2>
						<ButtonExpert color={'orange'} label='Fale com um especialista' className='hidden sm:flex' />
					</div>

					<div className='w-full lg:w-7/12'>
						<Accordion className='gap-3 rounded-3xl bg-white p-4' type='single' collapsible>
							{QuestionsResponse.map((item, index) => {
								return (
									<AccordionItem className='mb-3 rounded-2xl bg-primary' value={index.toString()} key={index}>
										<AccordionTrigger className='gap-2 px-3 text-left text-lg font-semibold text-white'>{item.Question}</AccordionTrigger>
										<AccordionContent className='px-4 text-justify text-base font-normal text-white'>{item.Response}</AccordionContent>
									</AccordionItem>
								);
							})}
						</Accordion>
					</div>
				</div>
				<ButtonExpert color={'orange'} label='Fale com um especialista' className='sm:hidden' />
			</div>
		</section>
	);
}
