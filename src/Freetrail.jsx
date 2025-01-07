import React from 'react';

const FreeTrialSection = () => {
  return (
    <section className="bg-gray-50 py-20 flex justify-center items-center text-center">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Start your free trial
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
            Learn more
          </button>
          <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-500">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
