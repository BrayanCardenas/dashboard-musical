import Header from "../components/layout/Header";
import AddItem from "../components/AddItem";
import { CalendarIcon } from "../icons/CalendarIcon";
import { MapPinIcon } from "../icons/MapPinIcon";
import { UsersIcon } from "../icons/UsersIcon";

import { eventos } from "../data/data";

const Agenda = ({ title }: { title: string }) => {
  const h1 = "Gestión de Eventos"
  const p = "Organiza y administra todos tus eventos musicales"
  const btn = "Nuevo Evento"
  const h3 = "Todos los Eventos"

  return (
    <div className="flex-1 flex flex-col">
      <Header title={title} />
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex flex-col gap-6">
          <AddItem h1={h1} p={p} btn={btn} />

          <div className="rounded-lg border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-neonT" />
                {h3}
              </h3>
            </div>
            <div className="p-6 pt-0">
              <div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Nombre del Evento
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Fecha
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Lugar
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Músicos
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Estado
                      </th>
                      <th className="h-12 px-4 align-middle font-medium text-foreground text-right">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {eventos.map(({ nombre, fecha, lugar, estado, musicos }, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-4 align-middle font-medium">
                          {nombre}
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2 text-foreground">
                            <CalendarIcon className="h-4 w-4" />
                            {fecha}
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2 text-foreground">
                            <MapPinIcon className="h-4 w-4" />
                            {lugar}
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2 text-foreground">
                            <UsersIcon className="h-4 w-4" />
                            {musicos}
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
                          ${estado === "Confirmado" ? "bg-neon" : "bg-foreground/20"}`}>
                            {estado}
                          </div>
                        </td>
                        <td className="p-4 align-middle text-right">
                          <button className="inline-flex items-center justify-center text-sm font-medium h-9 rounded-md px-3 cursor-pointer hover:bg-sky-500 hover:shadow-md hover:text-white">
                            Editar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >
  )
}

export default Agenda
