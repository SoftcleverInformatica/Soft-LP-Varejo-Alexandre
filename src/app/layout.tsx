import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sirius Varejo',
	description: 'Soft Clever',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='pt-br'
			className='scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-scHover scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-corner-rounded-full'>
			<body className={font.className}>
				<GoogleTagManager gtmId='GTM-N2XFZPPM' />
				{children}
			</body>
		</html>
	);
}
