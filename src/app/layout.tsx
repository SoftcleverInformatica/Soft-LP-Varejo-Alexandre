import './globals.css';
import type { Metadata } from 'next';

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
			className='dark:scrollbar-track-background-dark scroll-smooth scrollbar scrollbar-track-transparent scrollbar-thumb-primary scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-corner-rounded-full scrollbar-w-1 hover:scrollbar-track-[#f1f5f9]'>
			<body>{children}</body>
		</html>
	);
}
