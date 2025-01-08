import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [ham, setHam] = useState(false); // toggle state for hamburger menu

  return (
    <div>
      {/* Large screen navigation */}
      <div className="hidden sm:flex justify-between mt-4 mx-4 mb-1 pr-11 mr-10 font-normal">
        <div className="flex">
          <div className="m-1">
            <img
              src="https://zysk.tech/wp-content/uploads/2020/12/zysk-logo.png"
              width={80}
            />
          </div>
          <div className="hidden sm:flex">
            <div className="m-2 pl-4">Home</div>
            <div className="m-2">
              <select>
                <option value="Products">Products</option>
              </select>
            </div>
            <div className="m-2">
              <select>
                <option value="Resources">Resources</option>
              </select>
            </div>
            <div className="m-2">Pricing</div>
          </div>
        </div>
        <div className="m-2">
          <img
            src="https://cdn.prod.website-files.com/65e0d8cbe2b92046ef3f6e6d/65e0d8cce2b92046ef3f6f9a_Avatar%20(5)%20(1).webp"
            width={45}
          />
        </div>
      </div>

      {/* Small screen navigation */}
      <div className="flex items-end mt-4 mx-4 mb-1 sm:hidden">
        <div className="flex items-end">
          <div className="m-1">
            <img
              src="https://zysk.tech/wp-content/uploads/2020/12/zysk-logo.png"
              width={80}
            />
          </div>
          
          <div className="ml-14 pl-24" onClick={() => setHam(!ham)}>
            <GiHamburgerMenu className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      
      {ham && (
        <div className="block sm:hidden flex flex-col items-center mt-2 space-y-2 mx-auto max-w-screen-lg pl-14 ml-10">
          <div className="m-2 pl-4">Home</div>
          <div className="m-2 pl-3">
            <select>
              <option value="Products">Products</option>
            </select>
          </div>
          <div className="m-2 pl-3 py-2">
            <select>
              <option value="Resources">Resources</option>
            </select>
          </div>
          <div className="m-2 pl-4">Pricing</div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Nav;
