import { log } from "console";
import React, { useContext } from "react";
import { Context } from "../context/contextApi";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const { mobileMenu, selectedCategory, setSelectedCategory ,setMobileMenu } =
    useContext(Context);
  console.log(mobileMenu);
  console.log(selectedCategory);
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
    setMobileMenu(false);
  };
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240px]  md:translate-x-0 transition-all ${
        mobileMenu ? "!translate-x-0" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => clickHandler(item.name, item.type)}
                className={`${
                  selectedCategory === item.name ? "bg-black/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-[#E6E6E6]/[0.8]" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;
