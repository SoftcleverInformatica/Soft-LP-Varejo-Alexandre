'use client';

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
	return (
		<main className='flex flex-col text-muted font-secondary '>
			<Header />
			<Video />
			<Products />
			<Differential />
			<Price />
			<Segments />
			<Feedback />
			<Questions />
			<AboutUs />
			<Client />
			<Footer />
		</main>
	);
}
