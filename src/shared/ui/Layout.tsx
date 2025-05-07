import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* dark:bg-slate-900 */}
      <header className="bg-white shadow-md ">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex gap-6">
          <Link to="/" className="font-bold">
            ClothingShop
          </Link>
          <Link to="/contact" className="ml-auto">
            Contacto
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* dark:bg-slate-800 */}
      <footer className="bg-slate-100  py-4 text-center text-sm">
        ©{new Date().getFullYear()} - All rights reserved
      </footer>
    </div>
  );
}
