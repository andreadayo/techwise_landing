'use client';

import { Carousel } from "@material-tailwind/react";
import Testimonial from "./components/Testimonial";
import quotes from '../../public/data/quotes';

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-between">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-8 mb-8 margin-sides">
          <div className="flex gap-2 items-center">
            <img src="/techwise_logo.svg" alt="TechWise Logo" />
            <p className="text-2xl font-bold">Tech<span className="text-green">Wise</span></p>
          </div>
          <div className="flex gap-14 items-center">
            <p className="text-gray font-medium">Home</p>
            <p className="text-gray font-medium">Services</p>
            <p className="text-gray font-medium">Testimonies</p>
            <p className="text-gray font-medium">FAQs</p>
          </div>
          <button className="bg-black rounded-xl px-6 py-3 text-white font-medium">Contact Us</button>
        </nav>

        {/* Hero Section */}
        <div className="grow flex items-center mb-16 margin-sides">
            <div className="grow">
              <div className="mb-8 w-max bg-lightgreen rounded-full px-6 py-3 text-darkgreen font-semibold">Empowering Innovation for the Future of Technology</div>
              <h1 className="mb-7 text-4xl font-bold leading-snug">Empowering Innovation<br/>for the Future of Tech</h1>
              <p className="mb-9 text-gray font-medium leading-relaxed">With our cutting-edge solutions and exceptional expertise, we are committed to<br/>providing the best services to thrive in the digital age.</p>
              <button className="bg-green rounded-xl px-6 py-3 text-white font-medium">Start your project now</button>
            </div>
            <div className="w-max">
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
      <div className="w-full h-52 flex justify-between items-center bg-[#FFFEFE] px-48 py-12 mb-20">
        <div>
          <h1 className="text-green text-4xl text-center font-bold mb-2">50K+</h1>
          <p className="text-lg font-medium">Satisfied clients</p>
        </div>
        <div>
          <h1 className="text-green text-4xl text-center font-bold mb-2">100</h1>
          <p className="text-lg font-medium">Projects completed</p>
        </div>
        <div>
          <h1 className="text-green text-4xl text-center font-bold mb-2">95%</h1>
          <p className="text-lg font-medium">Client retention rate</p>
        </div>
        <div>
          <h1 className="text-green text-4xl text-center font-bold mb-2">$100k</h1>
          <p className="text-lg font-medium">Generated revenue</p>
        </div>
      </div>

      {/* Services */}
      <h1 className="text-green text-2xl text-center font-bold mb-4">Our Services</h1>
      <h1 className="text-3xl text-center font-extrabold leading-snug mb-20">Comprehensive Tech<br/>Services for Your Business Needs</h1>

      <div className="flex justify-center gap-24 margin-sides mb-20">
        <div className="w-80 bg-[#FFFEFE] border-2 border-lightgray rounded-2xl p-10">
          <img className="mb-8" src="/software_dev.svg" alt="Software Development Icon" />
          <h1 className="text-xl font-bold mb-3">Software Development</h1>
          <p className="text-sm text-gray">From concept to execution, we create tailored software solutions that cater to your unique business requirements, enabling seamless processes and increased efficiency.</p>
        </div>

        <div className="w-80 bg-green border-2 border-green rounded-2xl p-10">
          <img className="mb-8" src="/web_dev.svg" alt="Web Development Icon" />
          <h1 className="text-xl text-white font-bold mb-3">Web Development</h1>
          <p className="text-sm text-white text-gray">Our expert team crafts visually stunning websites that captivate users and drive engagement, incorporating the latest design trends and responsive technologies.</p>
        </div>

        <div className="w-80 bg-[#FFFEFE] border-2 border-lightgray rounded-2xl p-10">
          <img className="mb-8" src="/it_consulting.svg" alt="IT Consulting Icon" />
          <h1 className="text-xl font-bold mb-3">IT Consulting</h1>
          <p className="text-sm text-gray">Gain a competitive edge with our IT consulting services. We analyze your existing infrastructure, identify opportunities for optimization, and provide insights for growth and scalability.</p>
        </div>
      </div>

      {/* Brands - might update to https://magicui.design/components/marquee */}
      <div className="w-full h-52 bg-[#FFFEFE] py-12">
        <div className="relative flex overflow-x-hidden">
          <div className="py-6 flex items-center animate-marquee whitespace-nowrap">
            <img className="mx-8" src="/brands/1_bbc.png" alt="BBC" />
            <img className="mx-8" src="/brands/2_paypal.png" alt="PayPal" />
            <img className="mx-8" src="/brands/3_nike.png" alt="Nike" />
            <img className="mx-8" src="/brands/4_amazon.png" alt="Amazon" />
            <img className="mx-8" src="/brands/5_cocacola.png" alt="Coca Cola" />
          </div>

          <div className="absolute flex items-center top-0 py-6 animate-marquee2 whitespace-nowrap">
            <img className="mx-8" src="/brands/1_bbc.png" alt="BBC" />
            <img className="mx-8" src="/brands/2_paypal.png" alt="PayPal" />
            <img className="mx-8" src="/brands/3_nike.png" alt="Nike" />
            <img className="mx-8" src="/brands/4_amazon.png" alt="Amazon" />
            <img className="mx-8" src="/brands/5_cocacola.png" alt="Coca Cola" />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full h-[500px] flex justify-between items-center bg-lightgreen px-12 py-12 mb-20">
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
      <h1 className="text-green text-2xl text-center font-bold mb-4">FAQs</h1>
      <h1 className="text-3xl text-center font-extrabold leading-snug mb-20">Answers to Common Questions<br/>About Our Services</h1>

      <div className="flex flex-wrap justify-center gap-8 margin-sides mb-20">
        {/* Note: change to components */}
        <div className="w-[540px] flex justify-between items-center bg-[#FFFEFE] border-2 border-lightgray rounded-2xl p-6">
          <p className="font-semibold">What industries do you specialize in?</p>
          <img className="h-3.5" src="/plus_icon.svg" alt="Open" />
        </div>
        <div className="w-[540px] flex justify-between items-center bg-[#FFFEFE] border-2 border-lightgray rounded-2xl p-6">
          <p className="font-semibold">What industries do you specialize in?</p>
          <img className="h-3.5" src="/plus_icon.svg" alt="Open" />
        </div>
        <div className="w-[540px] flex justify-between items-center bg-[#FFFEFE] border-2 border-lightgray rounded-2xl p-6">
          <p className="font-semibold">What industries do you specialize in?</p>
          <img className="h-3.5" src="/plus_icon.svg" alt="Open" />
        </div>
        <div className="w-[540px] flex justify-between items-center bg-[#FFFEFE] border-2 border-lightgray rounded-2xl p-6">
          <p className="font-semibold">What industries do you specialize in?</p>
          <img className="h-3.5" src="/plus_icon.svg" alt="Open" />
        </div>
        <div className="w-[540px] flex justify-between items-center bg-[#FFFEFE] border-2 border-lightgray rounded-2xl p-6">
          <p className="font-semibold">What industries do you specialize in?</p>
          <img className="h-3.5" src="/plus_icon.svg" alt="Open" />
        </div>
        <div className="w-[540px] flex justify-between items-center bg-[#FFFEFE] border-2 border-lightgray rounded-2xl p-6">
          <p className="font-semibold">What industries do you specialize in?</p>
          <img className="h-3.5" src="/plus_icon.svg" alt="Open" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="w-full bg-[#FFFEFE] px-[150px] py-20">
          <div className="flex justify-between">
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
            
            <div className="flex gap-24">
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

        <div className="w-full flex justify-between bg-[#FFFEFE] border-t-2 border-lightgray px-[150px] py-5">
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
