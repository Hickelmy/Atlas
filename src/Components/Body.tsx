import React from 'react';
import AtlasIMG from '../assets/AtlasNoBg/Atlas1NoBg.png';

import redBall from '../assets/RedBall.png';

export const BodyComponent: React.FC = () => {
  return (
    <main className="flex flex-col xl:flex-row h-screen">
      <div className="w-full xl:w-1/2 my-4 h-screen flex items-center justify-center">
        <div className="w-4/6">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Bem vindo ao
          </h2>
          <h1 className="text-6xl md:text-8xl tracking-tight leading-none font-extrabold text-cyan-500">
            ATLAS
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo.
          </p>

          <div className="mt-5 sm:mt-8 sm:flex justify-start">
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="">
                <button className="btn btn-primary">CONTINUAR</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-1/2 h-screen">
        <img
          className="object-cover w-full h-screen max-w-xl absolute "
          src={AtlasIMG}
          alt="Robot Group"
        />
        <img src={redBall} alt="" className="" />
      </div>
      {/* 
      <div className="w-full object-cover h-72 lg:w-full md:h-screen bg-cover bg-center">
        <img src={AtlasIMG} className="max-w-xl rounded-lg absolute " />

        <img src={redBall} alt="" className="" />
      </div> */}
    </main>
  );
};
