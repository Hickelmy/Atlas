import React from 'react';
import AtlasIMG from '../assets/AtlasNoBg/Atlas1NoBg.png';

import redBall from '../assets/RedBall.png';
import { NavbarComponent } from './Navbar';

export const HeroComponent: React.FC = () => {
  return (
    <main className="flex flex-col xl:flex-row h-screen">
      <NavbarComponent />
      <div className="w-full xl:w-1/2 my-4 h-screen flex items-center justify-center xl:ml-0">
        <div className="w-4/6">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Bem vindo ao
          </h2>
          <h1 className="text-6xl md:text-8xl tracking-tight leading-none font-extrabold text-rose-900">
            ATLAS
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Atlas é uma plataforma de monitoramento e gerenciamento de equipes,
            capaz de aumentar a produtividade e acompanhar o desenvolvimento e
            progressao de atividades.
          </p>

          <div className="mt-5 sm:mt-8 sm:flex justify-start">
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="">
                <button className="btn text-white  bg-rose-900">
                  CONTINUAR
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 m-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
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
    </main>
  );
};
