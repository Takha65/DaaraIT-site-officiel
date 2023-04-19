
import TitleComponent from "../../components/modules/title";
import image2 from "../../images/Huawei-logo.png";
import auf from "../../images/logo_partenaire/AUF.png" 
import bakeli from "../../images/logo_partenaire/bakeli.png" 
import colomb from "../../images/logo_partenaire/colomb.png" 
import itSchool from "../../images/logo_partenaire/itSchool.jpg" 
import Jokko from "../../images/logo_partenaire/JOKKO.png" 
import odc from "../../images/logo_partenaire/ODC.png" 
import peex from "../../images/logo_partenaire/peex.png" 
import RootSN from "../../images/logo_partenaire/RootSN.jpg" 
import xarala from "../../images/logo_partenaire/xarala.png" 


const Partenaires = ()=> {
    return ( 
        <div className="container-xl  bg-white px-[4rem] py-[5rem]">
          {/* <h1
            className={
              "text-[1.3rem] font-[700] border-l-[10px] border-blue-500 px-6 "
            }
          >
            
          </h1> */}
          <TitleComponent title="Ils nous ont fait confiance" />

          <div className="my-[5rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={auf} alt="logo" />
              </div>
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={bakeli} alt="logo" />
              </div>
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={colomb} alt="logo" />
              </div>
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={itSchool} alt="logo" />
              </div>
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={Jokko} alt="logo" />
              </div>
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={Jokko} alt="logo" />
              </div>
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={Jokko} alt="logo" />
              </div>
              <div className="py-4 flex items-center justify-center shadow-lg">
                <img className="w-[150px]" src={Jokko} alt="logo" />
              </div>
            </div>
          </div>
        </div>
     );
}

export default Partenaires;