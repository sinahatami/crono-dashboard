export interface NavItemInterface {
    icon: React.ElementType;
    label: string;
    isActive?: boolean;
    notificationCount?: number;
    isCollapsed: boolean;
    onClick: () => void;
    hasSubmenu?: boolean;
    isOpen?: boolean;
}