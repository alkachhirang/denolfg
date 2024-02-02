import React from 'react';
import Footerdragon from '../assets/images/web.p/footer-dragon.webp';

const Footer = () => {
    return (
        <div className='bg-Bgfooter bg-repeat bg-center bg-cover lg:bg-bgsize min-h-[400px] relative'>
            <img src={Footerdragon} alt="Footerdragon" className='absolute walking_animation max-w-[160px] sm:max-w-[211px] w-full right-[7%] bottom-[2%]' />
        </div>
    )
}

export default Footer
