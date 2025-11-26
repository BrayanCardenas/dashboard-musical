import Logo from "./Logo"
import { useState } from "react"
const Sidebar = () => {
  const [active, setActive] = useState(false)

  return (
    <aside className="w-64 border border-gray-200 flex flex-col h-screen justify-between">
      <div>
        <div className="flex items-center gap-2 border-b border-gray-200 p-5">
          <Logo size={44} p={2} />
          <h2 className="text-xl font-bold bg-neon bg-clip-text text-transparent">Music Hub</h2>
        </div>
        <ul className="flex flex-col gap-2 p-5">
          <li>
            <button onClick={() => setActive(!active)}
              className={`text-sm text-left font-medium rounded-lg h-10 px-4 py-2 w-full transition-all cursor-pointer
              ${active
                  ? "bg-neon shadow-md"
                  : "hover:bg-sky-500 hover:shadow-md hover:text-white"}
              `}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => setActive(!active)}
              className={`text-sm text-left font-medium rounded-lg h-10 px-4 py-2 w-full transition-all cursor-pointer
              ${active
                  ? "bg-neon shadow-md"
                  : "hover:bg-sky-500 hover:shadow-md hover:text-white"}
              `}
            >
              Agenda
            </button>
          </li>
          <li>
            <button
              onClick={() => setActive(!active)}
              className={`text-sm text-left font-medium rounded-lg h-10 px-4 py-2 w-full transition-all cursor-pointer
              ${active
                  ? "bg-neon shadow-md"
                  : "hover:bg-sky-500 hover:shadow-md hover:text-white"}
              `}
            >
              Músicos
            </button>
          </li>
          <li>
            <button
              onClick={() => setActive(!active)}
              className={`text-sm text-left font-medium rounded-lg h-10 px-4 py-2 w-full transition-all cursor-pointer
              ${active
                  ? "bg-neon shadow-md"
                  : "hover:bg-sky-500 hover:shadow-md hover:text-white"}
              `}
            >
              Canciones
            </button>
          </li>
          <li >
            <button
              onClick={() => setActive(!active)}
              className={`text-sm text-left font-medium rounded-lg h-10 px-4 py-2 w-full transition-all cursor-pointer
              ${active
                  ? "bg-neon shadow-md"
                  : "hover:bg-sky-500 hover:shadow-md hover:text-white"}
              `}
            >
              Configuración
            </button>
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