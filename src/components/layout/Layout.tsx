import { Sidebar } from './Sidebar';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}