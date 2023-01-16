import React from 'react';
import { NavbarDashboard } from './NavbarDashboard';
import { DrawerComponent } from './Drawer';

import AvatarIMG from '../assets/SVG/boy.svg';
/* icones*/

import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import ChatBubbleBottomCenterIcon from '@heroicons/react/24/solid/ChatBubbleBottomCenterIcon';
import AdjustmentsHorizontalIcon from '@heroicons/react/24/solid/AdjustmentsHorizontalIcon';
import BookmarkIcon from '@heroicons/react/24/solid/BookmarkIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import BellIcon from '@heroicons/react/24/solid/BellIcon';

/* icones*/

export function LayoutDashboard() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary text-white drawer-button"
            >
              <div className="d-flex align-items-center">
                <ListBulletIcon className="h-6 w-6" />
              </div>
            </label>
          </div>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <div className="d-flex align-items-center">
                  <BellIcon className="h-6 w-6 " />
                </div>
                <span className="badge badge-sm indicator-item text-neutral bg-transparent">
                  8
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 noticaçoes</span>
                <span className="text-info">1 - Notificação</span>
                <span className="text-info">2 - Notificação</span>
                <span className="text-info">3 - Notificação</span>
                <div className="card-actions">
                  <button className="btn btn-primary text-neutral btn-block">
                    Detalhes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={AvatarIMG} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Perfil
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Configuraçoes</a>
              </li>
              <li>
                <a>Sair</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <div className="d-flex align-items-center">
                <HomeIcon className="h-6 w-6 mr-3" />
                <a>Dashboard</a>
              </div>
            </li>

            <li>
              <div className="d-flex align-items-center">
                <ChatBubbleBottomCenterIcon className="h-6 w-6 mr-3" />
                <a>Chat</a>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <AdjustmentsHorizontalIcon className="h-6 w-6 mr-3" />
                <a>Configuraçoes</a>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <BookmarkIcon className="h-6 w-6 mr-3" />
                <a>Salbos</a>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <UsersIcon className="h-6 w-6 mr-3" />
                <a>Usuarios</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
