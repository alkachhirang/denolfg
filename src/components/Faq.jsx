import React, { useState } from 'react';
import { Twitter } from './IconImg';
import { Discoard } from './IconImg';
import { Instagram } from './IconImg';
import Faqlayer from '../assets/images/web.p/faq-layer.webp';
import { UpArrowsvg } from './IconImg';
import { LowerArrowsvg } from './IconImg';

const Faq = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };
    const accordionData = [
        {
            title: "Maecenas laoreet, sapien vel cursus ultricies?",
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis assumenda vero consectetur minus ipsum corrupti ducimus laboriosam tenetur, expedita beatae illum ea sint quaerat nesciunt distinctio quod architecto molestias.",
        },
        {
            title: "Maecenas laoreet, sapien vel cursus ultricies?",
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis assumenda vero consectetur minus ipsum corrupti ducimus laboriosam tenetur, expedita beatae illum ea sint quaerat nesciunt distinctio quod architecto molestias.",
        },
        {
            title: "Maecenas laoreet, sapien vel cursus ultricies?",
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis assumenda vero consectetur minus ipsum corrupti ducimus laboriosam tenetur, expedita beatae illum ea sint quaerat nesciunt distinctio quod architecto molestias.",
        },
        {
            title: "Maecenas laoreet, sapien vel cursus ultricies?",
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis assumenda vero consectetur minus ipsum corrupti ducimus laboriosam tenetur, expedita beatae illum ea sint quaerat nesciunt distinctio quod architecto molestias.",
        },
        {
            title: "Maecenas laoreet, sapien vel cursus ultricies?",
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis assumenda vero consectetur minus ipsum corrupti ducimus laboriosam tenetur, expedita beatae illum ea sint quaerat nesciunt distinctio quod architecto molestias.",
        },

    ];
    return (
        <div id='Faq' className='relative mt-[-20px]'>
            <img src={Faqlayer} alt="Faqlayer" className='absolute top-[-1px] left-0 w-full' />
            <div className='xl:pt-[290px] lg:pt-[200px] md:pt-[167px] sm:pt-[150px] pt-[100px] mb-[40px] sm:mb-[61px]'>
                <h4 className='ff_Chewy text-[#fff] text-[64px] font-normal leading-[131%] text-center' data-aos="fade-up">FAQs</h4>
            </div>
            <div className="container xl:max-w-[1136px] mx-auto lg:px-3 px-6 md:mb-[49px]">
                <div className='flex justify-center items-center '>
                    <div className="accordion" data-aos="fade-up">
                        {accordionData.map((item, index) => (
                            <div className="accordion-item sm:mb-[26px] mb-[17px]" key={index}>
                                <div className="flex justify-between items-center accordion-title"
                                    onClick={() => toggleAccordion(index)}>
                                    <div className={`${openAccordion === index ? "rounded-tl-[40.5px] rounded-tr-[40.5px]" : "rounded-[40.5px] "} ff_Balsamiq text-[#fff] text-[16px] sm:text-[20px] font-bold leading-[116%]`}
                                    >
                                        {item.title}
                                    </div>
                                    <div className="transition-all duration-300 ease-linear ">{openAccordion === index ? (
                                        <div className="transition-all duration-300 ease-linear ">
                                            <LowerArrowsvg />
                                        </div>
                                    ) : (
                                        <div className="transition-all duration-300 ease-linear ">
                                            <UpArrowsvg />
                                        </div>
                                    )}
                                    </div>
                                </div>
                                <div
                                    className={`accordion-content ${openAccordion === index ? "open" : ""
                                        } ff_Balsamiq text-[16px] text-[#fff] font-normal `}>
                                    {item.content}
                                </div>
                            </div>
                        ))
                        }
                    </div >
                </div>
            </div>

            <div className='container xl:max-w-[1136px] mx-auto lg:px-3 px-6 md:mt-[50px] xl:mt-[200px]'>
                <div className='flex flex-col justify-center items-center translate-y-[50px] sm:translate-y-[87px] relative z-[2]'>
                    <h1 className='ff_luckydino m-0 text-[60px] tracking-[1px] sm:text-[80.37px] font-normal leading-[95%] drop-shadow-[0px_1.1337px_0px_#000] cursor-pointer'><span className='text-[#FBA11D]'>D</span><span className='text-[#23AAAC]'>i</span><span className='text-[#D45B07]'>n</span><span className='text-[#8EC627]'>o</span><span className='text-[#FCCA2B]'>L</span><span className='text-[#8F78D2]'>F</span><span className='text-[#8ec627]'>G</span></h1>
                    <p className='ff_Balsamiq text-[14px] text-[#fff] text-center leading-[123%] max-w-[374px] mb-0 mt-[10px] lg:mt-[33px]'>Sed tempus pretium est, vestibulum dapibus mauris viverra id. Curabitur feugiat porta lorem,  </p>
                    <div className='flex gap-[8px] mt-[20px] md:mt-[33px]'>
                        <Twitter />
                        <Discoard />
                        <Instagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;
