'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Funcionalidades() {
	const recursos = [
		{
			modulo: 'Vendas',
			funcionalidades: [
				{ titulo: '(PDV)', descricao: 'Contas a pagar e a receber', imagem: 'Screenshot do módulo de gestão financeira.' },
				{ titulo: 'Hub de Integração', descricao: 'Estoque em tempo real', imagem: 'Screenshot do módulo de gestão de estoque.' },
				{ titulo: 'Vendas Realizadas', descricao: 'Do pedido até a entrega.', imagem: 'Screenshot do módulo de gestão de vendas.' },
			],
		},
		{
			modulo: 'Fiscal',
			funcionalidades: [
				{ titulo: 'Ponto de Venda (PDV)', descricao: 'Contas a pagar e a receber', imagem: 'Screenshot do módulo de gestão financeira.' },
				{ titulo: 'Hub de Integração', descricao: 'Estoque em tempo real', imagem: 'Screenshot do módulo de gestão de estoque.' },
				{ titulo: 'Vendas Realizadas', descricao: 'Do pedido até a entrega.', imagem: 'Screenshot do módulo de gestão de vendas.' },
			],
		},
		{
			modulo: 'Confecção',
			funcionalidades: [
				{ titulo: 'Ponto de Venda (PDV)', descricao: 'Contas a pagar e a receber', imagem: 'Screenshot do módulo de gestão financeira.' },
				{ titulo: 'Hub de Integração', descricao: 'Estoque em tempo real', imagem: 'Screenshot do módulo de gestão de estoque.' },
				{ titulo: 'Vendas Realizadas', descricao: 'Do pedido até a entrega.', imagem: 'Screenshot do módulo de gestão de vendas.' },
			],
		},
	];

	const [selecionado, setSelecionado] = useState<{ modulo: string; item: number }>({ modulo: recursos[0].modulo, item: 0 });

	const item = (modulo: string, item: number) => {
		let exibirDetalhes = recursos.filter((item: any) => item.modulo === modulo);

		return (
			<div key={Math.random()} className=' p-6 opacity-0 animate-fadeIn '>
				<h3>{exibirDetalhes[0].funcionalidades[item].titulo}</h3>
				<h6>{exibirDetalhes[0].funcionalidades[item].descricao}</h6>
				<Image alt='' src={'#'} width={1000} height={1000} className='h-10 w-10' />
				{/* <Image alt='' src={exibirDetalhes[0].funcionalidades[item].imagem} width={1000} height={1000} className='h-10 w-10' /> */}
			</div>
		);
	};

	useEffect(() => {}, []);

	return (
		<section className='w-full flex flex-col items-center ' id='funcionalidades'>
			<div className='	w-full flex flex-col gap-6 pt-10 px-4 md:px-10 md:pt-20 lg:px-24 lg:pt-28 lg:gap-20 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[90rem]'>
				<h2 className='text-3xl lg:text-5xl text-center font-extrabold leading-tight tracking-wide font-main'>Suas necessidades em um só lugar</h2>
				<div className='flex flex-col lg:flex-row justify-between gap-10 border-2 rounded-[40px] '>
					<div className='w-1/2 '>
						<Accordion className='flex flex-col gap-4 p-6 bg-white h-full w-full rounded-l-[40px]' type='single' collapsible defaultValue='item-0'>
							{recursos.map((recurso, i) => (
								<AccordionItem key={i} value={`item-${i}' className='border-0`}>
									<AccordionTrigger className='text-base font-bold border-2 hover:no-underline rounded-xl p-1 px-3 ' onClick={() => setSelecionado({ modulo: recurso.modulo, item: 0 })}>
										<span className={`text-base font-bold ${recurso.modulo === selecionado.modulo ? 'text-primary' : ''}`}>{recurso.modulo}</span>
									</AccordionTrigger>
									{recurso.funcionalidades.map((_2, j) => (
										<AccordionContent key={j} className={`px-6 py-2 text-base font-semibold  ${selecionado.item === j ? 'text-primary' : ''} `}>
											<a onClick={() => setSelecionado({ modulo: recurso.modulo, item: j })} className='flex justify-between items-center'>
												<span>{_2.titulo}</span> <ArrowRight></ArrowRight>
											</a>
										</AccordionContent>
									))}
								</AccordionItem>
							))}
						</Accordion>
					</div>
					<div className='w-1/2 bg-primary rounded-r-[40px] text-white '>{item(selecionado.modulo, selecionado.item)}</div>
				</div>
			</div>
		</section>
	);
}
