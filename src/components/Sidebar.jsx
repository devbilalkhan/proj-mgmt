import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { TbBulldozer } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
 
  const handleCloseSideBar = () =>{
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div
      className="ml-3 h-screen md:overflow-hidden 
      overflow-auto md:hover:overflow-auto pb-10"
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center ">
            <Link
              className="items-center gap-3 ml-3 mt-6 flex text-xl font-bold 
            tracking-tight text-slate-900 dark:text-white"
              to="/"
              onClick={handleCloseSideBar}
            >
              <TbBulldozer className="text-5xl bg-green-400 rounded-full pb-1 px-1 " />
              <span className="w-3/4 flex-wrap leading-tight">
                Corbett Earthmoving
              </span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu(!activeMenu)
                }
                className="text-xl rounded-full p-3 text-gray-400
              hover:text-slate-900 hover:font-bold hover:bg-light-gray 
                    -mt-4 block dark:text-white dark:hover:font-bold"
              >
                <CgClose />
              </button>
            </TooltipComponent>
          </div>
          <div>
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
                {item.title}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
