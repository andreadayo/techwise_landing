import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-between">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-8 mb-8 margin-sides">
          <div className="flex gap-2 items-center">
            <img src="/techwise_logo.svg" alt="TechWise Logo" />
            <p className="text-2xl font-bold">TechWise</p>
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
        <div className="w-80 bg-[#FFFEFE] border-2 border-lightgray rounded-3xl p-10">
          <img className="mb-8" src="/software_dev.svg" alt="Software Development Icon" />
          <h1 className="text-xl font-bold mb-3">Software Development</h1>
          <p className="text-sm text-gray">From concept to execution, we create tailored software solutions that cater to your unique business requirements, enabling seamless processes and increased efficiency.</p>
        </div>

        <div className="w-80 bg-green border-2 border-green rounded-3xl p-10">
          <img className="mb-8" src="/web_dev.svg" alt="Web Development Icon" />
          <h1 className="text-xl text-white font-bold mb-3">Web Development</h1>
          <p className="text-sm text-white text-gray">Our expert team crafts visually stunning websites that captivate users and drive engagement, incorporating the latest design trends and responsive technologies.</p>
        </div>

        <div className="w-80 bg-[#FFFEFE] border-2 border-lightgray rounded-3xl p-10">
          <img className="mb-8" src="/it_consulting.svg" alt="IT Consulting Icon" />
          <h1 className="text-xl font-bold mb-3">IT Consulting</h1>
          <p className="text-sm text-gray">Gain a competitive edge with our IT consulting services. We analyze your existing infrastructure, identify opportunities for optimization, and provide insights for growth and scalability.</p>
        </div>
      </div>

      {/* Brands */}
      <div className="w-full h-52 flex justify-between items-center bg-[#FFFEFE] px-48 py-12">
        Brands here
      </div>

      {/* Brands */}
      <div className="w-full h-[500px] flex justify-between items-center bg-lightgreen px-48 py-12 mb-20">
        Testimonials here
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
          Footer
        </div>
      </footer>
      
    </>
    
  )
}
