import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-10 sm:px-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Product Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Overview
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Features
                </a>
              </li>
              <li className="flex items-center">
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Solutions
                </a>
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  New
                </span>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Tutorials
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  About us
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Press
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  News
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Media kit
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Newsletter
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Events
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Help centre
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Tutorials
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Use Cases Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
              Use cases
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Startups
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Enterprise
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Government
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  SaaS centre
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Marketplaces
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Ecommerce
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
              Social
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  GitHub
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  AngelList
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Terms
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Cookies
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Licenses
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Settings
                </a>
              </li>
              <li>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex justify-between items-center flex-row-reverse">
            <p className="text-base text-gray-500">
              &copy; 2077 zysktechnologies. All rights reserved.
            </p>
            <img
              src="https://zysk.tech/wp-content/uploads/2020/12/zysk-logo.png"
              alt="Company Logo"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
