import React, { useState } from 'react';
import { TwitterIcon } from './IconImg';
import { DiscoardIcon } from './IconImg';
import { InstagramIcon } from './IconImg';
import Helicopter from '../assets/images/web.p/helicopter-img.webp';
import Headerdradon from '../assets/images/web.p/footer-dragon.webp';
import Dragon2 from '../assets/images/web.p/utility-img2.webp';


const Header = () => {
    const [show, setshow] = useState(true)
    if (show === false) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    return (
        <div className='bg-BgHeader bg-cover lg:bg-bgsize bg-repeat bg-left-bottom lg:bg-center sm:h-[730px] md:h-[860px] lg:h-[930px] h-[600px] xl:min-h-screen relative'>
            <img src={Headerdradon} alt="Headerdradon" className='absolute walking_animation right-[7%] bottom-[10%] max-w-[80px] sm:max-w-[140px] lg:max-w-[211px] w-full z-[1]' />
            <img src={Dragon2} alt="Dragon2" className='absolute walk_animation left-[40%] lg:left-[50%] bottom-[18%] max-w-[40px] sm:max-w-[131px] w-full sm:block hidden' />
            <div className='container mx-auto lg:px-3 px-6 xl:max-w-[1156px] pt-[20px] sm:pt-[28px]'>
                <div className='rounded-[61.102px] border-b-[4px] border-b-[#000000] border-solid bg-[#fff] lg:pt-[4px] lg:pb-[5px] lg:pr-[8px] lg:pl-[24px] px-[24px] py-[15px]'>
                    <div className='flex justify-between items-center'>
                        <h1 className='ff_luckydino m-0 text-[30px] sm:text-[39.125px] font-normal leading-[94%] drop-shadow-[0px_1.1337px_0px_#000] cursor-pointer'><span className='text-[#FBA11D]'>D</span><span className='text-[#23AAAC]'>i</span><span className='text-[#D45B07]'>n</span><span className='text-[#8EC627]'>o</span><span className='text-[#FCCA2B]'>L</span><span className='text-[#8F78D2]'>F</span><span className='text-[#8ec627]'>G</span></h1>
                        <ul className={`${show ? "left-[-100%]" : "left-0 bg-[#ffffff]"} flex items-center gap-[28px] z-[11] flex-row max-lg:fixed max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all ease-linear duration-300}`}>
                            <li onClick={() => setshow(!show)}><a href='#About' className='text-[#000] font-normal leading-[133%] ff_Chewy  text-[18px] hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>About</a></li>
                            <li onClick={() => setshow(!show)}><a href='#Tokenomic' className='text-[#000] font-normal leading-[133%] ff_Chewy  text-[18px] hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Tokenomic</a></li>
                            <li onClick={() => setshow(!show)}><a href='#Roadmap' className='text-[#000] font-normal leading-[133%] ff_Chewy  text-[18px] hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>Roadmap</a></li>
                            <li onClick={() => setshow(!show)}><a href='#Faq' className='text-[#000] font-normal leading-[133%] ff_Chewy  text-[18px] hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear'>FAQ</a></li>
                            <li className='flex items-center gap-[8px] sm:hidden'>
                                <TwitterIcon />
                                <DiscoardIcon />
                                <InstagramIcon />
                            </li>
                            <li className='bg-Bgbtn bg-center bg-repeat bg-bgsize lg:hidden block'>
                                <button className='ff_Chewy font-normal text-[18px] leading-[131%] text-[#000] hover:text-[#fff] transition-all duration-300 ease-linear px-[36px] pt-[11px] pb-[19.57px] text-nowrap'>Join Now</button>
                            </li>
                        </ul>
                        <div className='flex items-center lg:gap-[13px] gap-[18px]'>
                            <div className='sm:flex items-center gap-[8px] hidden'>
                                <TwitterIcon />
                                <DiscoardIcon />
                                <InstagramIcon />
                            </div>
                            <div className='bg-Bgbtn bg-center bg-repeat bg-bgsize lg:block hidden'>
                                <button className='ff_Chewy font-normal text-[18px] leading-[131%] text-[#000] hover:text-[#fff] transition-all duration-300 ease-linear px-[36px] pt-[11px] pb-[19.57px] text-nowrap'>Join Now</button>
                            </div>
                            <div onClick={() => setshow(!show)} className='lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-[13] flex justify-between flex-col cursor-pointer'>
                                <span className={`${show ? '' : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"} bg-[#000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                                <span className={`${show ? '' : "hidden"} bg-[#000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                                <span className={`${show ? '' : "rotate-[-50deg] translate-y-[-50%]"} bg-[#000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container mx-auto lg:px-3 px-6 xl:max-w-[1156px]'>
                <div className='flex sm:flex-row flex-col-reverse items-center flex-wrap sm:mt-[83px] mt-[50px]'>
                    <div className='sm:w-5/12 w-full flex items-end justify-center sm:justify-start pt-[10px]'>
                        <img src={Helicopter} alt="Helicopter" className='w-full swing sm:max-w-[394.14px] max-w-[220px]' />
                    </div>
                    <div className='sm:w-7/12 w-full flex flex-col items-center justify-center'>
                        <h2 className="text-[#FBA11D] leading-[90%] lg:max-w-[398px] drop-shadow-[0px_6px_0px_#000] text-center ff_luckydino font-normal lg:text-[175.636px] md:text-[130px] sm:text-[100px] text-[64px] uppercase" data-aos="fade-left">
                            <span className="sm:block">
                                D<span className="text-[#23AAAC]">I</span>
                                <span className="text-[#D45B07]">N</span>
                                <span className="text-[#8EC627]">O</span>
                            </span>
                            <span className="text-[#8EC627]">L</span>
                            <span className="text-[#FCCA2B]">F</span>
                            <span className="text-[#8F78D2]">G</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
