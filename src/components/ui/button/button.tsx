import React from 'react';import { cn } from '@/utils/cn';type ButtonProps = {    label?: string;    icon?: React.ReactNode;    children?: React.ReactNode;    colour?: 'primary' | 'secondary';    className?: string;};export const Button = ({    className,    label,    icon,    colour = 'primary',    children,}: ButtonProps) => {    return (        <button            className={cn(                'w-60 h-16 rounded-[300px] pb-1',                colour === 'primary' ? 'bg-primary-yellow' : '',                colour === 'secondary' ? 'bg-primary-red' : '',                'font-primary text-3xl text-white',                className,            )}        >            {label ? <p className={''}>{label}</p> : children}        </button>    );};