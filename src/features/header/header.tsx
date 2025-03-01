import { NavLink, useLocation } from 'react-router';import logo from '@/assets/logo-new.svg';import { Button } from '@/components/ui/button';import { Link } from '@/components/ui/link';import { paths } from '@/config/paths';type NavigationItem = {	name: string;	to: string;};export const Header = () => {	return (		<header className={'relative z-10 w-full'}>			<div className={'fixed top-0 w-full max-w-[100vw] md:relative '}>				<div					className={						'flex h-16 w-full items-center justify-center border-b-2 border-b-primary-red bg-banner'					}				>					<h1						className={							'text-center font-primary text-3xl text-primary-yellow'						}					>						Refer a friend and get 5 free walks!					</h1>				</div>				<div					className={						'z-10 hidden h-32 w-full items-center justify-center gap-16 border-b-2 border-b-primary-red bg-primary-blue md:flex'					}				>					<NavLink to={paths.about.getHref()}>						<Button							label={'ABOUT US'}							className={'text-primary-red'}						/>					</NavLink>					<NavLink to={paths.blog.getHref()}>						<Button label={'BLOG'} className={'text-primary-red'} />					</NavLink>					<NavLink to={paths.home.getHref()}>						<img							src={logo}							alt={'logo'}							className={'text-primary-red'}						/>					</NavLink>					<NavLink to={paths.sitting.getHref()}>						<Button							label={'HOUSE SITTING'}							className={'text-primary-red'}						/>					</NavLink>					<NavLink to={paths.home.getHref()}>						<Button label={'SHOP'} className={'text-primary-red'} />					</NavLink>				</div>			</div>		</header>	);};