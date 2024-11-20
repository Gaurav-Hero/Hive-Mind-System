import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Grp from '../assets/images/Group.svg';

const Content = () => {
  // Refs for elements that will be animated
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const serviceItemsRef = useRef([]);

  // Add service item refs dynamically
  const addToRefs = (el) => {
    if (el && !serviceItemsRef.current.includes(el)) {
      serviceItemsRef.current.push(el);
    }
  };

  // GSAP Scroll Trigger
  useEffect(() => {
    // Hero section animation
    gsap.fromTo(heroTextRef.current, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 });

    gsap.fromTo(heroImageRef.current, 
      { scale: 0 },
      { scale: 1, duration: 1 });

    // Service Items Animation
    serviceItemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2 * index, // Delay for each item
          scrollTrigger: {
            trigger: item,
            start: "top 80%", // Animation starts when the element is 80% in view
          },
        });
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#8086ee65] text-white rounded-3xl p-10 md:p-12">
        {/* Hero Text */}
        <div className="flex-1 md:flex-col mb-6 md:mb-0 md:text-left">
          <h1 ref={heroTextRef} className="text-3xl font-medium mb-4">
            Welcome to Your Virtual Study Group - <br />
            <span className='text-5xl font-extrabold drop-shadow-2xl'>Hive Mind</span>
          </h1>
          <p className="text-lg mb-4">
            Collaborate, learn, and grow with peers in an interactive and real-time platform.
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="flex justify-center">
          <div
            ref={heroImageRef}
            className="bg-[#c1c4ff] md:w-[30rem] w-62 h-32 md:h-72 rounded-lg flex items-center justify-center shadow-lg mb-2"
          >
            <img src={Grp} className="md:w-[90%]" alt="StdyGrp" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-12">
        <h2 className="text-4xl font-bold ml-8 mb-8 drop-shadow-2xl text-white">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Item 1 */}
          <div
            ref={addToRefs}
            className="p-6 bg-white rounded-2xl shadow-md hover:bg-[#9196ff86] hover:text-white transition-all"
          >
            <h3 className="text-xl font-semibold mb-3">Group Creation & Management</h3>
            <p>Create and manage study groups with ease.</p>
          </div>

          {/* Service Item 2 */}
          <div
            ref={addToRefs}
            className="p-6 bg-white rounded-2xl shadow-md hover:bg-[#9196ff86] hover:text-white transition-all"
          >
            <h3 className="text-xl font-semibold mb-3">Real-Time Collaboration</h3>
            <p>Share notes and documents in a shared space.</p>
          </div>

          {/* Service Item 3 */}
          <div
            ref={addToRefs}
            className="p-6 bg-white rounded-2xl shadow-md hover:bg-[#9196ff86] hover:text-white transition-all"
          >
            <h3 className="text-xl font-semibold mb-3">Interactive Quizzes & Flashcards</h3>
            <p>Test your knowledge with quizzes and flashcards.</p>
          </div>

          {/* Service Item 4 */}
          <div
            ref={addToRefs}
            className="p-6 bg-white rounded-2xl shadow-md hover:bg-[#9196ff86] hover:text-white transition-all"
          >
            <h3 className="text-xl font-semibold mb-3">Live Video & Audio</h3>
            <p>Engage in live discussions and study sessions.</p>
          </div>

          {/* Service Item 5 */}
          <div
            ref={addToRefs}
            className="p-6 bg-white rounded-2xl shadow-md hover:bg-[#9196ff86] hover:text-white transition-all"
          >
            <h3 className="text-xl font-semibold mb-3">Task Tracker</h3>
            <p>Stay organized with task assignments and deadlines.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
