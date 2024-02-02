import './App.css';
import React, { useState, useEffect } from 'react';
import About from './components/About';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Utility from './components/Utility';
import Backtotop from './assets/images/web.p/back-to-top.webp';
import Preloader from './components/Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 800,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (

   <div>
      {screenLoading ? (
      <Preloader/>
      ) : (
          <>
            <div className='overflow-x-hidden'>
              <Header />
              <About />
              <Tokenomics />
              <Utility />
              <Roadmap />
              <Faq />
              <Footer />
            </div>
            <div onClick={() => top()} className={backToTop ? "back_to_top shadow-[0_5px_16px_rgba(142,198,39,1)] overflow-hidden fixed bottom-[3%] h-[45px] w-[45px] flex items-center justify-center rounded-[50px] bg-[#09655A] cursor-pointer border-[2px] border-solid border-[#8EC627] transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
              <img src={Backtotop} alt='Backtotop' />
            </div>
          </>
      )
}
    </div >



  
  );
}

export default App;
