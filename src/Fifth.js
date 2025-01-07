import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { TfiCommentsSmiley } from "react-icons/tfi";

const Fifth = () => {
  return (
    <div className="flex justify-center m-7 my-14 mt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center">
          <div>
            <IoChatbubblesOutline className="border-2 p-2 rounded-md size-10" />
          </div>
          <div>
            <p className="font-medium text-xl">Share team inboxes</p>
          </div>
          <div>
            <p className='text-slate-600'>
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div>
            <SlEnergy className="border-2 p-2 rounded-md size-10" />
          </div>
          <div>
            <p className="font-medium text-xl">Deliver instant answers</p>
          </div>
          <div>
            <p className='text-slate-600'>
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div>
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTfPcURDSZXGxM_K7vOBxICq7AuvNKgm1mqoWxm2000kf53KiD"
              width={45}
            />
          </div>
          <div>
            <p className="font-medium text-xl">Manage your team with reports</p>
          </div>
          <div>
            <p className='text-slate-600'>
              Measure what matters with Untilted's easy-to-use reports.You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div>
          <TfiCommentsSmiley className="border-2 p-2 rounded-md size-10"/>
          </div>
          <div>
            <p className="font-medium text-xl">
              Connect with customers
            </p>
          </div>
          <div>
            <p className='text-slate-600'>
              Solve a problem or close a sale in real-time with chat.If no one is available,customers are seamlessly routed to email without confusion.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div>
          <img
              src="https://as1.ftcdn.net/v2/jpg/01/63/96/90/1000_F_163969048_D4grXvS0TVn1ojsrGfjLOE3WVCstH9cK.jpg"
              width={40}
              className="border-2 rounded-lg p-2"
            />
          </div>
          <div>
            <p className="font-medium text-xl">Connect the tools you already use</p>
          </div>
          <div>
            <p className='text-slate-600'>
            Explore 100+ integrations that make your day-to-day workflow more
            efficient and familiar.Plus, our extensive developer tools.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div>
          <TfiCommentsSmiley className="border-2 p-2 rounded-md size-10"/>
          </div>
          <div>
            <p className="font-medium text-xl">Our people make the difference</p>
          </div>
          <div>
            <p className='text-slate-600'>
            We're an extension of your customer service team, and all of our resources are free.Chat to our friendly team 24/7 when you need help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
