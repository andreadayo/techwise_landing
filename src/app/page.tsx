import Image from 'next/image'

export default function Home() {
  return (
    <>
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

      <main>
        {/* Hero Section */}
        <div className="flex items-center mb-16 margin-sides">
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
        <h1 className="mb-7 text-3xl text-center font-bold leading-snug">Comprehensive Tech<br/>Services for Your Business Needs</h1>

        

      </main>
    </>
    
  )
}
