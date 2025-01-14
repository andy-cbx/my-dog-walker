import heroImg from '@/assets/our-doggies-hero.png';import pinkPaw from '@/assets/pink-paw-print.svg';import redPaw from '@/assets/red-paw-print.svg';export const HomeOurDoggies = () => {    return (        <div className={'flex flex-col'}>            <div className={'flex flex-row justify-between gap-10'}>                <div                    className={                        'flex flex-1 flex-col gap-8 font-primary text-our-doggies-txt'                    }                >                    <h1 className={'text-7xl font-bold'}>OUR DOGGIES LOVE</h1>                    <div>                        {[                            'Centennial Park',                            'Rodney Reserve',                            'Dover Heights',                            'Queens Park',                        ].map((item, idx) => (                            <span                                key={idx}                                className={'flex items-center gap-4'}                            >                                <img src={redPaw} alt={''} />                                <h2 className={'text-5xl font-bold'}>{item}</h2>                            </span>                        ))}                    </div>                </div>                <div                    className={                        'flex flex-1 flex-col items-end gap-8 font-primary text-our-walks-txt-01'                    }                >                    <div className={'relative shadow-doggies-hero'}>                        <img                            src={pinkPaw}                            alt={''}                            className={'absolute -ml-20 -mt-16'}                        />                        <img src={heroImg} alt={'lulu'} className={''} />                    </div>                </div>            </div>        </div>    );};