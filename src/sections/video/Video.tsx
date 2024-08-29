import ButtonExpert from '@/components/button_expert';

export default function Video() {
	return (
		<section className='flex w-full flex-col items-center bg-primary py-10 text-white xl:py-20'>
			<div className='flex w-full flex-col gap-16 px-4 md:px-10 lg:max-w-5xl lg:gap-16 lg:px-24 xl:max-w-6xl 2xl:max-w-[90rem]'>
				<div className='flex h-full w-full flex-col justify-between gap-10 lg:flex-row'>
					<iframe
						className='h-64 w-full max-w-full rounded-lg lg:w-1/2'
						src='https://www.youtube.com/embed/Mg1crfLqPf0?si=YFuwYFQFy3oxeqTs&amp;controls=0'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen></iframe>
					<div className='flex w-full flex-col items-start justify-between gap-10 lg:w-1/2'>
						<h2 className='text-2xl font-semibold'>Conheça o Sírius S@T - Pré Venda</h2>
						<p className='text-justify text-lg'>Versão instalada no seu computador. Gestão total do seu comércio de forma simples e rápida para emissão de cupom fiscal e cupom não fiscal.</p>
						<ButtonExpert color={'orange'} label='Converse agora com um especialista' />
					</div>
				</div>

				<div className='flex h-full w-full flex-col justify-between gap-10 lg:flex-row-reverse'>
					<iframe className='h-64 w-full max-w-full rounded-lg lg:w-1/2' src='https://www.youtube.com/embed/tRzIs4gqI98?si=lSJmn-jWQbdRGi9x' referrerPolicy='strict-origin-when-cross-origin' allowFullScreen></iframe>
					<div className='flex w-full flex-col items-start justify-between gap-10 lg:w-1/2'>
						<h2 className='text-2xl font-semibold'>Conheça o Sírius PDV Web</h2>
						<p className='text-justify text-lg'>
							Versão online (internet) que pode ser utilizada no PC e no Celular. Pacote de entrada com os recursos essenciais para a gestão do seu negócio com emissão de cupom fiscal e cupom não fiscal.
						</p>
						<ButtonExpert color={'orange'} label='Converse agora com um especialista' />
					</div>
				</div>
			</div>
		</section>
	);
}
