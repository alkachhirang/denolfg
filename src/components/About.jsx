import React from 'react';
import AboutLefttree from '../assets/images/web.p/about-left-tree.webp';
import AboutRighttree from '../assets/images/web.p/about-right_tree.webp';
import Dragon from '../assets/images/web.p/about-dragon.webp';

const About = () => {
    return (
        <div>
            <div id='About' className='bg-[#09655A] mt-[-2px] pt-[40px] sm:pt-[45px] pb-[20px] md:pt-[76px] relative'>
                <img src={AboutLefttree} alt="AboutLefttree" className='absolute left-[-6%] md:left-[-2%] lg:left-0 bottom-[-35%] lg:bottom-[-36%] lg:max-w-[223px] max-w-[150px] z-[2] sm:block hidden' />
                <img src={AboutRighttree} alt="AboutRighttree" className='absolute right-[-23%] md:right-[-15%] xl:right-[-9%] bottom-[-9%] lg:bottom-[-1%] lg:max-w-[352px] max-w-[256px] sm:max-w-[290px] z-[2]' />
                <img src={Dragon} alt="Dragon" className='absolute img_animation right-0 bottom-[-20%] lg:max-w-[169px] md:max-w-[124px] max-w-[120px] z-[2] md:block hidden' />
                <div className='container mx-auto xl:max-w-[1136px] lg:px-3 px-6'>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='ff_luckydino text-[#fff] text-[45px] sm:text-[69px] text-center font-normal leading-[100%] drop-shadow-[0px_1.1337px_0px_#000] cursor-pointer m-0 pb-[18px] sm:pb-[24px] md:pb-[48px]' data-aos="fade-up"><span className='ff_Chewy text-[49px] sm:text-[64px]'>About</span> <span className='text-[#FBA11D]'>D</span><span className='text-[#23AAAC]'>i</span><span className='text-[#D45B07]'>n</span><span className='text-[#8EC627]'>o</span><span className='text-[#FCCA2B]'>L</span><span className='text-[#8F78D2]'>F</span><span className='text-[#8ec627]'>G</span></h3>
                        <p className='text-[#fff] ff_Balsamiq text-[18px] sm:text-[20px] lg:text-[24px] leading-[116%] font-normal text-center m-0 pb-[10px] sm:pb-[14px] md:pb-[18px]' data-aos="fade-up">$DINO is a meme coin with very strong utility.</p>
                        <p className='text-[#fff] ff_Balsamiq text-[18px] sm:text-[20px] lg:text-[24px] leading-[130%] font-bold text-center m-0 max-w-[568px] pb-[10px] relative z-[3]' data-aos="fade-up">Biggest problem of meme coins is lack of utility and usecase, <span className='text-[#8EC627]'>$</span><span className='text-[#FBA11D]'>D</span><span className='text-[#23AAAC]'>I</span><span className='text-[#D45B07]'>N</span><span className='text-[#FB5352]'>O</span> is going to fix it.</p>
                        <p className='text-[#fff] ff_Balsamiq text-[18px] sm:text-[20px] lg:text-[24px] leading-[119%] font-normal text-center m-0 max-w-[522px] pb-[10px] sm:pb-[14px] relative z-[3]' data-aos="fade-up">We want to bring a lot of usecases and utility to $DINO holders, just sit back and relax.</p>
                        <p className='text-[#fff] ff_Balsamiq text-[18px] sm:text-[20px] lg:text-[24px] leading-[122%] font-normal text-center m-0 max-w-[599px] pb-[17px] relative z-[3]' data-aos="fade-up">In $DINO, we want to build a very strong community, that’s why we are going to have a lot of games and crypto tips in our Telegram and Twitter.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
