import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      imageUrl:
        "https://i.im.ge/2025/01/07/zvHahX.Screenshot-2025-01-07-193210.png",
    },
    {
      id: 2,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      imageUrl:
        "https://i.im.ge/2025/01/07/zvHso9.Screenshot-2025-01-07-193218.png",
    },
    {
      id: 3,
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      imageUrl:
        "https://i.im.ge/2025/01/07/zvHdWK.Screenshot-2025-01-07-193233.png",
    },
  ];

  return (
    <div className="mx-8">
      <div className="flex justify-between mx-4 pt-14">
        <div>
          <p className="text-red-700 font-medium">Our blog</p>
          <h1 className="my-2 font-semibold text-3xl">Latest blog posts</h1>
          <p className="text-slate-400 mb-6 text-xl">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <div className="mr-5">
          <button className="bg-red-500 rounded-lg p-2 pl-3 text-white">
            View all posts
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-4"
          >
            
            <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover rounded-md mb-4" />

            
            <span className="text-red-600 font-medium">{post.category}</span>

            {/* Title */}
            <div className="flex justify-between items-center my-2">
              <h2 className="font-bold text-xl">{post.title}</h2>
              <GoArrowUpRight className="text-red-600 text-2xl" />
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4">{post.description}</p>

            {/* Author and Date */}
            <div className="flex items-center">
              <img
                src={post.imageUrl}
                alt={post.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-gray-400">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
