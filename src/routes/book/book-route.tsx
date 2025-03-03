import React from 'react';import stack04 from '@/assets/about/about-stack-01.png';import stack05 from '@/assets/about/about-stack-02.png';import stack06 from '@/assets/book/stack-01.png';import stack02 from '@/assets/global/home-ticker (24).png';import stack03 from '@/assets/global/home-ticker (25).png';import stack01 from '@/assets/global/home-ticker (8).png';import { Button } from '@/components/ui/button';import { Input } from '@/components/ui/input/input';import { TextArea } from '@/components/ui/input/text-area';const SubHeading = ({ label }: { label: string }) => {	return <h2 className={'px-2 font-primary text-5xl'}>{label}:</h2>;};const InfoSection = ({	label,	children,}: {	label: string;	children: React.ReactNode;}) => {	return (		<div className={'flex w-full flex-col gap-6'}>			<SubHeading label={label} />			{children}		</div>	);};const BookRoute = () => {	return (		<main className={'flex w-full justify-center bg-primary-blue md:pt-48'}>			<section				className={					'relative z-[2] flex w-[1440px] flex-col gap-12 px-16 py-12 text-primary-red'				}			>				<div className={'flex'}>					<div className={'flex w-3/4 flex-col gap-10'}>						<div className={'flex flex-col gap-4 px-2'}>							<h1 className={'font-primary text-7xl '}>								Adventure Time?							</h1>							<p								className={									'font-secondary text-[34px] leading-[38px]'								}							>								Before we set up your free meet-and-greet, we’d								love to learn a little more about you and your								pup. This helps us get to know your needs and								make sure we’re giving you both the best								possible experience!							</p>						</div>						<InfoSection label={'Your info'}>							<div className={'flex w-full gap-6'}>								<Input									name={''}									className={''}									placeholder={'Name'}								/>								<Input									name={''}									className={''}									placeholder={'Email'}								/>							</div>							<div className={'flex w-full gap-6'}>								<Input									name={''}									className={''}									placeholder={'Mobile'}								/>								<Input									name={''}									className={''}									placeholder={'Location (Suburb)'}								/>							</div>						</InfoSection>						<InfoSection label={"Your Dogo's info"}>							<div className={'flex w-full gap-6'}>								<Input									name={''}									className={''}									placeholder={'Name'}								/>								<Input									name={''}									className={''}									placeholder={'Breed'}								/>							</div>							<div className={'flex w-full gap-6'}>								<Input									name={''}									className={''}									placeholder={'Age'}								/>								<Input									name={''}									className={''}									placeholder={'Is he/she trained'}								/>							</div>							<div className={'flex w-full flex-col gap-6'}>								<h3									className={										'pb-1 pl-2 font-secondary text-[34px] leading-[38px]'									}								>									Any behavioural issues?								</h3>								<div className={'flex items-center gap-4'}>									<input										className={`flex h-[58px] w-[240px] rounded-[75px] border-[3px] border-input bg-input-bg pl-[20px] font-primary text-primary-red placeholder:font-light focus:border-primary-red`}										name={''}										value={''}										onChange={() => {}}									/>									<h3										className={											'pb-1 pl-2 font-secondary text-[34px] leading-[38px]'										}									>										If yes, please give examples:									</h3>								</div>								<textarea									className={`flex h-[152px] w-full rounded-[50px] border-[3px] border-input bg-input-bg pl-[20px] pt-[20px] font-primary text-primary-red placeholder:font-light focus:border-primary-red`}									name={''}									value={''}									onChange={undefined}								/>							</div>						</InfoSection>						<InfoSection label={'Enquiry Details'}>							<div className={'flex gap-6'}>								<Input									name={''}									className={''}									placeholder={"We're interested in"}								/>								<Input									name={''}									className={''}									placeholder={'Average walks p/w'}								/>							</div>						</InfoSection>					</div>					<div						className={							'relative flex h-full flex-1 flex-col items-center pt-12'						}					>						<div className={'absolute h-full '}>							<div								className={									'relative z-[1] aspect-square h-[244px] w-[227px] rotate-[-4deg] overflow-hidden rounded-[40px] border-4 border-primary-red'								}							>								<img									src={stack05}									alt={''}									className={										'size-full scale-110 object-cover object-[50%_60%]'									}								/>							</div>							<div								className={									'absolute top-0 z-[2] ml-8 mt-52 h-[248px] w-[218px] rotate-[9.31deg] overflow-hidden rounded-[40px] border-4 border-primary-red'								}							>								<img									src={stack04}									alt={''}									className={										'size-full scale-[1.01] object-cover'									}								/>							</div>							<div								className={									'absolute top-0 mt-[26rem] h-[258px] w-[256px] rotate-[-4deg] overflow-hidden rounded-[40px] border-4 border-primary-red'								}							>								<img									src={stack06}									alt={''}									className={										'size-full scale-[1.01] object-cover'									}								/>							</div>							<div								className={									'absolute bottom-0 z-[2] mb-[33rem] h-[258px] w-[224px] rotate-[6.71deg] overflow-hidden rounded-[40px] border-4 border-primary-red'								}							>								<img									src={stack02}									alt={''}									className={'size-full object-cover'}								/>							</div>							<div								className={									'absolute bottom-0 z-[1] mb-[16.5rem] aspect-square h-[272px] w-[248px] rotate-[-10deg] overflow-hidden rounded-[40px] border-4 border-primary-red'								}							>								<img									src={stack03}									alt={''}									className={										'size-full object-cover object-[50%_60%]'									}								/>							</div>							<div								className={									'absolute bottom-0 mb-8 h-[306px] w-[258px]  rotate-[4.64deg]  overflow-hidden rounded-[40px] border-4 border-primary-red'								}							>								<img									src={stack01}									alt={''}									className={										'size-full scale-[1.01] object-cover object-[50%_60%]'									}								/>							</div>						</div>					</div>				</div>				<div className={'-mt-6'}>					<TextArea						name={''}						className={''}						placeholder={'Additional info'}					/>				</div>				<div className={'flex justify-center'}>					<Button						label={'SEND'}						className={							'w-[500px] rounded-[24px] border-2 border-primary-yellow bg-primary-red pb-0 font-variant font-bold text-primary-yellow shadow-xl'						}					/>				</div>			</section>		</main>	);};export default BookRoute;