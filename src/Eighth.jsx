import React from "react";

const Eighth = () => {
  return (
    <div className="bg-slate-50 my-14 py-11 items-center text-center mx-auto">
      <div class="relative w-60 h-24 mx-auto my-4">
        <div class="absolute left-0 top-0">
          <img
            src="https://img.freepik.com/premium-photo/indian-female-software-engineer-smiling_921410-26356.jpg"
            alt="Person 1"
            class="w-20 h-20 rounded-full border-4 border-white"
          />
        </div>

        <div class="absolute left-16 top-0">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.DFRaWaJE3dAIFSkd_xJEQAHaE7&pid=Api&P=0&h=180"
            alt="Person 2"
            class="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>

        <div class="absolute left-32 top-0">
          <img
            src="https://img.freepik.com/premium-photo/indian-female-software-engineer-smiling_921410-26356.jpg"
            alt="Person 3"
            class="w-20 h-20 rounded-full border-4 border-white"
          />
        </div>
      </div>
      <div className="font-bold text-2xl mx-auto">Still have questions?</div>
      <div className="text-slate-400 my-6">
        Can't find the answer you're looking for? Please chat to our friendly
        team.
      </div>
      <div className="m-2">
        <button className="text-white bg-red-600 p-2">Get in touch</button>
      </div>
    </div>
  );
};

export default Eighth;
