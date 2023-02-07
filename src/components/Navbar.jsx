import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content="{title}" position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
        {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, 
    screenSize, setScreenSize,
    isClicked, setIsClicked, handleClick } =
    useStateContext();
    
    useEffect(()=>{
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize)

      handleResize()

      return ()=> window.removeEventListener("resize", handleResize)
    },[]);

    useEffect(()=>{
      if(screenSize <=900 ){
        setActiveMenu(false);
      } else {
        setActiveMenu(true)
      }
    }, [screenSize])
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu(!activeMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <TooltipComponent content="Profile" position="Bottom">
          <div
            className="flex items-center gap-2 cursor-pointer 
          rounded-lg p-1 hover:bg-light-gray"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>
              <span className="text-gray-400 text-14 ml-1 font-bold">Brad</span>
            </p>
            <MdKeyboardArrowDown className="text-14 text-gray-400" />
          </div>
        </TooltipComponent>
        {isClicked.UserProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
