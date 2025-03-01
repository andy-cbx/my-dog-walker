import { HomeEnquire } from '@/routes/home/components/enquire';import { HomeHero } from '@/routes/home/components/hero';import { HomeOurDoggies } from '@/routes/home/components/our-doggies';import { HomeOurWalks } from '@/routes/home/components/our-walks/our-walks';import { HomeScrollingImages } from '@/routes/home/components/scrolling-images';const HomeRoute = () => {	return (		<section className={'max-w-[100vw] overflow-hidden bg-primary-blue'}>			<div				className={'flex w-full flex-col items-center bg-primary-blue'}			>				{/* Hello there */}				<HomeHero />				<div					className={						'relative z-[2] flex w-full flex-col pt-8 md:w-[1440px] md:pt-32'					}				>					<HomeOurWalks />				</div>				<HomeScrollingImages />				<HomeOurDoggies />				<div className={'md:w-[1440px]'}>					<HomeEnquire />				</div>			</div>		</section>	);};export default HomeRoute;