import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { TbPokeball } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { FiInbox } from "react-icons/fi";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className=" flex w-full bg-white px-36 py-3 items-center justify-between">
      <div className="Logo flex items-center justify-center gap-5">
        <Link to="/">
          <img
            className=" hover:scale-[1.1] ease-out cursor-pointer w-[55px]"
            src="https://cdn.iconscout.com/icon/free/png-256/free-swiggy-1613371-1369418.png?f=webp"
            alt=""
          />
        </Link>
        <div className=" flex gap-3 items-center justify-center ">
          <h5 className=" cursor-pointer font-bold border-b-2 border-zinc-900 text-zinc-600 text-[14px] tracking-wide">
            Other
          </h5>
          <FaAngleDown className=" cursor-pointer text-orange-500 w-5" />
        </div>
      </div>
      <div className=" flex items-center gap-20 text-zinc-600">
        <Link to="/search">
          <div className="flex cursor-pointer hover:text-[#FC8019] items-center justify-center gap-2">
            <CiSearch size={"20px"} fontWeight={900} />
            <h2 className=" font-[600]">Search</h2>
          </div>
        </Link>
        <div className="flex cursor-pointer hover:text-[#FC8019] items-center justify-center gap-2">
          <BiSolidOffer size={"20px"} fontWeight={900} />
          <h2 className=" font-[600]">
            Offers <sup className="text-[#FC8019] font-semibold">NEW</sup>{" "}
          </h2>
        </div>
        <Link to="/help">
          <div className="flex cursor-pointer hover:text-[#FC8019] items-center justify-center gap-2">
            <TbPokeball size={"20px"} fontWeight={900} />
            <h2 className=" font-[600]">Help</h2>
          </div>
        </Link>
        <Link to="/signup">
          <div className="flex cursor-pointer hover:text-[#FC8019] items-center justify-center gap-2">
            <CiUser size={"20px"} fontWeight={900} />
            <h2 className=" font-[600]">Sign In</h2>
          </div>
        </Link>
        <Link to='/cart'>
        <div className="flex cursor-pointer hover:text-[#FC8019] items-center justify-center gap-2">
          <FiInbox size={"20px"} fontWeight={900} />
          <h2 className=" font-[600]">Cart</h2>
        </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
