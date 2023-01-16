import React from 'react';
import { Link } from 'wouter';
import logoAtlas from '../assets/atlas_a.svg';
export const NavbarComponent: React.FC = () => {
  return (
    <nav className="w-full py-4 px-6 xl:w-1/2 flex flex-row items-center justify-center xl:justify-start xl:absolute xl:top-0">
      <div className="navbar bg-base-100">
        <a href="" className="btn btn-ghost normal-case text-xl">
          <img src={logoAtlas} alt="atlas_logo" width="50rem" />
        </a>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/login">LOGIN</Link>
            </li>
            <li>
              <Link href="/forgotpassword">FORGOT PASSWORD</Link>
            </li>
            <li>
              <Link href="/signup">SIGNUP</Link>
            </li>
            <li>
              <Link href="/dashboard">DASHBOARD</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
