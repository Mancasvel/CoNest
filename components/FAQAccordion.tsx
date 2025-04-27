'use client';

import { useState } from 'react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>(
    faqs.reduce((acc, faq) => {
      acc[faq.id] = !!faq.defaultOpen;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleFaq = (id: string) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <div 
          key={faq.id}
          className={`
            border border-[#191A23] rounded-[45px] overflow-hidden shadow-[0_5px_0_0_rgba(25,26,35,1)]
            ${openFaqs[faq.id] ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'}
            transition-all duration-300
          `}
        >
          <div className="p-10 md:px-16 md:py-10">
            <div className="flex justify-between items-center">
              <div className="flex items-start md:items-center space-x-6 md:space-x-8">
                <span className="text-4xl md:text-5xl font-zodiak-bold text-black">{faq.id}</span>
                <h3 className="text-xl md:text-2xl font-zodiak-bold text-black pt-2 md:pt-0">{faq.question}</h3>
              </div>
              <button 
                onClick={() => toggleFaq(faq.id)}
                className="flex-shrink-0"
                aria-expanded={openFaqs[faq.id]}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <div className="w-[58px] h-[58px] bg-[#F3F3F3] border border-[#191A23] rounded-full flex items-center justify-center">
                  {openFaqs[faq.id] ? (
                    <svg width="18" height="6" viewBox="0 0 18 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="17.76" height="5.64" fill="black"/>
                    </svg>
                  ) : (
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 0V26M0 13H26" stroke="#191A23" strokeWidth="3"/>
                    </svg>
                  )}
                </div>
              </button>
            </div>
            
            {openFaqs[faq.id] && (
              <>
                <div className="w-full h-[1px] bg-black my-6"></div>
                <div 
                  id={`faq-answer-${faq.id}`}
                  className="text-base md:text-lg font-zodiak text-black"
                >
                  {faq.answer}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
} 