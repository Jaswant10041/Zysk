import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time without any fees."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add details like company name, VAT number, and more."
    },
    {
      question: "How does billing work?",
      answer: "We charge you at the beginning of each billing cycle based on your plan."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your email in your account settings."
    },
  ];

  return (
    <div className="max-w-2xl mb-10 mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently asked questions</h2>
      <p className="text-center text-gray-500 mb-10">Everything you need to know about the product and billing.</p>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center py-4 focus:outline-none text-left"
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <span className="text-gray-400">
              {openIndex === index ? '-' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
