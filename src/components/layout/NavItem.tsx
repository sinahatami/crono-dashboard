import { LuChevronDown } from 'react-icons/lu';
import type { NavItemInterface } from '../../types/interfaces/navItemInterface';

export function NavItem({
  icon: Icon,
  label,
  isActive = false,
  notificationCount,
  isCollapsed,
  onClick,
  hasSubmenu = false,
  isOpen = false,
}: NavItemInterface) {
  const activeClasses = isActive
    ? 'bg-white text-primary'
    : 'text-gray-500 hover:bg-gray-100';

  return (
    <a
      href="#"
      onClick={onClick}
      className={`relative flex items-center p-3 rounded-lg text-sm transition-colors ${activeClasses} ${
        isCollapsed ? 'justify-center' : ''
      }`}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3/4 w-1 bg-primary-dark rounded-r-full"></div>
      )}

      <Icon className="w-5 h-5 flex-shrink-0 ml-2" />

      <div
        className={`overflow-hidden transition-all duration-200 ${
          isCollapsed ? 'w-0' : 'w-full ml-3'
        }`}
      >
        <span className="whitespace-nowrap text-lg">{label}</span>
      </div>

      {hasSubmenu && !isCollapsed && (
        <LuChevronDown
          className={`text-lg ml-auto h-5 w-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      )}

      {notificationCount && !isCollapsed && (
        <span className="ml-auto bg-amber-400 text-amber-100 text-xs font-bold rounded-full h-5 px-2.5 flex items-center justify-center">
          {notificationCount}
        </span>
      )}
    </a>
  );
}
