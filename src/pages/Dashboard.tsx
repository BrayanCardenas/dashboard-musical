import Header from "../components/layout/Header"
import { stats } from "../data/data"
import { CalendarIcon } from "../icons/CalendarIcon";
import { UsersIcon } from "../icons/UsersIcon";
import { DiscIcon } from "../icons/DiscIcon";
import { Stonks } from "../icons/Stonks";


const Dashboard = ({ title }: { title: string }) => {

  const h3 = "Próximos Eventos"


  return (
    <div className="flex-1 flex flex-col">
      <Header title={title} />
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex flex-col gap-6">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-lg border border-border shadow-sm">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium text-foreground">
                  Eventos Este Mes
                </h3>
                <div className="p-2 bg-cyan-500/9 rounded-xl">
                  <CalendarIcon className="h-4 w-4 text-neonT" />
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-3xl font-bold">
                  12
                </div>
                <p className="text-xs text-foreground mt-1">
                  +2 desde el mes pasado
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border shadow-sm">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium text-foreground">
                  Músicos Activos
                </h3>
                <div className="p-2 bg-cyan-500/9 rounded-xl">
                  <UsersIcon className="h-4 w-4 text-neonT" />
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-3xl font-bold">
                  34
                </div>
                <p className="text-xs text-foreground mt-1">
                  +5 nuevos miembros
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border shadow-sm">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium text-foreground">
                  Canciones en Repertorio
                </h3>
                <div className="p-2 bg-cyan-500/9 rounded-xl">
                  <DiscIcon className="h-4 w-4 text-neonT" />
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-3xl font-bold">
                  156
                </div>
                <p className="text-xs text-foreground mt-1">
                  +12 este mes
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border shadow-sm">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium text-foreground">
                  Tasa de Ocupación
                </h3>
                <div className="p-2 bg-cyan-500/9 rounded-xl">
                  <Stonks className="h-4 w-4 text-neonT" />
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-3xl font-bold">
                  87%
                </div>
                <p className="text-xs text-foreground mt-1">
                  +15% vs. promedio
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                {h3}
              </h3>
            </div>
            <div className="p-6 pt-0">
              <div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Evento
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Fecha
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Lugar
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {stats.map(({ nombre, fecha, lugar, estado }, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-4 align-middle font-medium">
                          {nombre}
                        </td>
                        <td className="p-4 align-middle">
                          {fecha}
                        </td>
                        <td className="p-4 align-middle">
                          {lugar}
                        </td>
                        <td className="p-4 align-middle">
                          <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
                          ${estado === "Confirmado" ? "bg-neon" : "bg-foreground/20"}`}>
                            {estado}
                          </div>
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
    </div>
  )
}
export default Dashboard