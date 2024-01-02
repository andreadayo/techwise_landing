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
    <div className="w-full h-full object-cover items-center flex justify-between p-44">
      <div className="">
        <p className="w-[570px] text-2xl font-semibold leading-normal mb-8">{message}</p>
        <div className="flex items-center gap-8">
          <img src="/quote_icon.svg"/>
          <div>
              <p className="text-2xl text-green font-semibold mb-1">{name}</p>
              <p className="text-sm text-gray font-medium">{position} of {company}</p>
          </div>
        </div>
      </div>
      <div>
        <img
            src={image}
            alt={name}
            className="w-80 h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
      </div>
  );
};

export default Testimonial;