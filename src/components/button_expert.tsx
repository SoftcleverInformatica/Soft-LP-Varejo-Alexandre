import Image from 'next/image';
import WhatsappIconWhite from '../../public/assets/whatsapp_white.svg';
import WhatsappIcon from '../../public/assets/whatsapp.svg';

interface props {
	className?: string;
	animation?: string;
	color?: string;
	label?: string;
}
export default function ButtonExpert({ className, animation, color = 'white', label = 'Fale com um  especialista' }: props) {
	return (
		<a
			className={`flex items-center justify-center gap-2 rounded-3xl px-2 py-2 hover:opacity-90 md:px-12 ${color === 'white' ? 'bg-white hover:bg-slate-500' : ''} ${color === 'orange' ? 'bg-orange-700 hover:bg-orange-600' : ''} ${color === 'blue' ? 'bg-primary' : ''} ${animation ? animation : ''} ${className} `}
			href='https://api.whatsapp.com/send?phone=5511992810253&text=Bom%20dia!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Sirius%20Shop'
			target='_blank'>
			<span className={`overflow-hidden text-ellipsis text-xs md:text-sm ${color == 'white' && 'font-semibold'} ${color == 'white' ? '' : 'text-white'} `}>{label}</span>
			<Image alt='WhatsappIcon' src={color == 'white' ? WhatsappIcon : WhatsappIconWhite} />
		</a>
	);
}
