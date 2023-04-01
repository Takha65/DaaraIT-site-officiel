import React from "react";
import "./App.css";
import HomeCommission from "./components/commissions/homeCommission";
import HeaderSection from "./components/headerSection/headerSection";

import AppTemplate from "./layouts/AppTemplate";
import image from "./images/IMG_8278.jpg";
import {
  IconAntennaBars5,
  IconBraces,
  IconHierarchy2,
  IconLanguage,
  IconMicrophone2,
  IconSearch,
} from "@tabler/icons-react";

function App() {
  const minCard = [
    {
      icon: IconBraces,
      title: "Programmation",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing Soluta tenetur.",
    },
    {
      icon: IconSearch,
      title: "Pentest",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing Soluta tenetur.",
    },
    {
      icon: IconAntennaBars5,
      title: "Reseaux",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing Soluta tenetur.",
    },
    {
      icon: IconHierarchy2,
      title: "Organisation",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing Soluta tenetur.",
    },
    {
      icon: IconLanguage,
      title: "Anglais",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing Soluta tenetur.",
    },
    {
      icon: IconMicrophone2,
      title: "Communication",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing Soluta tenetur.",
    },
  ];

  return (
    <div className="App">
      <AppTemplate>
        <HeaderSection />
        {/* <HomeCommission /> */}

        {/* Part 1 */}
        <div className="container-xl  bg-gray-50 px-[4rem] py-[5rem]">
          <h1
            className={
              "text-[1.3rem] font-[700] border-l-[10px] border-blue-500 px-6 "
            }
          >
            No fortes commissions
          </h1>
          <div className=" my-[4rem]">
            <div className="">
              <p className="text-[0.84rem] my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit officia deleniti, ea possimus amet, atque minima
                tenetur, commodi dignissimos doloremque debitis accusamus?
                Molestiae iste autem eius explicabo incidunt quisquam cumque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                alias at laudantium ab numquam, porro magnam corrupti! Nihil,
                quasi similique, deserunt quae labore inventore pariatur hic,
                nobis molestiae dolore animi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sed illo hic provident vitae minus
                iure possimus tempora perspiciatis ut earum ad, aliquam
                consectetur, est excepturi quas natus voluptatem, iste
                doloribus! Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="mt-[3rem]">
              <p className="text-[0.84rem] my-4">
                Commodi quia temporibus autem eligendi, molestias doloribus,
                dolorum cumque vel illo odio tempora quos praesentium impedit
                nostrum, in rerum neque dignissimos expedita? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quia alias at laudantium
                ab numquam, porro magnam corrupti! Nihil, quasi similique,
                deserunt quae labore inventore pariatur hic, nobis molestiae
                dolore animi. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sed illo hic provident vitae minus iure possimus tempora
                perspiciatis ut earum ad, aliquam consectetur, est excepturi
                quas natus voluptatem, iste doloribus! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Commodi quia temporibus autem
                eligendi, molestias doloribus, dolorum cumque vel illo odio
                tempora quos praesentium impedit nostrum, in rerum neque
                dignissimos expedita?
              </p>
            </div>

            <div className="h-[1px] bg-gray-400 my-[5rem]"></div>

            <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[5rem]">
              {minCard.map((item, index) => (
                <div className="grid grid-cols-3 gap-10" key={index}>
                  <div className="bg-white rounded-md flex items-center justify-center shadow-lg h-[90px] text-blue-500">
                    <item.icon />
                  </div>
                  <div className="col-span-2">
                    <h1 className="text-[1.3rem] font-[500] mb-2">
                      {item.title}
                    </h1>
                    <p className="text-[.73rem]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Part 2 */}
        <div className="container-xl  bg-white px-[4rem] py-[5rem]">
          <h1
            className={
              "text-[1.3rem] font-[700] border-l-[10px] border-blue-500 px-6 "
            }
          >
            Nos actualites
          </h1>

          <div className="my-[5rem]">Nos cousel ici</div>
        </div>

        {/* Part 3 */}
        <div className="container-xl  bg-gray-50 px-[4rem] py-[5rem]">
          <h1
            className={
              "text-[1.3rem] font-[700] border-l-[10px] border-blue-500 px-6 "
            }
          >
            Le mot du president
          </h1>
          <div className="grid grid-cols-3 my-[3rem] gap-7">
            <div className="h-[25rem]">
              <img
                src={image}
                alt=""
                className="h-full w-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-span-2">
              <div className="flex  items-center text-blue-500">
                <h1
                  className={
                    "text-[1rem] font-[700] border-r-[5px] border-blue-500 pr-6 w-[2258x] mr-2"
                  }
                >
                  GERARD DACOSTA
                </h1>
                <span className="text-[0.75rem]">President de Daara-IT</span>
              </div>

              <p className="text-[0.84rem] my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit officia deleniti, ea possimus amet, atque minima
                tenetur, commodi dignissimos doloremque debitis accusamus?
                Molestiae iste autem eius explicabo incidunt quisquam cumque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                alias at laudantium ab numquam, porro magnam corrupti! Nihil,
                quasi similique, deserunt quae labore inventore pariatur hic,
                nobis molestiae dolore animi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Sed illo hic provident vitae minus
                iure possimus tempora perspiciatis ut earum ad, aliquam
                consectetur, est excepturi quas natus voluptatem, iste
                doloribus! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Commodi quia temporibus autem eligendi, molestias
                doloribus, dolorum cumque vel illo odio tempora quos praesentium
                impedit nostrum, in rerum neque dignissimos expedita? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quia alias at
                laudantium ab numquam, porro magnam corrupti! Nihil, quasi
                similique, deserunt quae labore inventore pariatur hic, nobis
                molestiae dolore animi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sed illo hic provident vitae minus iure
                possimus tempora perspiciatis ut earum ad, aliquam consectetur,
                est excepturi quas natus voluptatem, iste doloribus! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Commodi quia
                temporibus autem eligendi, molestias doloribus, dolorum cumque
                vel illo odio tempora quos praesentium impedit nostrum, in rerum
                neque dignissimos expedita?
              </p>
              <h1 className={"text-[0.8rem] font-[700] text-blue-500"}>
                " L'informatique plus qu'une passion, un monde de vie "
              </h1>
            </div>
          </div>
          {/* <div
          className={
            " flex justify-center items-center  h-full p-[3.2rem] col-span-3"
          }
        >
          <div>
            <h1 className={"text-[2.2rem] font-[600]"}>
              L'informatique plus qu'une passion, un{" "}
              <span className={"text-blue-500"}>mode de vie</span>
            </h1>
            <p className={"text-[0.99rem] font-[500] my-6"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque accusantium aliquid ab deleniti ea laboriosam, veniam
              officia rerum, vitae eos ipsum aut sapiente dignissimos soluta!
              Maiores recusandae consectetur corrupti eum!
            </p>
            <button className={"bg-blue-500 text-white p-3 rounded-md"}>
              Regarder une video
            </button>
          </div>
          </div>
        <div className="h-[38rem] col-span-4">
          <img
            src={image}
            alt=""
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          />
        </div>*/}
        </div>
      </AppTemplate>
    </div>
  );
}

export default App;
