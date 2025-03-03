// src/app/home/layout.tsx
export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white p-4 text-center font-semibold">
          Akawo Budget Manager
        </header>
        {children}
      </div>
    );
  }
  