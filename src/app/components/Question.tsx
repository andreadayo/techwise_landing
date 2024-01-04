import React, { useState } from 'react';
import { Transition } from "@headlessui/react";

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible((prev) => !prev);
  };

  return (
    
    <div className={`w-[540px] bg-[#FFFEFE] border-2 border-lightgray rounded-2xl p-5 relative overflow-hidden transition-all duration-300 ${isAnswerVisible ? 'h-auto' : 'h-auto md:h-16'}`}>
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAnswerVisibility}>
        <p className="font-semibold">{question}</p>
        <img
          className={`h-3.5 transition-transform transform ${isAnswerVisible ? 'rotate-45' : ''}`}
          src="/plus_icon.svg"
          alt="Toggle"
        />
      </div>
      <Transition
          show={isAnswerVisible}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
        <p className="text-sm font-medium mt-3.5">{answer}</p>
      </Transition>
    </div>
  );
};

export default Question;
