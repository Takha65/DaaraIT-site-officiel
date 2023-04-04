import React from "react";
import HomeCommission from "./../../components/commissions/homeCommission";
import Input from "../../components/forms/input";
import HeaderSection from "../../components/headerSection/headerSection";
import Actualites from "./Actualites";
import MotDuPresident from "./MotDuPresident";
import Partenaires from "./Partenaires";
import Contact from "./Contact";

const home = () => {

  return (
    <div className="w-full h-screen">
      {/* <div>Banner</div> */}
      {/* <HomeCommission /> */}
      <HeaderSection />
      <div>
        {/* COmmissions 1 */}
        <HomeCommission />
        {/* Actualites */}   
        <Actualites />
        {/* Mot du president 3 */}
        <MotDuPresident />
        {/* Partenaires 4 */}
        <Partenaires />

        {/* Part 5 */}
        <Contact />

        {/* Part 6 */}
        <div className="container-xl  bg-gray-100 px-[4rem] py-[5rem] flex items-center justify-between">
          <h1
            className={
              "text-[1rem] font-[700] border-l-[10px] border-blue-500 px-6 "
            }
          >
            Abonnez vous a notre Newsletter pour vous tenir informer de nos
            activites
          </h1>

          <div className="">
            <Input type={"email"} placeholder={"Email"} />
            <button className="px-2 py-[7px] bg-blue-600 w-[110px] text-white rounded-sm ml-3 ">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
