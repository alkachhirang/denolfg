import React from 'react';
import heloImg from '../assets/images/png/helicopterroadmap.webp';
import TimelineDashed from '../assets/images/png/timelineimg.png';
import TimeChris from '../assets/images/web.p/timelinechristmas.webp';
import Timedinechris from '../assets/images/web.p/cristmascrocotime.webp';
import Timegrass from '../assets/images/web.p/timelinegrass.webp';

const Roadmap = () => {
    return (
        <div id='Roadmap' className='bg-[#09655A] lg:pt-[40px] pb-[70px] md:pb-[165px] xl:pb-[200px] mt-[-2px]'>
            <h2 className='sm:text-[64px] text-[52px] font-normal text-white text-center ff_Chewy leading-[83.63px] md:mb-[97px]leading-[132%] relative z-10 mb-[50px] sm:mb-[80px]' data-aos="zoom-in-up">Roadmap</h2>
            <div class="container mx-auto xl:max-w-[1118px] xl:px-3 px-6 relative">
                <div className='md:pl-0 sm:pl-[130px] pl-[70px]'>
                    <div className='flex sm:flex-row flex-col sm:items-center xl:gap-[45px] lg:gap-[25px] gap-[14px] relative z-10' data-aos="zoom-in-right ">
                        <h3 className='lg:text-[200px] sm:text-[120px] text-[70px] font-normal md:w-[auto] w-[135px] leading-[50%] sm:leading-[70%] md:leading-[130%] ff_Chewy text-[#FBA11D] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)]'>01 </h3>
                        <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Launch $DINO & Website & Social Media.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Building the community.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Marketing Phase 1.</li>
                        </ol>
                        <img src={heloImg} alt="heloImg" className='md:hidden block absolute sm:top-[-17%] left-[-86px] sm:left-[-28%] top-[-12%] max-w-[80px] sm:max-w-[120px]' />
                    </div>
                    <div className='flex sm:flex-row flex-col sm:items-center lg:justify-end md:justify-center lg:pl-0 md:pl-[100px] lg:gap-[30px] gap-[15px] lg:pr-[100px] md:pt-[245px] pt-[30px] relative z-10' data-aos="zoom-in-left">
                        <h3 className='lg:text-[200px] sm:text-[120px] text-[70px] leading-[145%] ff_Chewy font-normal text-[#8EC627] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)]'>02</h3>
                        <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>CoinGecko & Coinmarketcap listing.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Introduction to Buyback & Burning mechanism</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Marketing Phase 2.</li>
                        </ol>
                        <img src={TimeChris} alt="TimeChris" className='md:hidden block absolute sm:top-[26%] left-[-91px] sm:left-[-26%] top-[14%] max-w-[90px] sm:max-w-[80px]' />
                    </div>
                    <div className='flex sm:flex-row flex-col sm:items-center xl:gap-[45px] lg:gap-[25px] gap-[14px] lg:pt-[92px] md:pt-[143px] pt-[30px] relative z-10' data-aos="zoom-in-right">
                        <h3 className='lg:text-[220.95px] sm:text-[120px] text-[70px] font-normal ff_Chewy text-[#D45B07] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] leading-[131%]'>03</h3>
                        <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Utility and Usecase Introduction.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>CEX Listings</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Marketing Phase 3.</li>
                        </ol>
                        <img src={Timedinechris} alt="Timedinechris" className='md:hidden block absolute sm:top-[26%] left-[-91px] sm:left-[-26%] top-[14%] max-w-[90px] sm:max-w-[80px]' />
                    </div>
                    <div className='flex sm:flex-row flex-col sm:items-center md:justify-center lg:gap-[30px] gap-[15px] md:pt-[154px] pt-[30px] relative z-10' data-aos="zoom-in-left">
                        <h3 className='lg:text-[200px] sm:text-[120px] text-[70px]  ff_Chewy font-normal md:ml-[150px] text-[#23AAAC] drop-shadow-[0px_18.413px_18.413px_rgba(0,_0,_0,_0.26)] leading-[145%]'>04</h3>
                        <ol className='flex flex-col gap-4 list-disc pl-[30px]'>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Staking Introduction.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>DINO NFT Collection.</li>
                            <li className='lg:text-[20px] text-[15px] font-normal text-white leading-[121%]'>Marketing Phase 4</li>
                        </ol>
                        <img src={Timegrass} alt="Timegrass" className='md:hidden block absolute left-[-86px] sm:left-[-28%] bottom-[-19px] max-w-[80px] sm:max-w-[120px]' />
                    </div>
                </div>
                <div className='md:hidden block absolute sm:left-[70px] left-[40px] top-0 bottom-0 w-[15px] border-l-[11px] border-dashed border-[#0a4740]'></div>
                <img src={TimelineDashed} alt="TimelineDashed" className='md:block hidden absolute xl:pl-[68px] top-0 bottom-0  w-full left-0 right-0' />
            </div>
        </div>
    )
}

export default Roadmap;
