import React from 'react';
import Typewriter from 'typewriter-effect';
import Preloaderimg from '../assets/images/web.p/helicopter-img.webp';

const Preloader = () => {
    return (
        <div>
            <div className='flex items-center justify-center flex-col min-h-screen bg-[#09655a]'>
                <div className='flex justify-center items-center mb-[20px]'>
                    <img src={Preloaderimg} alt="Preloaderimg" className='max-w-[150px] w-full swing' />
                </div>
                <div className='typewriter'>
                    <h2 className="text-[#FBA11D] leading-[90%] lg:max-w-[398px] drop-shadow-[0px_6px0px#000] text-center ff_luckydino font-normal text-[38px] md:text-[55px] uppercase">
                        D<span className="text-[#23AAAC]">I</span>
                        <span className="text-[#D45B07]">N</span>
                        <span className="text-[#8EC627]">O</span>
                        <span className="text-[#8EC627]">L</span>
                        <span className="text-[#FCCA2B]">F</span>
                        <span className="text-[#8F78D2]">G</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Preloader;
