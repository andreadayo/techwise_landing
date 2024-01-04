import React from 'react';

interface TestimonialProps {
  message: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ message, name, position, company, image }) => {
  return (
    <div className="w-full h-full object-cover items-center flex justify-between px-24 lg:px-44">
      <div className="">
        <p className="md:w-72 lg:w-[570px] sm:text-lg md:text-xl lg:text-2xl font-semibold leading-normal mb-8">{message}</p>
        <div className="flex items-center gap-4 lg:gap-8">
          <img src="/quote_icon.svg" className="w-14 h-14 lg:w-auto lg:h-auto"/>
          <div>
              <p className="text-xl text-green font-semibold mb-1">{name}</p>
              <p className="text-xs md:text-sm text-gray font-medium">{position} of {company}</p>
          </div>
        </div>
      </div>
      <div>
        <img
            src={image}
            alt={name}
            className="hidden md:block md:w-40 lg:w-80 md:h-40 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
      </div>
  );
};

export default Testimonial;