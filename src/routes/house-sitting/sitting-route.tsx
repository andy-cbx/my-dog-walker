import enquireButton from '@/assets/enquire-button.png';import houseBg from '@/assets/house-bg.png';import houseSitting from '@/assets/house-sitting.png';import theBenefit from '@/assets/the-benefit.png';import theProcess from '@/assets/the-process.png';const SittingRoute = () => {	return (		<main className={'relative flex flex-col items-center bg-primary-blue'}>			<img src={houseBg} alt={''} className={'absolute w-[1440px]'} />			<div className={'relative z-10 h-fit w-[1440px]'}>				<div className={'z-[-1]'}></div>				<section className={'relative z-10 w-full pt-20'}>					<img src={houseSitting} alt={''} />				</section>				<section className={'flex w-full justify-center pt-20'}>					<img src={theBenefit} alt={''} />				</section>				<section className={'w-full'}>					<img src={theProcess} alt={''} />				</section>			</div>		</main>	);};export default SittingRoute;