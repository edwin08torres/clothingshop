import { Outlet} from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* dark:bg-slate-900 */}
      <Header/>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* dark:bg-slate-800 */}
      <Footer/>
    </div>
  );
}
