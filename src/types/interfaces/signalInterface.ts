export interface SignalInterface {
    id: string;
    name: string;
    description: string;
    title: 'Role change' | 'Company change' | 'Website view';
    imagePath: string;
    date: string;
    state: 'In sequence' | null;
    read: boolean;
}