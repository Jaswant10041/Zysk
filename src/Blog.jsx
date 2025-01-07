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
    <section className="blog-section mx-8">
      <div className="blog-header flex justify-between">
        <div>
          <p className="blog-subtitle text-red-700 font-medium">Our blog</p>
          <h1 className="my-2 font-semibold text-3xl">Lastest blog posts</h1>
          <p className="blog-description text-slate-400 mb-6 text-xl">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <div className="mr-5">
          <button className="view-all-btn bg-red-500 rounded-lg p-2 pl-3 text-white ">View all posts</button>
        </div>
      </div>
      <div className="blog-posts md:flex">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card p-2">
            <img src={post.imageUrl} alt={post.title} className="blog-image" />
            <div className="blog-info">
              <span className="category text-red-600 text-medium font-medium">{post.category}</span>
              <div className="flex justify-between text-center">
              <h3 className="font-bold text-xl">{post.title}</h3>
              <GoArrowUpRight className="size-7 pr-2"/>
              </div>
              
              <p className="blog-description">{post.description}</p>
              <div className="author-info flex">
                <img
                  src={post.imageUrl}
                  alt={post.author}
                  className="author-avatar rounded-full size-8 mt-2 mr-2" 
                />
                <div>
                  <p className="author-name">{post.author}</p>
                  <p className="post-date">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
