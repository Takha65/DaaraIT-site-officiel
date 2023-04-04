import React from 'react';
import HomeCommission from './../../components/commissions/homeCommission';
import Input from '../../components/forms/input';
import HeaderSection from '../../components/headerSection/headerSection';
import Actualites from './Actualites';
import MotDuPresident from './MotDuPresident';
import Partenaires from './Partenaires';

const home = () => {
  return (
    <div className="w-full h-auto">
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
        <div className="container-xl  bg-blue-600 px-[4rem] py-[5rem]">
          <h1
            className={
              'text-[1.3rem] font-[700] border-l-[10px] border-black px-6 text-white '
            }
          >
            Pour nous contacter
          </h1>

          <div className="my-[5rem]">
            <div className="grid grid-cols-5 gap-10">
              <div className="col-span-3">
                <div className="grid grid-cols-2 gap-5">
                  <Input type="text" placeholder="Prenom et nom *" />
                  <Input type="e-mail" placeholder="Email *" />
                </div>
                <div className="grid grid-cols-2 gap-5 mt-4">
                  <Input placeholder="Objet *" />
                  <Input type="tel" placeholder="Telephone *" />
                </div>
                <div className="grid grid-cols-1 mt-4 bg-white p-2">
                  <textarea
                    name=""
                    placeholder="Votre message ici..."
                    id=""
                    rows="4"
                    style={{ padding: 10, fontSize: 14, outline: 'none' }}
                  ></textarea>
                  <div className="flex items-center justify-end mt-2">
                    <button className="px-2 py-1 bg-blue-600 w-[110px] text-white rounded-sm ">
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
              <div className="shadow-lg rounded-md col-span-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv392py081PUJ4sOqA0_CaQ7G3ncuICzgq2w&usqp=CAU"
                  alt=""
                  className="w-full h-full"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Part 6 */}
        <div className="container-xl  bg-gray-100 px-[4rem] py-[5rem] flex items-center justify-between">
          <h1
            className={
              'text-[1rem] font-[700] border-l-[10px] border-blue-500 px-6 '
            }
          >
            Abonnez vous a notre Newsletter pour vous tenir informer de nos
            activites
          </h1>

          <div className="">
            <Input type={'email'} placeholder={'Email'} />
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
