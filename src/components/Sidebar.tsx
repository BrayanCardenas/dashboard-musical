import Logo from "./Logo"
import { NavLink } from "react-router-dom"
import { DashboardIcon } from "../icons/DashboardIcon";
import { CalendarIcon } from "../icons/CalendarIcon";
import { UsersIcon } from "../icons/UsersIcon";
import { DiscIcon } from "../icons/DiscIcon";
import { SettingsIcon } from "../icons/SettingsIcon";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-border flex flex-col h-screen justify-between">
      <div>
        <div className="flex items-center gap-2 border-b border-border p-5">
          <Logo size={44} p={2} />
          <h1 className="text-xl font-bold bg-neon bg-clip-text text-transparent">Music Hub</h1>
        </div>
        <ul className="flex flex-col gap-2 p-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block inline-flex items-center gap-3 text-sm text-left font-medium rounded-lg h-10 px-4 py-2 w-full transition-all cursor-pointer
                ${isActive
                  ? "bg-neon shadow-md text-black"
                  : "hover:bg-sky-500 hover:shadow-md hover:text-white"}`
              }
            >
              <DashboardIcon className="lucide lucide-layout-dashboard h-4 w-4" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/agenda"
              className={({ isActive }) =>
                `block inline-flex items-center gap-3 text-sm text-left font-medium rounded-lg h-10 px-4 py-2 w-full transition-all cursor-pointer
                ${isActive
                  ? "bg-neon shadow-md text-black"
                  : "hover:bg-sky-500 hover:shadow-md hover:text-white"}`
              }
            >
              <CalendarIcon className="lucide lucide-calendar h-4 w-4" />
              Agenda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/musicos"
              className={({ isActive }) =>
                `block inline-flex items-center gap-3 text-sm text-left font-medium rounded-lg h-10 px-4 py-2 w-full transition-all cursor-pointer
                ${isActive
                  ? "bg-neon shadow-md text-black"
                  : "hover:bg-sky-500 hover:shadow-md hover:text-white"}`
              }
            >
              <UsersIcon className="lucide lucide-users h-4 w-4" />
              Músicos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/canciones"
              className={({ isActive }) =>
                `block inline-flex items-center gap-3 text-sm text-left font-medium rounded-lg h-10 px-4 py-2 w-full transition-all cursor-pointer
                ${isActive
                  ? "bg-neon shadow-md text-black"
                  : "hover:bg-sky-500 hover:shadow-md hover:text-white"}`
              }
            >
              <DiscIcon className="lucide lucide-disc3 h-4 w-4" />
              Canciones
            </NavLink>
          </li>
          <li >
            <NavLink
              to="/configuracion"
              className={({ isActive }) =>
                `block inline-flex items-center gap-3 text-sm text-left font-medium rounded-lg h-10 px-4 py-2 w-full transition-all cursor-pointer
                ${isActive
                  ? "bg-neon shadow-md text-black"
                  : "hover:bg-sky-500 hover:shadow-md hover:text-white"}`
              }
            >
              <SettingsIcon className="lucide lucide-settings h-4 w-4" />
              Configuración
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="p-5 border-t border-gray-200">
        <button className="text-sm font-medium">Cerrar Sesión</button>
      </div>
    </aside>
  )
}
export default Sidebar