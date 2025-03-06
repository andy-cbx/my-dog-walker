import { NavLink } from 'react-router';
import { paths } from '@/config/paths';
import { useRef } from 'react';

export const EnquireButton = () => {
  return (
    <NavLink
      to={paths.book.getHref()}
			className={
			  'relative z-10 flex w-fit items-center justify-center '
			}
		>

				<div
					id={'enq-btn'}
					className={
						'flex size-full items-center justify-center rounded-[50px] border-4 border-primary-red bg-primary-yellow drop-shadow-2xl'
					}
				>
					<h1
						className={
							'font-variant text-3xl font-bold text-primary-red'
						}
					>
						ENQUIRE / BOOK NOW
					</h1>
				</div>
		</NavLink>
  );
}
