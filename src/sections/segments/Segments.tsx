'use client';

import ButtonExpert from '@/components/button_expert';

export default function Segments() {
	return (
		<section className='w-full flex flex-col items-center py-16 xl:py-20 bg-primary'>
			<div className='w-full flex flex-col gap-16  px-4 md:px-10  lg:px-24  lg:gap-16 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[90rem] '>
				<h1 className='text-white font-bold text-2xl '>Segmentos Atendidos</h1>

				<div className=' w-full gap-[1.5rem] md:w-full lg:gap-0 lg:w-full flex flex-col'>
					<div
						className='gap-[1.5rem] 
                md:flex-row
                lg:gap-0 lg:py-0  lg:flex-row 
                flex flex-col
                justify-between items-center'>
						<div
							className='varejo h-[13.8rem] w-full bg-cover bg-center bg-no-repeat  p-5 gap-3 rounded-lg  
                        md:w-full
                        lg:m-2 lg:w-full lg:h-[10.3rem]  
                        flex flex-col'>
							<h2 className='text-white font-semibold'>Varejo</h2>
							<p className='text-white font-light'>
								Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF.
							</p>
						</div>

						<div
							className='atacado h-[13.8rem] w-full bg-cover bg-no-repeat  p-5 gap-3  rounded-lg 
                        md:w-full
                        lg:m-2 lg:w-full  lg:h-[10.3rem]
                        flex flex-col'>
							<h2 className='text-white font-semibold'>Atacado e Distribuição</h2>
							<p className='text-white font-light'>NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais.</p>
						</div>
					</div>
					<div
						className='gap-[1.5rem] 
						md:flex-row
						lg:gap-0 lg:py-0  lg:flex-row 
						flex flex-col
						justify-between items-center'>
						<div className='industria h-[13.8rem] md:w-full lg:h-[10.3rem] w-full bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-lg lg:m-2'>
							<h2 className='text-white font-semibold'>Indústria e Serviço</h2>
							<p className='text-white font-light'>Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica.</p>
						</div>
						<div className='fiscal h-[13.8rem]  md:w-full lg:h-[10.3rem] w-full bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-lg lg:m-2'>
							<h2 className='text-white font-semibold'>Fiscal</h2>
							<p className='text-white font-light'>Sped ICMS, IPI, Pis e Cofins e Bloco K completo.</p>
						</div>
					</div>
				</div>

				<div className='w-full flex flex-col justify-center items-center md:mt-[2rem]'>
					<ButtonExpert color={'orange'} label='Fale com um especialista' />
				</div>
			</div>
		</section>
	);
}
