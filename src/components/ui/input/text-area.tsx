import * as React from 'react';type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({	name,	value,	placeholder,	onChange,}, ref) => {	return (		<div className={'flex w-full flex-col'}>			<h3				className={					'pb-1 pl-2 font-secondary text-xl md:text-[34px] md:leading-[38px]'				}			>				{placeholder}:			</h3>			<textarea				ref={ref}				className={`flex h-32 md:h-[268px] w-full rounded-[40px] md:rounded-[50px] border-[3px] border-input bg-input-bg pl-[20px] pt-[20px] font-variant text-primary-red placeholder:font-light focus:border-primary-red`}				name={name}			/>		</div>	);});