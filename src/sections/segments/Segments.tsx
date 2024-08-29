'use client';

import ButtonExpert from '@/components/button_expert';

export default function Segments() {
	const cardsInfo = [
		{
			title: 'Varejo',
			description: 'Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF.',
			image: 'bg-varejo',
		},
		{ title: 'Atacado e Distribuição', description: 'NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais.', image: 'bg-atacado' },
		{ title: 'Indústria e Serviço', description: 'Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica.', image: 'bg-industria' },
		{ title: 'Fiscal', description: 'Sped ICMS, IPI, Pis e Cofins e Bloco K completo.', image: 'bg-fiscal' },
	];
	return (
		<section className='flex w-full flex-col items-center bg-secondary py-10 text-white xl:py-20'>
			<div className='flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]'>
				<h1 className='text-justify text-lg font-semibold lg:text-left lg:text-3xl'>Segmentos Atendidos</h1>

				<div className='flex w-full grid-cols-2 grid-rows-2 flex-col gap-4 md:grid'>
					{cardsInfo.map((_, i) => (
						<div key={i} className={`flex w-full flex-col ${_.image} min-h-44 gap-3 rounded-3xl bg-cover bg-center bg-no-repeat p-5 md:min-h-48`}>
							<h2 className='font-semibold'>{_.title}</h2>
							<p className='font-light'>{_.description}</p>
						</div>
					))}
				</div>
				<ButtonExpert color={'white'} label='Fale com um especialista' />
			</div>
		</section>
	);
}
