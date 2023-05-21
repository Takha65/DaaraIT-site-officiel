
import TitleComponent from "../../components/modules/title";
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

          <div className="overflow-x-auto" >
            <div className="flex my-[5rem] overflow-x-auto" style={{ backgroundColor: "#dbe7f2" }}>
              <div className="py-4 flex-shrink-0">
                <img className="w-[150px] mx-4" src={auf} alt="logo" />
              </div>
              <div className="py-4 flex-shrink-0">
                <img className="w-[150px] mx-4" src={bakeli} alt="logo" />
              </div>
              <div className="py-4 flex-shrink-0">
                <img className="w-[150px] mx-4" src={colomb} alt="logo" />
              </div>
              <div className="py-4 flex-shrink-0">
                <img className="w-[150px] mx-4" src={itSchool} alt="logo" />
              </div>
              <div className="py-4 flex-shrink-0">
                <img className="w-[150px] mx-4" src={RootSN} alt="logo" />
              </div>
              <div className="py-4 flex-shrink-0">
                <img className="w-[150px] mx-4" src={xarala} alt="logo" />
              </div>
              <div className="py-4 flex-shrink-0">
                <img className="w-[150px] mx-4" src={Jokko} alt="logo" />
              </div>
              <div className="py-4 flex-shrink-0">
                <img className="w-[150px] mx-4" src={odc} alt="logo" />
              </div>
              <div className="py-4 flex-shrink-0">
                <img className="w-[150px] mx-4" src={peex} alt="logo" />
              </div>
            </div>
          </div>


        </div>
     );
}

export default Partenaires;