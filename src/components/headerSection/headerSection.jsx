import React from "react";
import image from "../../images/IMG_8278.jpg";

function HeaderSection() {
  return (
    <div className="container-xl h-[38rem] bg-white mx-auto grid grid-cols-7">
      <div
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            accusantium aliquid ab deleniti ea laboriosam, veniam officia rerum,
            vitae eos ipsum aut sapiente dignissimos soluta! Maiores recusandae
            consectetur corrupti eum!
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
      </div>
    </div>
  );
}

export default HeaderSection;
