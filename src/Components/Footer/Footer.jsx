import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-0 bg-zinc-950 flex gap-24 py-16 justify-center">
      <div className="">
        <h2 className=" text-white font-semibold text-2xl">Swiggy</h2>
        <span className=" text-zinc-400 mt-4 relative">
          © 2024 Bundl Technologies Pvt. Ltd
        </span>
      </div>
      <div className=" text-zinc-400">
        <ul className=" space-y-3 font-medium">
          <li>
            <h2 className=" text-white font-semibold text-xl">Company</h2>
          </li>
          <li>About</li>
          <li>Careers</li>
          <li>Team</li>
          <li>Swiggy</li>
          <li>One</li>
          <li>Swiggy</li>
          <li>Instamart</li>
          <li>Swiggy</li>
          <li>Genie</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-3 font-medium text-zinc-400">
          <li>
            <h2 className=" text-white font-semibold text-xl">Contact us</h2>
          </li>
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>
            {" "}
            <h2 className="text-white mt-10 font-semibold text-xl">Legal</h2>
          </li>
          <li>Terms & Conditions</li>
          <li>Cookie Policy</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-3 font-medium text-zinc-400">
          <li className=" text-white font-semibold text-xl"><h2>We deliver to:</h2></li>
          <li>Bangalore</li>
          <li>Gurgaon</li>
          <li>Hyderabad</li>
          <li>Delhi</li>
          <li>Mumbai</li>
          <li>Pune</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
