import React from 'react'
import Background from '../components/Background'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Home = () => {
    return (
        <div className='h-screen w-screen relative'>
            <Background />
            <div className='flex items-center flex-col h-full p-5'>
                <div className='flex justify-between w-full p-5'>
                    <span className='Logo'>
                        Logo
                    </span>
                    <Navbar />
                </div>
                <div>
                    <Content />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home
