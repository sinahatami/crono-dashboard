export interface NavItemDataInterface {
    label: string;
    icon: React.ElementType;
    notificationCount?: number;
    subItems?: { label: string }[];
}