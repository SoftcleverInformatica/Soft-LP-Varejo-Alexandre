import ButtonExpert from '@/components/button_expert';

export default function Video() {
	return (
		<section className='flex flex-col gap-10 bg-primary text-white px-10 py-14 items-center w-full'>
			<div className={`	w-full flex flex-col gap-6  px-4 md:px-10 lg:px-24 lg:gap-20 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[90rem]`}>
				<div className={`flex   h-full justify-between gap-10 w-full `}>
					<iframe
						className='max-w-full rounded-3xl w-1/2 h-64 '
						src='https://www.youtube.com/embed/Mg1crfLqPf0?si=YFuwYFQFy3oxeqTs&amp;controls=0'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen></iframe>
					<div className={`w-1/2  flex flex-col justify-between items-start`}>
						<h2 className='text-2xl font-semibold'>Conheça o Sírius S@T - Pré Venda</h2>
						<p className='text-lg text-justify'>Versão instalada no seu computador. Gestão total do seu comércio de forma simples e rápida para emissão de cupom fiscal e cupom não fiscal.</p>
						<ButtonExpert color={'orange'} label='Converse agora com um especialista' />
					</div>
				</div>

				<div className={`flex flex-row-reverse  h-full justify-between gap-10 w-full`}>
					<iframe className='max-w-full rounded-3xl w-1/2 h-64' src='https://www.youtube.com/embed/tRzIs4gqI98?si=lSJmn-jWQbdRGi9x' referrerPolicy='strict-origin-when-cross-origin' allowFullScreen></iframe>
					<div className={`w-1/2  flex flex-col justify-between items-start`}>
						<h2 className='text-2xl font-semibold'>Conheça o Sírius PDV Web</h2>
						<p className='text-lg text-justify'>
							Versão online (internet) que pode ser utilizada no PC e no Celular. Pacote de entrada com os recursos essenciais para a gestão do seu negócio com emissão de cupom fiscal e cupom não fiscal.
						</p>
						<ButtonExpert color={'orange'} label='Converse agora com um especialista' />
					</div>
				</div>
			</div>
		</section>
	);
}
