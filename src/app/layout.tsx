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
			className=' scrollbar-corner-rounded-full scroll-smooth scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-1 scrollbar scrollbar-track-transparent dark:scrollbar-track-background-dark scrollbar-thumb-primary hover:scrollbar-track-[#f1f5f9]'>
			<body>{children}</body>
		</html>
	);
}
