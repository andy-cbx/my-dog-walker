import * as React from 'react';type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {	className?: string;};export const Input = React.forwardRef<HTMLInputElement, InputProps>(({	name,	value,	placeholder,	onChange,	className,}, ref) => {	return (		<div className={'flex w-full flex-col'}>			<h3				className={					'pb-1 pl-2 font-secondary text-[34px] leading-[38px]'				}			>				{placeholder}:			</h3>			<input				ref={ref}				className={`flex h-[58px] w-full rounded-[75px] border-[3px] border-input bg-input-bg pl-[20px] font-primary text-primary-red placeholder:font-light focus:border-primary-red`}				name={name}			/>		</div>	);});