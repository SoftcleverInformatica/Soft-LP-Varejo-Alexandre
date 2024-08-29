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
			<div key={Math.random()} className='animate-fadeIn p-6 opacity-0'>
				<h3>{exibirDetalhes[0].funcionalidades[item].titulo}</h3>
				<h6>{exibirDetalhes[0].funcionalidades[item].descricao}</h6>
				<Image alt='' src={'#'} width={1000} height={1000} className='h-10 w-10' />
				{/* <Image alt='' src={exibirDetalhes[0].funcionalidades[item].imagem} width={1000} height={1000} className='h-10 w-10' /> */}
			</div>
		);
	};

	useEffect(() => {}, []);

	return (
		<section className='flex w-full flex-col items-center' id='funcionalidades'>
			<div className='flex w-full flex-col gap-6 px-4 pt-10 md:px-10 md:pt-20 lg:max-w-5xl lg:gap-20 lg:px-24 lg:pt-28 xl:max-w-6xl 2xl:max-w-[90rem]'>
				<h2 className='font-main text-center text-3xl font-extrabold leading-tight tracking-wide lg:text-5xl'>Suas necessidades em um só lugar</h2>
				<div className='flex flex-col justify-between gap-10 rounded-[40px] border-2 lg:flex-row'>
					<div className='w-1/2'>
						<Accordion className='flex h-full w-full flex-col gap-4 rounded-l-[40px] bg-white p-6' type='single' collapsible defaultValue='item-0'>
							{recursos.map((recurso, i) => (
								<AccordionItem key={i} value={`item-${i}' className='border-0`}>
									<AccordionTrigger className='rounded-xl border-2 p-1 px-3 text-base font-bold hover:no-underline' onClick={() => setSelecionado({ modulo: recurso.modulo, item: 0 })}>
										<span className={`text-base font-bold ${recurso.modulo === selecionado.modulo ? '' : ''}`}>{recurso.modulo}</span>
									</AccordionTrigger>
									{recurso.funcionalidades.map((_2, j) => (
										<AccordionContent key={j} className={`px-6 py-2 text-base font-semibold ${selecionado.item === j ? '' : ''} `}>
											<a onClick={() => setSelecionado({ modulo: recurso.modulo, item: j })} className='flex items-center justify-between'>
												<span>{_2.titulo}</span> <ArrowRight></ArrowRight>
											</a>
										</AccordionContent>
									))}
								</AccordionItem>
							))}
						</Accordion>
					</div>
					<div className='w-1/2 rounded-r-[40px] bg-primary text-white'>{item(selecionado.modulo, selecionado.item)}</div>
				</div>
			</div>
		</section>
	);
}
