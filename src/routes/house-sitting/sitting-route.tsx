import React from 'react';import { NavLink } from 'react-router';import bones from '@/assets/global/bg-bones.png';import house from '@/assets/sitting/house.png';import PawsLeft from '@/assets/sitting/paws-left.svg?react';import PawsRight from '@/assets/sitting/paws-right.svg?react';import photo01 from '@/assets/sitting/sitting (1).png';import photo02 from '@/assets/sitting/sitting (2).png';import photo03 from '@/assets/sitting/sitting (3).png';import photo04 from '@/assets/sitting/sitting (4).png';import photo05 from '@/assets/sitting/sitting (5).png';import photo06 from '@/assets/sitting/sitting (6).png';import photo07 from '@/assets/sitting/sitting (7).png';import { Button } from '@/components/ui/button';import { Card } from '@/components/ui/card';import { EnquireButton } from '@/routes/about/about-route';const PhotoOverlay = () => {	return (		<div			className={				'absolute top-0  mt-12 flex h-[1063px] w-full justify-end pr-12'			}		>			<div className={'relative z-[3] w-[605.5px]'}>				<div					className={						'absolute ml-4 size-[288px] overflow-hidden rounded-full border-4 border-white shadow-2xl'					}				>					<img						src={photo01}						alt={''}						className={' scale-110 rounded-full'}					/>				</div>				<div					className={						'absolute right-0 size-[152px] overflow-hidden rounded-full border-4 border-white shadow-2xl'					}				>					<img						src={photo02}						alt={''}						className={' scale-110 rounded-full'}					/>				</div>				<div					className={						'absolute bottom-52 right-5 size-[127px] overflow-hidden rounded-full border-4 border-white shadow-2xl'					}				>					<img						src={photo04}						alt={''}						className={' scale-[1.15] rounded-full'}					/>				</div>				<div					className={						'absolute bottom-96 right-12 size-[136px] overflow-hidden rounded-full border-4 border-white shadow-2xl'					}				>					<img						src={photo05}						alt={''}						className={' scale-[1.15] rounded-full'}					/>				</div>				<div					className={						'absolute bottom-[25rem] left-12 size-[202px] overflow-hidden rounded-full border-4 border-white shadow-2xl'					}				>					<img						src={photo06}						alt={''}						className={'scale-[1.15] rounded-full'}					/>				</div>				<div					className={						'absolute bottom-52 left-52 size-[182px] overflow-hidden rounded-full border-4 border-white shadow-2xl'					}				>					<img						src={photo07}						alt={''}						className={'scale-[1.15] rounded-full'}					/>				</div>				<div					className={						'absolute bottom-1 right-0 size-[144px] overflow-hidden rounded-full border-4 border-white shadow-2xl'					}				>					<img						src={photo03}						alt={''}						className={' scale-110 rounded-full'}					/>				</div>			</div>			<div				className={'absolute bottom-44 right-[28rem] z-[-1] w-[165px]'}			>				<img src={bones} alt={''} className={''} />			</div>		</div>	);};const SittingRoute = () => {	return (		<main className={'relative flex flex-col items-center bg-primary-blue'}>			<div				className={					'relative z-[2] flex flex-col py-16 md:w-[1440px] md:gap-20'				}			>				<PhotoOverlay />				<section					className={'relative flex h-[739px] flex-row gap-16 px-28'}				>					<div className={'flex-1'}>						<Card							className={'h-[739px] w-[707px] py-12 pl-16 pr-40'}						>							<h1								className={									'text-left font-primary text-7xl font-bold'								}							>								House Sitting							</h1>							<p className={'pt-4 text-left text-4xl '}>								Leaving town doesn’t have to mean disrupting								your pup’s routine. They get to stay in the								comfort of their own home while receiving the								love, care, and attention they deserve. <br />								No stress, no unfamiliar surroundings, just								their favourite cozy spots, and daily routines.							</p>							<p className={'pt-4 text-left text-4xl'}>								Mireya and partner Mark have extensive house &								pet sitting experience across Sydney’s Eastern								Suburbs.							</p>						</Card>					</div>					<div						className={							'relative flex size-full flex-1 flex-col items-center justify-center'						}					>						<img							src={house}							alt={''}							className={'relative z-[2] w-full'}						/>						<PawsRight							className={								'absolute bottom-0 right-0 z-0 -mr-3 mb-[-22rem]'							}						/>					</div>				</section>				<section					className={						'relative flex w-full flex-row justify-end pl-28 pr-52'					}				>					<Card						className={							'relative z-[8] h-[348px] w-[814px] px-20 py-8'						}					>						<h1							className={								'text-left font-primary text-7xl font-bold'							}						>							The Benefit						</h1>						<p className={'pt-4 text-left text-4xl '}>							With your pup, home & plants all being looked after,							you get to enjoy a guilt & worry free holiday. Your							dog will also join our daily walking groups							completely FREE!						</p>					</Card>					<PawsLeft						className={							'absolute bottom-0 left-0 z-[-1] -mb-40 ml-44'						}					/>				</section>				<section className={'flex w-full flex-row px-28 pt-12'}>					<Card className={'h-[629px] w-[750px] py-12 pl-16 pr-44'}>						<h1							className={								'text-left font-primary text-7xl font-bold'							}						>							The Process						</h1>						<p className={'pt-4 text-left text-4xl '}>							We’ll confirm availability, next we’ll find an							appropriate time to meet you, your pup & your house							for a vibe check. If everything is good & happy,							we’ll create a whatsapp group to share pictures and							communicate through in the lead up & whilst you’re							on you trip. Ensuring you have a hastle free holiday							enjoying more and worrying less.						</p>					</Card>				</section>				<div					className={						'relative z-10 flex w-full items-center justify-center'					}				>					<EnquireButton />				</div>			</div>		</main>	);};export default SittingRoute;