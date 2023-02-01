import React from 'react';
import { useQuery } from 'react-query';
import { getAdvice } from './api';
import Loading from './Loading';
import { ButtonIcon, PatternDividerDesktop, PatternDividerMobile } from './assets';

const App: React.FC = () => {

    const { isLoading, isError, data, refetch } = useQuery('advice', getAdvice, {
        refetchOnWindowFocus: false,
        staleTime: 0,
        cacheTime: 0,
        refetchInterval: 0,
    });

    return (
        <div className='flex justify-center items-center h-[100vh] w-full bg-dark-blue p-2'>
            <div
                className='w-[90%] mb:w-[690px] min-h-[410px] bg-dark-grayish-blue
                rounded-2xl font-manrope relative'
            >
                { isLoading ? (
                    <div className='w-full min-h-[390px] flex justify-center items-center'>
                        <Loading />
                    </div>
                ) : (
                    <div className='w-full h-full px-7 py-12 mb:px-14 mb:py-16 flex flex-col gap-8'>
                        <h1
                            className='text-sm font-bold text-center text-neon-green tracking-[4px]'
                        >
                            ADVICE #{data.slip.id}
                        </h1>
                        <p
                            className='text-3xl text-light-cyan text-center font-bold'
                        >
                            &ldquo;{data.slip.advice}&rdquo;
                        </p>
                        <img src={PatternDividerDesktop} alt='divider' className='hidden mb:block' />
                        <img src={PatternDividerMobile} alt='divider' className='block mb:hidden' />
                        <div
                            className='w-[70px] h-[70px] bg-neon-green
                             rounded-full flex justify-center items-center new-button'
                            onClick={() => refetch()}
                        >
                            <div className='hidden mb:block'></div>
                            <img src={ButtonIcon} alt='button' width='28px' height='28px' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;