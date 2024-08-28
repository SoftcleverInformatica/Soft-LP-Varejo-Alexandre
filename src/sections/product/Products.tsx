'use client';

import { useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import Image from 'next/image';
import Cardapio from 'root/public/assets/Produtos-SVG/cardapio.svg';
import Delivery from 'root/public/assets/Produtos-SVG/delivery.svg';
import Financeiro from 'root/public/assets/Produtos-SVG/Financeiro.svg';
import ForcaDeVendas from 'root/public/assets/Produtos-SVG/Forca-de-Vendas.svg';
import iFood from 'root/public/assets/Produtos-SVG/ifood.svg';
import Tray from 'root/public/assets/Produtos-SVG/logo_tray.svg';
import marketplace from 'root/public/assets/Produtos-SVG/marketplace.svg';
import mercadoLivre from 'root/public/assets/Produtos-SVG/mercado-livre.svg';
import NotaFiscalEletronica from 'root/public/assets/Produtos-SVG/Nota-Fiscal-Eletronica.svg';
import NotaFiscalServicos from 'root/public/assets/Produtos-SVG/Nota-Fiscal-Servico.svg';
import otica from 'root/public/assets/Produtos-SVG/otica.svg';
import PedidoVenda from 'root/public/assets/Produtos-SVG/Ped-Vendas.svg';
import pet from 'root/public/assets/Produtos-SVG/pet.svg';
import Producao from 'root/public/assets/Produtos-SVG/Producao.svg';
import webLojas from 'root/public/assets/Produtos-SVG/web-lojas.svg';
import ButtonExpert from '@/components/button_expert';

export default function Products() {
	const [selecionado, setSelecionado] = useState({ item: 0 });

	const cards: { image: any; label: string; description: string }[] = [
		{
			image: NotaFiscalEletronica,
			label: 'Sírius S@T/NFC-e - Emissor de cupom fiscal',
			description: 'Emissor de cupom fiscal homologado na SEFAZ com controle de estoque, caixa, financeiro e compras. Vendas através descrição ou código de barras. ',
		},
		{
			image: ForcaDeVendas,
			label: 'Sírius Pré-Venda',
			description: 'Emissor de pedido de venda (NÃO FISCAL) com controle de estoque, caixa, financeiro e compras. Vendas através descrição ou código de barras e integração com balança.',
		},
		{
			image: PedidoVenda,
			label: 'Sírius Comanda',
			description: 'Comandas para restaurantes, padarias, pizzarias, bares e entretenimento em geral. Abertura, fechamento e controle dos itens da comanda.',
		},
		{
			image: NotaFiscalServicos,
			label: 'Sírius Nota Fiscal de Serviço',
			description: 'Nota Fiscal de Serviço Eletrônica (NFS-e), com envio rápido e em lote para o sistema da prefeitura. Gerada a partir do pedido de venda e integrada com o financeiro.',
		},
		{
			image: Delivery,
			label: 'Sírius Delivery',
			description: 'Controle das entregas para o comércio em geral.',
		},
		{
			image: Financeiro,
			label: 'Sírius NFE',
			description: 'Nota Fiscal Eletrônica (NF-e) com envio e autorização junto a SEFAZ. Atribuição de CFOP, CST e cálculos automatizados. Permite a baixa do estoque e o envio dos títulos ao contas a receber.',
		},
		{
			image: Cardapio,
			label: 'Sírius Cardápio Digital',
			description: 'Cardápio digital para o Food Service com opção de delivery.',
		},
		{
			image: Producao,
			label: 'Sírius Integração IFood',
			description: 'Captura os pedidos do iFood, monta o pedido de venda e executa o despacho de forma rápida e fácil.',
		},
		{
			image: webLojas,
			label: 'Sírius WEB Lojas',
			description: 'Tenha o controle de uma ou mais lojas através da WEB. Permite o cadastro dos produtos e o ajuste dos saldos das lojas, além da conferência das vendas e dos valores do caixa.',
		},
		{
			image: otica,
			label: 'Sírius Óticas',
			description: 'Controle de lentes, armações, marcas e modelos e controle das ordens de serviços.',
		},
		{
			image: pet,
			label: 'Sírius Pet Shop',
			description: 'Controle de raça, tipo de pelagem, tutor e vacinação, além de agendamentos, atendimentos e muito mais.',
		},
		{
			image: marketplace,
			label: 'Sírius MarketPlace',
			description: 'Integração completa com marketplaces populares, permitindo a gestão da sua loja. Sincronize produtos, preços, e promoções para maximizar suas vendas online.',
		},
	];

	const item = (item: number) => {
		return (
			<div key={Math.random()} className=' p-6 opacity-0 animate-fadeIn  flex flex-col gap-10'>
				<h3>{cards[item].label}</h3>
				<h6>{cards[item].description}</h6>
				<Image className='h-24 w-full lg:h-72 lg:w-auto' alt={cards[item].label} src={cards[item].image} width={1000} height={1000} />
			</div>
		);
	};

	return (
		<section className='flex w-full flex-col items-center justify-center overflow-y-hidden py-5'>
			<div className='	w-full flex flex-col gap-6 pt-10 px-4 md:px-10 md:pt-20 lg:px-24 lg:pt-28 lg:gap-20 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[90rem]'>
				<h2 className='p-5 text-center text-2xl font-extrabold text-primary'>Conheça as soluções da Soft Clever para o seu comércio varejista!</h2>

				<div className='flex h-full flex-col items-center gap-5 rounded-lg bg-primary p-5 opacity-90 md:h-20 md:flex-row md:w-[30rem]  '>
					<p className='text-white'>Integrações com:</p>
					<Image src={iFood} alt='logo ifood' width={60} />
					<Image src={Tray} alt='logo Tray' width={60} />
					<Image src={mercadoLivre} alt='logo Mercado Livre' width={60} />
				</div>

				<div className='flex flex-col lg:flex-row justify-between lg:gap-10 border-2 rounded-[40px] '>
					<div className='w-full lg:w-1/2  '>
						<div className='p-6 flex gap-4 lg:gap-0 w-full overflow-x-auto lg:flex-col'>
							{cards.map((_, i) => (
								<div
									key={i}
									onClick={() => setSelecionado({ item: i })}
									className={`flex items-end lg:items-center justify-start rounded-3xl shrink-0 h-40 w-48 lg:justify-between lg:w-auto lg:h-auto lg:rounded-none  lg:border-b lg:border-0 p-6 lg:p-2 text-base font-semibold border-2 border-gray-400  ${selecionado.item === i ? 'text-primary' : ''} `}>
									<span>{_.label}</span> <ArrowRight className='hidden lg:block'></ArrowRight>
								</div>
							))}
						</div>
					</div>
					<div className='w-full lg:w-1/2 bg-secondary rounded-b-[40px] lg:rounded-r-[40px] text-white '>{item(selecionado.item)}</div>
				</div>
				<ButtonExpert color={'orange'} label='Quero decolar o meu negócio' animation='animate-pulse' />
			</div>
		</section>
	);
}
