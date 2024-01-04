'use client';

import React, { useState, useEffect } from 'react';
import { Carousel } from "@material-tailwind/react";
import { Transition } from "@headlessui/react";
import Marquee from "react-fast-marquee";

import Testimonial from "./components/Testimonial";
import Question from "./components/Question";

import quotes from '../../public/data/quotes';
import questions from '../../public/data/questions';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function scrollToTarget(event: Event) {
      event.preventDefault();
    
      const targetId = (event.target as HTMLAnchorElement).getAttribute('data-target-id');
    
      if (targetId && typeof document !== 'undefined') {
        const targetDiv = document.getElementById(targetId);
    
        if (targetDiv) {
          // Calculate the offset based on your fixed navbar height
          const navbarHeight = 100; // Adjust this value based on your fixed navbar height
          const offset = targetDiv.getBoundingClientRect().top - navbarHeight;
    
          // Adjust the scrollIntoView options with the calculated offset
          window.scrollBy({ top: offset, left: 0, behavior: 'smooth' });
        } else {
          console.error(`Target div with id '${targetId}' not found`);
        }
      } else {
        console.error('data-target-id attribute not found on the clicked element or document is undefined');
      }
    }
    

    if (typeof document !== 'undefined') {
      const scrollLinks = document.querySelectorAll('a.scroll-link');

      scrollLinks.forEach((link) => {
        link.addEventListener('click', scrollToTarget);
      });

      return () => {
        scrollLinks.forEach((link) => {
          link.removeEventListener('click', scrollToTarget);
        });
      };
    }
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full fixed z-10 bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm">
        <div className="">
          <div className="flex items-center justify-between h-20 margin-sides ">
            <div className="w-full flex justify-between items-center ">
              <div className="flex-shrink-0">
                <div className="flex gap-2 items-center">
                  <img src="/techwise_logo.svg" alt="TechWise Logo" />
                  <p className="text-2xl font-bold">Tech<span className="text-green">Wise</span></p>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex gap-14 items-baseline">
                  <a
                    href="#"
                    className="scroll-link hover:text-green px-3 py-2 rounded-md text-medium font-medium"
                    data-target-id="home"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="scroll-link text-gray-300 hover:bg-gray-700 hover:text-green px-3 py-2 rounded-md text-medium font-medium"
                    data-target-id="services"
                  >
                    Services
                  </a>

                  <a
                    href="#"
                    className="scroll-link text-gray-300 hover:bg-gray-700 hover:text-green px-3 py-2 rounded-md text-medium font-medium"
                    data-target-id="testimonies"
                  >
                    Testimonies
                  </a>

                  <a
                    href="#"
                    className="scroll-link text-gray-300 hover:bg-gray-700 hover:text-green px-3 py-2 rounded-md text-medium font-medium"
                    data-target-id="faqs"
                  >
                    FAQs
                  </a>
                </div>
              </div>
              <button className="hidden lg:block bg-black rounded-xl px-6 py-3 text-white font-medium">Contact Us</button>
            </div>
            
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="w-full lg:px-8 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="scroll-link hover:bg-gray-700 hover:text-green block px-8 py-2 rounded-md text-base font-medium"
                  data-target-id="home"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="scroll-link text-gray-300 hover:bg-gray-700 hover:text-green block px-8 py-2 rounded-md text-base font-medium"
                  data-target-id="services"
                >
                  Services
                </a>

                <a
                  href="#"
                  className="scroll-link text-gray-300 hover:bg-gray-700 hover:text-green block px-8 py-2 rounded-md text-base font-medium"
                  data-target-id="testimonies"
                >
                  Testimonies
                </a>

                <a
                  href="#"
                  className="scroll-link text-gray-300 hover:bg-gray-700 hover:text-green block px-8 py-2 rounded-md text-base font-medium"
                  data-target-id="faqs"
                >
                  FAQs
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-green block px-8 py-2 rounded-md text-base font-bold"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <div className="h-screen flex flex-col justify-center items-between pt-20">
        {/* Hero Section */}
        <div id="home" className="grow flex items-center margin-sides">
            <div className="grow">
              <div className="mb-8 w-max bg-lightgreen rounded-full px-6 py-3 text-darkgreen text-sm md:text-base font-semibold">Empowering Innovation for the Future of Technology</div>
              <h1 className="mb-3 md:mb-7 text-3xl md:text-4xl font-bold leading-snug">Empowering Innovation<br/>for the Future of Tech</h1>
              <p className="md:w-3/4 mb-9 text-gray text-xs md:text-base font-medium leading-relaxed">With our cutting-edge solutions and exceptional expertise, we are committed toproviding the best services to thrive in the digital age.</p>
              <button className="bg-green hover:bg-darkgreen duration-300 rounded-xl text-sm md:text-base px-6 py-3 text-white font-medium">Start your project now</button>
            </div>
            <div className="w-max hidden lg:block">
              <div className="w-[460px] h-[500px] border-2 border-lightgray rounded-3xl p-10">
                <div className="w-full h-full border-2 border-lightgray rounded-2xl p-10">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                    <img className="w-full h-full object-cover" src="hero_display.jpg" alt="Display Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      {/* Statistics */}
      <div className="w-full h-auto lg:h-52 flex flex-wrap justify-center lg:justify-between gap-8 items-center bg-[#FFFEFE] px-8 lg:px-48 py-12 mb-20">
      <div className="lg:w-fit md:w-1/3 w-full">
        <h1 className="text-green text-4xl text-center font-bold mb-2">50K+</h1>
        <p className="text-lg text-center font-medium">Satisfied clients</p>
      </div>
      <div className="lg:w-fit md:w-1/3 w-full">
        <h1 className="text-green text-4xl text-center font-bold mb-2">100</h1>
        <p className="text-lg text-center font-medium">Projects completed</p>
      </div>
      <div className="lg:w-fit md:w-1/3 w-full">
        <h1 className="text-green text-4xl text-center font-bold mb-2">95%</h1>
        <p className="text-lg text-center font-medium">Client retention rate</p>
      </div>
      <div className="lg:w-fit md:w-1/3 w-full">
        <h1 className="text-green text-4xl text-center font-bold mb-2">$100k</h1>
        <p className="text-lg text-center font-medium">Generated revenue</p>
      </div>
    </div>

      {/* Services */}
      <h1 id="services" className="text-green text-2xl text-center font-bold mb-4">Our Services</h1>
      <h1 className="text-2xl md:text-3xl text-center font-extrabold leading-snug mb-20">Comprehensive Tech<br/>Services for Your Business Needs</h1>

      <div className="flex flex-col lg:flex-row sm:items-center gap-12 justify-center lg:gap-24 margin-sides mb-20">
        <div className="sm:w-3/4 lg:w-80 bg-[#FFFEFE] border-2 border-lightgray rounded-2xl p-10">
          <img className="mb-8" src="/software_dev.svg" alt="Software Development Icon" />
          <h1 className="text-xl font-bold mb-3">Software Development</h1>
          <p className="text-sm text-gray">From concept to execution, we create tailored software solutions that cater to your unique business requirements, enabling seamless processes and increased efficiency.</p>
        </div>

        <div className="sm:w-3/4 lg:w-80 bg-green border-2 border-green rounded-2xl p-10">
          <img className="mb-8" src="/web_dev.svg" alt="Web Development Icon" />
          <h1 className="text-xl text-white font-bold mb-3">Web Development</h1>
          <p className="text-sm text-white">Our expert team crafts visually stunning websites that captivate users and drive engagement, incorporating the latest design trends and responsive technologies.</p>
        </div>

        <div className="sm:w-3/4 lg:w-80 bg-[#FFFEFE] border-2 border-lightgray rounded-2xl p-10">
          <img className="mb-8" src="/it_consulting.svg" alt="IT Consulting Icon" />
          <h1 className="text-xl font-bold mb-3">IT Consulting</h1>
          <p className="text-sm text-gray">Gain a competitive edge with our IT consulting services. We analyze your existing infrastructure, identify opportunities for optimization, and provide insights for growth and scalability.</p>
        </div>
      </div>

      {/* Brands */}
      <div className="w-full flex items-center h-52 bg-[#FFFEFE]">
        <Marquee>
          <img className="mx-8" src="/brands/1_bbc.png" alt="BBC" />
          <img className="mx-8" src="/brands/2_paypal.png" alt="PayPal" />
          <img className="mx-8" src="/brands/3_nike.png" alt="Nike" />
          <img className="mx-8" src="/brands/4_amazon.png" alt="Amazon" />
          <img className="mx-8" src="/brands/5_cocacola.png" alt="Coca Cola" />
          <img className="mx-8" src="/brands/1_bbc.png" alt="BBC" />
          <img className="mx-8" src="/brands/2_paypal.png" alt="PayPal" />
          <img className="mx-8" src="/brands/3_nike.png" alt="Nike" />
          <img className="mx-8" src="/brands/4_amazon.png" alt="Amazon" />
          <img className="mx-8" src="/brands/5_cocacola.png" alt="Coca Cola" />
        </Marquee>
      </div>

      {/* Testimonials */}
      <div id="testimonies" className="w-full h-auto lg:h-[500px] flex justify-between items-center bg-lightgreen sm:px-6 lg:px-12 py-12 mb-20">
        <Carousel 
          transition={{ type: "tween", duration: 0.5 }}
          placeholder=""
          className="rounded-xl"
          prevArrow={({ loop, handlePrev, firstIndex }) => {
            return (
              <button
                onClick={handlePrev}
                disabled={!loop && firstIndex}
                className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all w-12 max-w-[48px] h-12 max-h-[48px] bg-white shadow-sm hover:shadow-lg grid place-items-center pr-1"
              >
                <img src="/left.svg"/>
              </button>
            );
          }}
          nextArrow={({ loop, handleNext, lastIndex }) => (
            <button
              onClick={handleNext}
              disabled={!loop && lastIndex}
              className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all w-12 max-w-[48px] h-12 max-h-[48px] bg-white shadow-sm hover:shadow-lg grid place-items-center pl-1"
            >
              <img src="/right.svg"/>
            </button>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (<div></div>)}
          loop={true}
          autoplay={true}
          autoplayDelay={10000}
        >
          {quotes.map((testimonial, index) => (
            <Testimonial 
            key={index}
            message={testimonial.message}
            name={testimonial.name}
            position={testimonial.position}
            company={testimonial.company}
            image={testimonial.image} />
          ))}
        </Carousel>
      </div>

      {/* FAQs */}
      <h1 id="faqs" className="text-green text-2xl text-center font-bold mb-4">FAQs</h1>
      <h1 className="text-2xl md:text-3xl text-center font-extrabold leading-snug mb-20">Answers to Common Questions<br/>About Our Services</h1>

      <div className="flex flex-wrap justify-center gap-8 margin-sides mb-20">
          {questions.map((question, index) => (
            <Question 
            key={index}
            question={question.question}
            answer={question.answer} />
          ))}
      </div>

      {/* Footer */}
      <footer>
        <div className="w-full bg-[#FFFEFE] px-10 lg:px-[150px] py-20">
          <div className="flex flex-col gap-10 lg:flex-row justify-between">
            <div>
              <div className="flex gap-3.5 items-center mb-10">
                <img className="h-10" src="/techwise_logo.svg" alt="TechWise Logo" />
                <p className="text-3xl font-bold">Tech<span className="text-green">Wise</span></p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-5">
                  <img src="/address.svg" alt="Address" />
                  <p className="text-sm font-medium">936 A. Bonifacio Avenue,<br/>Balintawak, Quezon City</p>
                </div>
                <div className="flex gap-5">
                  <img src="/phone.svg" alt="Address" />
                  <p className="text-sm font-medium">(+63) 917-123-4567</p>
                </div>
                <div className="flex gap-5">
                  <img src="/mail.svg" alt="Address" />
                  <p className="text-sm font-medium">contact@techwhise.com</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-24">
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">Company</h1>
                <a className="text-sm text-gray font-medium">About Us</a>
                <a className="text-sm text-gray font-medium">Blog</a>
                <a className="text-sm text-gray font-medium">Team</a>
                <a className="text-sm text-gray font-medium">Careers</a>
                <a className="text-sm text-gray font-medium">Contact</a>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">Services</h1>
                <a className="text-sm text-gray font-medium">Plans & Pricing</a>
                <a className="text-sm text-gray font-medium">Software Development</a>
                <a className="text-sm text-gray font-medium">Web Development</a>
                <a className="text-sm text-gray font-medium">IT Consulting</a>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">Privacy Policy</h1>
                <a className="text-sm text-gray font-medium">Terms of Service</a>
                <a className="text-sm text-gray font-medium">Data Privacy</a>
                <a className="text-sm text-gray font-medium">Legal</a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between bg-[#FFFEFE] border-t-2 border-lightgray px-10 lg:px-[150px] py-5">
          <p className="text-xs text-gray font-medium">© 2023 TechWise Inc. All rights reserved</p>
          <div className="flex gap-3.5">
            <img src="/facebook.svg" alt="Facebook" />
            <img src="/twitter.svg" alt="Twitter" />
            <img src="/instagram.svg" alt="Instagram" />
            <img src="/github.svg" alt="Github" />
          </div>
        </div>
          
        
      </footer>
      
    </>
    
  )
}
