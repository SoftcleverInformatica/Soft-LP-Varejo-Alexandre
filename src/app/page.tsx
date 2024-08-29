'use client';

import { useEffect, useRef } from 'react';
import AboutUs from '../sections/about-us/AboutUs';
import Client from '../sections/client/Client';
import Differential from '../sections/differential/Differential';
import Feedback from '../sections/feedback/Feedback';
import Footer from '../sections/footer/Footer';
import Header from '../sections/header/Header';
import Price from '../sections/price/Price';
import Products from '../sections/product/Products';
import Questions from '../sections/questions/Questions';
import Segments from '../sections/segments/Segments';
import Video from '../sections/video/Video';

export default function Home() {
	const sections = [
		{ element: <Header />, read: false },
		{ element: <Video />, read: false },
		{ element: <Products />, read: false },
		{ element: <Differential />, read: false },
		{ element: <Price />, read: false },
		{ element: <Segments />, read: false },
		{ element: <Feedback />, read: false },
		{ element: <Questions />, read: false },
		{ element: <AboutUs />, read: false },
		{ element: <Client />, read: false },
		{ element: <Footer />, read: false },
	];

	const sectionRefs = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log('ENTREI NA SEÇÂO ', entry.target.id);
					}
				});
			},
			{ threshold: 0.1 },
		);

		sectionRefs.current.forEach((ref) => {
			if (ref) {
				observer.observe(ref);
			}
		});

		return () => {
			sectionRefs.current.forEach((ref) => {
				if (ref) {
					observer.unobserve(ref);
				}
			});
		};
	}, []);

	return (
		<main className='flex flex-col'>
			{sections.map((section, index) => (
				<div key={`${index}`} id={`${index}`} ref={(el) => (sectionRefs.current[index] = el as any)}>
					{section.element}
				</div>
			))}
		</main>
	);
}
