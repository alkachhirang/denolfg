import React from 'react';
import Utilitylayer from '../assets/images/web.p/utility-layer.webp';
import Utilityimg1 from '../assets/images/web.p/utility-img1.webp';
import Utilityimg2 from '../assets/images/web.p/utility-img2.webp';
import Utilitytree from '../assets/images/web.p/utility-tree.webp';
import Roadmaplayer from '../assets/images/web.p/roadmap-layer.webp';


const Utility = () => {
    return (
        <div className='relative pt-[75px] sm:pt-[110px] md:pt-[160px] lg:pt-[170px] xl:pt-[200px] md:pb-[110px] pb-[50px] lg:pb-[168px]'>
            <img src={Utilitylayer} alt="Utilitylayer" className='absolute w-full left-0 top-[-6px]' />
            <img src={Roadmaplayer} alt="Roadmaplayer" className='absolute w-full left-0 bottom-0' />
            <img src={Utilitytree} alt="Utilitytree" className='absolute w-full lg:max-w-[343px] md:max-w-[250px] max-w-[170px] right-[-1%] lg:top-[37%] bottom-[-2%] md:bottom-[13%] md:block hidden' />
            <div className='container mx-auto xl:max-w-[1136px] lg:px-3 px-6'>
                <h4 className='ff_Chewy font-normal text-[40px] sm:text-[64px] text-[#fff] leading-[132%] text-center' data-aos="zoom-in-up">Utility and Usecase</h4>
                <div className='flex justify-center items-center mt-[40px] md:mt-[60px] lg:mt-[158px]'>
                    <div className='rounded-[20px] relative z-[2]  border-[1px] border-solid border-[#fff] bg-[#09655A] px-[15px] sm:px-[24px] pt-[25px] sm:pt-[40px] pb-[1px] lg:py-[62px] lg:pl-[39px] lg:pr-[24.49px] lg:max-w-[1014px] w-full mb-[35px] sm:mb-[50px] md:mb-[80px] lg:mb-[125px]' data-aos="zoom-in-up">
                        <p className='sm:text-[32px] text-[21px] text-[#fff] font-normal leading-[120%] max-w-[681px] lg:text-start text-center m-0'>We are going to work hard in otder to add <span className='text-[#8EC627] font-bold'>$</span><span className='text-[#FBA11D] font-bold'>D</span><span className='text-[#23AAAC] font-bold'>I</span><span className='text-[#D45B07] font-bold'>N</span><span className='text-[#FB5352] font-bold'>O</span> to main platforms as a form of payment</p>
                        <p className='ff_Balsamiq text-[#fff] text-[21px] sm:text-[32px] leading-[119%] mb-0 mt-[15px] lg:mt-[28px] lg:text-start text-center'>You will be able to buy a lot of things with <span className='text-[#8EC627] font-bold'>$</span><span className='text-[#FBA11D] font-bold'>D</span><span className='text-[#23AAAC] font-bold'>I</span><span className='text-[#D45B07] font-bold'>N</span><span className='text-[#FB5352] font-bold'>O</span></p>
                        <div className='flex justify-center items-center lg:mt-0 sm:mt-[30px] mt-[20px]'>
                            <img src={Utilityimg1} alt="Utilityimg1" className='lg:absolute img_animation right-0 top-[-21%] sm:max-w-[255px] max-w-[210px] w-full lg:mr-[24px]' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mb-[100px] sm:mb-[200px] xl:mb-[300px]'>
                    <div className='rounded-[20px] relative z-[2] border-[1px] border-solid border-[#fff] bg-[#09655A] px-[15px] sm:px-[24px] pt-[25px] sm:pt-[40px] pb-[1px] lg:py-[95px] lg:pr-[27px] lg:max-w-[1014px] w-full' data-aos="zoom-in-up">
                        <div className='flex lg:justify-end justify-center'>
                            <p className='ff_Balsamiq text-[#fff] text-[21px] sm:text-[32px] leading-[119%] mb-0 lg:text-end text-center lg:max-w-[681px]'>We are going to have staking and buyback/<span className='md:block'>burning mechanism</span></p>
                        </div>
                        <div className='flex justify-center items-center lg:mt-0 sm:mt-[30px] mt-[20px]'>
                            <img src={Utilityimg2} alt="Utilityimg2" className='lg:absolute img_animation left-0 top-[-25%] sm:max-w-[267px] max-w-[240px] w-full' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Utility
