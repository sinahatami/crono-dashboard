import { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { useWindowWidth } from '../../hooks/useWindowWidth';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarManuallyCollapsed, setIsSidebarManuallyCollapsed] =
    useState(false);
  const windowWidth = useWindowWidth();

  const isCollapsed = windowWidth < 1024 || isSidebarManuallyCollapsed;

  useEffect(() => {
    if (windowWidth < 1024) {
      setIsSidebarManuallyCollapsed(true);
    } else {
      setIsSidebarManuallyCollapsed(false);
    }
  }, [windowWidth]);

  return (
    <div className="flex h-screen">
      {' '}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsSidebarManuallyCollapsed}
      />
      <main className="flex-1 overflow-y-auto p-8 bg-gray-50"> {children}</main>
    </div>
  );
}
