import TitleComponent from "../../components/modules/title";
import { sortedEvents } from '../../data/evenements';

const Actualites =()=>  {
  
  const events = sortedEvents.slice(0, 3)


    return ( 
        <div className="container-xl  bg-white px-[4rem] py-[5rem]">
          <TitleComponent title="Actualites" />
          <div className="my-[5rem]" style={{ overflow: "hidden" }}>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> 
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-red-600 bg-cover bg-no-repeat rounded-[4px]"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="h-full w-full flex flex-col justify-center px-[2rem] py-[2.5rem] bg-gradient-to-r from-gray-900 to-gray-50 opacity-50">
                    <h1 className=" text-[1.1rem] font-[700]">{event.title}</h1>
                    <p className="text-white text-[.85rem] mt-3">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
     );
}

export default Actualites;
