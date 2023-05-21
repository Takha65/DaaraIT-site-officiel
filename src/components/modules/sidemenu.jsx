import React from "react";
import "./sidemenu.css";
import { ReactComponent as HomeIcon } from "../../ressources/icons/home.svg";
import { GrFacebook, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";

const SideMenu = () => {
  return (
    <div className="h-screen w-[50px] hidden sm:block fixed top-0 bg-[#0C1F3C] flex items-end">
      
      <div className="w-full h-full flex items-center justify-between flex-col pb-2">
        <li className="vide"></li>
        <ul className="h-full flex items-center justify-center flex-col">
          <a
            href="https://www.facebook.com/DaaaraIT?mibextid=LQQJ4d"
            style={{ all: "unset" }}
            target="_blank" rel="noreferrer"
          >
            <li className="item w-6 h-6 my-6 rounded-sm bg-[#23344E] flex items-center justify-center p-1 -rotate-90 hover:scale-110 hover:rotate-0 duration-500 hover:bg-gradient-to-r hover:from-[#2C81FF] hover:via-[#1065E2] hover:to-[#2C81FF]">
              <GrFacebook color="#fff" />
            </li>
          </a>
          <a
            href="https://instagram.com/daara_it_?igshid=YmMyMTA2M2Y="
            style={{ all: "unset" }}
            target="_blank" rel="noreferrer"
          >
            <li className="item w-6 h-6 my-6 rounded-sm bg-[#23344E] flex items-center justify-center p-1 -rotate-90 hover:scale-110 hover:rotate-0 duration-500 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045]">
              <GrInstagram color="#fff" />
            </li>
          </a>
          <a
            href="https://twitter.com/daara_it_com?s=11&t=gmSkSyMbUTzp22d2XxnMLA"
            style={{ all: "unset" }}
            target="_blank" rel="noreferrer"
          >
            <li className="item w-6 h-6 my-6 rounded-sm bg-[#23344E] flex items-center justify-center p-1 -rotate-90 hover:scale-110 hover:rotate-0 duration-500 hover:bg-gradient-to-r hover:from-[#5C9EFF] hover:via-[#2C81FF] hover:to-[#5C9EFF]">
              <GrTwitter color="#fff" />
            </li>
          </a>
          {/* for Linkedin */}
          <a
            href="https://www.linkedin.com/company/daara-it/"
            style={{ all: "unset" }}
            target="_blank" rel="noreferrer"
          >
            <li className="item w-6 h-6 my-6 rounded-sm bg-[#23344E] flex items-center justify-center p-1 -rotate-90 hover:scale-110 hover:rotate-0 duration-500 hover:bg-gradient-to-r hover:from-[#2C81FF] hover:via-[#1065E2] hover:to-[#2C81FF]">
              <GrLinkedin color="#fff" />
            </li>
          </a>
        </ul>
        <li className="item w-6 h-6 rounded-sm bg-[#23344E] flex items-center justify-center p-1 hover:scale-110 hover:rotate-0 duration-500 hover:bg-[#2C81FF]">
          <HomeIcon />
        </li>
      </div>
    </div>
  );
};

export default SideMenu;
