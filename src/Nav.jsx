import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="flex justify-between mt-4 mx-4 mb-1">
        <div className="flex font-normal">
          <div className="m-1">
            <img
              src="https://zysk.tech/wp-content/uploads/2020/12/zysk-logo.png"
              width={80}
            />
          </div>
          <div className="m-2 pl-4">Home</div>
          <div className="m-2">
            <select>
              <option value="Products  ">Products</option>
            </select>
          </div>
          <div className="m-2">
            <select>
              <option value="Resources  ">Resources</option>
            </select>
          </div>
          <div className="m-2">Pricing</div>
        </div>
        <div className="m-2 mr-12 pr-2">
          <img
            src="https://cdn.prod.website-files.com/65e0d8cbe2b92046ef3f6e6d/65e0d8cce2b92046ef3f6f9a_Avatar%20(5)%20(1).webp"
            width={45}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Nav;
