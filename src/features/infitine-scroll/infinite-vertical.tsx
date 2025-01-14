import * as React from 'react';type InfiniteScrollProps = {    children: React.ReactNode;};export const VerticalInfiniteScroll: React.FC<InfiniteScrollProps> = ({    children,}) => {    const outerRef: React.MutableRefObject<HTMLDivElement | null> =        React.useRef(null);    const innerRef: React.MutableRefObject<HTMLDivElement | null> =        React.useRef(null);    function resetAnimation() {        if (innerRef?.current) {            innerRef.current.setAttribute('data-animate', 'false');            setTimeout(() => {                if (innerRef?.current) {                    innerRef.current.setAttribute('data-animate', 'true');                }            }, 50);        }    }    React.useEffect(() => {        resetAnimation();    }, []);    return (        <div            id={`outer-ref instance=2`}            ref={outerRef}            className={`size-full max-w-[unset] overflow-hidden`}        >            <div                id={'inner-ref'}                className={`box-border flex h-max max-w-[unset] animate-none flex-col justify-center overflow-x-hidden [&[data-animate=true]]:animate-infinite-scroll-vertical`}                ref={innerRef}            >                {[...Array(2)].map((_, ind) => (                    <div id={'inner-div'} key={ind}>                        {children}                    </div>                ))}            </div>        </div>    );};