import React, { useState, useEffect } from 'react';
import Background from '../components/HomePage/Background'
import Content from '../components/HomePage/Content'
import Footer from '../components/HomePage/Footer'
import Navbar from '../components/HomePage/Navbar'
import NavbarMini from '../components/HomePage/NavbarMini'
import logo from '../assets/images/Logo.png'
import logoW from '../assets/images/LogoWName.png'


const Home = () => {

    const [isMobile, setIsMobile] = useState(false);

    const checkMobile = () => {
        if (window.innerWidth <= 768) {
          setIsMobile(true); // Set mobile if screen width is <= 768px
        } else {
          setIsMobile(false); // Set desktop if screen width is > 768px
        }
      };
    
      // Scroll to top when the page is loaded or refreshed
      useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        checkMobile(); // Check screen size on load
    
        // Add event listener for window resize to handle dynamic changes
        const handleResize = () => checkMobile();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize); // Cleanup the event listener
        };
      }, []);

    return (
        <div className='min-h-screen min-w-screen relative overflow-x-hidden'>
            <Background />
            <div className='flex items-center flex-col h-full justify-center gap-16'>
                <div className='flex justify-between items-center w-full md:pl-6 p-6'>
                    <span className='Logo w-[20%]'>
                        <img src={ isMobile ? logo : logoW } width={isMobile ? "100px" : "150px"} alt="Hive-Mind_LOGO"/>
                    </span>
                    <div className="md:px-4 w-[70%] md:w-[80%]">
                    {isMobile ? <NavbarMini /> : <Navbar />}
                    </div>
                </div>
                    <Content />
                    <Footer />
            </div>
        </div>
    )
}

export default Home
