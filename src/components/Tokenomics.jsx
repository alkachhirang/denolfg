import React from "react";
import Aboutlayer from '../assets/images/web.p/about-layer.webp';
import TokenomicsDragon from '../assets/images/png/tokenomics-dragon.png';
import HalfCircle from '../assets/images/web.p/half-circle-img.webp';
import Colourfulimg from '../assets/images/web.p/colourful-img.webp';
import Tokenomicsfullcircle from "../assets/images/png/tokenomics-full-circle.webp";
import Tokenomicslayer from "../assets/images/png/tokenomics-layer.webp";
import Treedragon from '../assets/images/png/tokenomics-tree-dragon.png';
import Shadowimg from '../assets/images/web.p/tokenomics-shadow.png';

const Tokenomics = () => {
    return (
        <>
            <div className="relative">
                <img src={Aboutlayer} alt="Aboutlayer" className='absolute w-full left-0 mt-[-1px]' />
                <img src={Shadowimg} alt="Shadowimg" className="absolute max-w-[550px] top-[15%] right-0 md:block hidden " />
                <img src={Treedragon} alt="Treedragon" className="absolute left-0 bottom-0 z-[1] lg:max-w-[231px] max-w-[170px] xl:max-w-[350px] w-full" />
                <img
                    src={Tokenomicslayer}
                    alt="Tokenomicslayer"
                    className=" absolute w-full left-0 right-0 bottom-0"
                />
                <div id="Tokenomic" className="container relative z-[1] xl:max-w-[1147px] xl:px-3 px-6 mx-auto sm:pt-[155px] md:pt-[170px] xl:pt-[236px] pt-[80px] xl:pb-[540px] lg:pb-[400px] sm:pb-[350px] pb-[175px]">
                    <h2 className="text-white font-normal ff_Chewy text-[52px] sm:text-[64px] leading-[131%] text-center lg:mb-[150px] mb-[45px]" data-aos="zoom-in-up">
                        Tokenomics
                    </h2>
                    <div className="flex items-center justify-center">
                        <div className="relative lg:max-w-[589.84px] max-w-[430px]">
                            <img
                                src={Tokenomicsfullcircle}
                                alt="Tokenomicsfullcircle"
                                className="w-full lg:hidden block" data-aos="zoom-in-up"
                            />
                            <img
                                src={HalfCircle}
                                alt="HalfCircle"
                                className="lg:block hidden absolute bottom-[59%] lg:left-[28%] left-[26%] max-w-[252.57px] w-full" data-aos="zoom-in-up"
                            />
                            <img
                                src={Colourfulimg}
                                alt="Colourfulimg"
                                className="lg:block hidden w-full" data-aos="zoom-in-up"
                            />
                            <img
                                src={TokenomicsDragon}
                                alt="TokenomicsDragon"
                                className="lg:flex hidden img_animation absolute w-full lg:top-[-29%] top-[-37%] left-[39%] max-w-[133.72px]" data-aos="zoom-in-up"
                            />
                            <div className="md:flex hidden absolute lg:top-[12%] top-[41%] xl:left-[-45%] lg:left-[-34%] left-[-45%] xl:gap-[26.11px] gap-[15px]" data-aos="zoom-in-up">
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#FBA11D] leading-[119%] xl:text-[32px] text-[23px] font-normal">
                                        333,333,333
                                    </p>
                                    <p className="text-white leading-[138%] font-normal text-[24px] text-right">
                                        Supply
                                    </p>
                                </div>
                                <div className="border border-solid border-white border-r-0 border-b-0 h-[88px] w-[16px]"></div>
                            </div>
                            <div className="md:flex hidden absolute lg:top-[12%] top-[43%] xl:right-[-50%] right-[-49%] lg:right-[-40%] xl:gap-[26.11px] gap-[15px]" data-aos="zoom-in-up">
                                <div className="border border-solid border-white border-l-0 border-b-0 h-[88px] w-[16px]"></div>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#8EC627] xl:max-w-[217px] max-w-[164px] leading-[119%] xl:text-[32px] text-[23px] font-normal">
                                        Liquidity lock for 1 year
                                    </p>
                                </div>
                            </div>
                            <div className="md:flex hidden absolute lg:bottom-[-45%] bottom-[-28%] lg:left-[42%] left-[38%] justify-center items-center flex-col gap-[17px]" data-aos="zoom-in-up">
                                <div className="bg-white h-[43px] w-[1px]"></div>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#D45B07] max-w-[217px] leading-[119%] text-[32px] font-normal">
                                        No Tax
                                    </p>
                                </div>
                            </div>
                            <div className="md:flex hidden absolute lg:bottom-[-27%] bottom-[-17%] left-[-27%] justify-center items-center gap-[17px]" data-aos="zoom-in-up">
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#23AAAC] max-w-[217px] leading-[119%] xl:text-[32px] text-[23px] font-normal">
                                        95% Uniswa
                                    </p>
                                    <p className="text-[#23AAAC] max-w-[217px] text-right leading-[119%] xl:text-[32px] text-[23px] font-normal">
                                        5% Marketing
                                    </p>
                                    <p className="text-white max-w-[217px] text-right leading-[119%] xl:text-[32px] text-[23px]  font-normal">
                                        Allocation
                                    </p>
                                </div>
                                <div className="border-white border border-solid h-[102px] w-[16px] border-b-0 border-r-0 skew-y-[-50deg] "></div>
                            </div>
                            <div className="md:flex hidden absolute lg:bottom-[-23%] bottom-[-18%] right-[-31%] justify-center items-center gap-[17px]" data-aos="zoom-in-up">
                                <div className="border-white border border-solid h-[102px] w-[16px] border-b-0 border-l-0 skew-y-[52deg] "></div>
                                <p className="text-[#FB5352] leading-[119%] xl:text-[32px] text-[23px] font-normal">
                                    No Mint Function
                                </p>
                            </div>
                            <div className="md:hidden flex justify-center items-center mt-12" data-aos="zoom-in-up">
                                <div className=" flex flex-col gap-[28px] sm:gap-[35px]">
                                    <div className="flex gap-[32px]">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#FBA11D]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#FBA11D] leading-[119%] text-[26px] sm:text-[32px] font-normal">
                                                333,333,333
                                            </p>
                                            <p className="text-white leading-[138%] font-normal text-[24px] md:text-right">
                                                Supply
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[32px]">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#23AAAC]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#23AAAC] leading-[119%] text-[26px] sm:text-[29px] font-normal">
                                                95% Uniswa 5% Marketing
                                            </p>
                                            <p className="text-white leading-[138%] text-[26px] sm:text-[29px] font-normal md:text-right">
                                                Allocation
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[32px]">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#D45B07]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#D45B07] leading-[119%] text-[26px] sm:text-[32px] font-normal">
                                                No Tax
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[32px] items-center">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#FB5352]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#FB5352] leading-[119%] text-[26px] sm:text-[32px] font-normal m-0">
                                                No Mint Function
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[32px] items-center">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#8EC627]"></div>
                                        <div className="flex flex-col gap-[5px] ">
                                            <p className="text-[#8EC627] leading-[119%] text-[26px] sm:text-[32px] font-normal m-0">
                                                Liquidity lock for 1 year
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tokenomics;
