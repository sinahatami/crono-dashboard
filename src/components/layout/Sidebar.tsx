import React, { useState } from 'react';

import {
  LuSearch,
  LuFilePlus2,
  LuChevronsLeft,
  LuChevronsRight,
} from 'react-icons/lu';
import { GrTemplate } from 'react-icons/gr';
import { MdTimeline } from 'react-icons/md';
import { FaTasks, FaCoins } from 'react-icons/fa';
import { PiMailbox } from 'react-icons/pi';
import { BsBarChart } from 'react-icons/bs';
import { TiFlash } from 'react-icons/ti';

import logo from '../../assets/crono-logo.svg';
import { NavItem } from './NavItem';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

interface NavItemData {
  label: string;
  icon: React.ElementType;
  notificationCount?: number;
  subItems?: { label: string }[];
}

const navItems: NavItemData[] = [
  { label: 'Dashboard', icon: GrTemplate },
  { label: 'Find New', icon: LuSearch },
  { label: 'Lists', icon: GrTemplate },
  { label: 'Templates', icon: LuFilePlus2 },
  { label: 'Sequences', icon: MdTimeline },
  { label: 'Tasks', icon: FaTasks },
  { label: 'Inbox', icon: PiMailbox, notificationCount: 24 },
  { label: 'Deals', icon: FaCoins },
  {
    label: 'Analytics',
    icon: BsBarChart,
    subItems: [{ label: 'Reports' }, { label: 'Reports 2' }],
  },
];

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isAnalyticsOpen, setAnalyticsOpen] = useState(false);

  const handleNavItemClick = (label: string, hasSubmenu: boolean) => {
    hasSubmenu ? setAnalyticsOpen(!isAnalyticsOpen) : setActiveItem(label);
  };

  return (
    <aside
      className={`bg-white border-r border-gray-200 flex flex-col h-full transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <img
          src={logo}
          alt="Crono Logo"
          className={`h-7 overflow-hidden transition-all duration-300 ${
            isCollapsed ? 'w-0' : 'w-auto'
          }`}
        />
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg hover:bg-gray-100"
        >
          {isCollapsed ? (
            <LuChevronsRight className="h-5 w-5 text-gray-600" />
          ) : (
            <LuChevronsLeft className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>

      <nav className="flex-1 py-4 space-y-2">
        {navItems.map((item) => (
          <React.Fragment key={item.label}>
            <NavItem
              icon={item.icon}
              label={item.label}
              notificationCount={item.notificationCount}
              isCollapsed={isCollapsed}
              isActive={activeItem === item.label}
              hasSubmenu={!!item.subItems}
              isOpen={item.label === 'Analytics' && isAnalyticsOpen}
              onClick={() => handleNavItemClick(item.label, !!item.subItems)}
            />

            {item.label === 'Analytics' && isAnalyticsOpen && !isCollapsed && (
              <div className="pl-10 py-1 space-y-1">
                {item.subItems?.map((subItem) => (
                  <a
                    href="#"
                    key={subItem.label}
                    className="block text-gray-500 hover:text-gray-800 p-1 rounded-md hover:bg-gray-100 text-base"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </nav>

      <div className="flex items-center border-t border-gray-200">
        <div className={`p-4 overflow-hidden`}>
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
              <TiFlash className="h-6 w-6 text-slate-500" />
            </div>
            <div className={`ml-3 ...`}></div>
          </div>
        </div>
        <div
          className={`ml-3 transition-opacity duration-200 ${
            isCollapsed ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <p className="font-semibold text-sm text-gray-800">
            William Robertson
          </p>
          <p className="text-xs text-gray-500">Sales</p>
        </div>
      </div>
    </aside>
  );
}
