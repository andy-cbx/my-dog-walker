import brownDog from '@/assets/footer-brown-dog.svg';import grass from '@/assets/footer-grass.svg';import whiteDog from '@/assets/footer-white-dog.svg';import logo from '@/assets/hero-logo.svg';export const HomeFooter = () => {    return (        <div className={'mt-8 flex w-full flex-col items-center'}>            <div className={'relative h-[600px] w-[104%] overflow-hidden'}>                <img src={grass} alt={''} className={'absolute w-full'} />                <img                    src={brownDog}                    alt={''}                    className={'absolute bottom-0 right-0'}                />                <img                    src={whiteDog}                    alt={''}                    className={'absolute bottom-[-60px] right-[300px]'}                />                <img                    src={logo}                    alt={''}                    className={                        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'                    }                />            </div>        </div>    );};