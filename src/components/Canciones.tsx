import Header from "./Header";
import AddItem from "./AddItem";
import { MusicNoteIcon } from "../icons/MusicNoteIcon";
import { ClockIcon } from "../icons/ClockIcon";
import { canciones } from "../data/data"

const Canciones = ({ title }: { title: string }) => {
  const h1 = "Repertorio Musical"
  const p = "Administra todas las canciones de tu repertorio"
  const btn = "Nueva Canción"
  const h3 = "Todas las Canciones"

  type Nivel = "Básico" | "Intermedio" | "Avanzado"

  const dificultadColors: Record<Nivel, { text: string; bg: string }> = {
    Básico: { text: "text-green-600", bg: "bg-green-100" },
    Intermedio: { text: "text-yellow-500", bg: "bg-yellow-100" },
    Avanzado: { text: "text-red-500", bg: "bg-red-100" }
  }
  
  return (
    <div className="flex-1 flex flex-col">
      <Header title={title} />
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex flex-col gap-6">
          <AddItem h1={h1} p={p} btn={btn} />

          <div className="rounded-lg border border-border">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                <MusicNoteIcon className="h-5 w-5 text-neonT" />
                {h3}
              </h3>
            </div>
            <div className="p-6 pt-0">
              <div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Titulo
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Artista
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Duración
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Genero
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Dificultad
                      </th>
                      <th className="h-12 px-4 align-middle font-medium text-foreground text-right">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {canciones.map(({ titulo, artista, duracion, genero, dificultad }) => (
                      <tr className="border-b border-border">
                        <td className="p-4 align-middle font-medium">
                          {titulo}
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2 text-foreground">
                            {artista}
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2 text-foreground">
                            <ClockIcon className="h-4 w-4" />
                            {duracion}
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border border-border">
                            {genero}
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold 
                          ${dificultadColors[dificultad]?.text} ${dificultadColors[dificultad]?.bg}`}>
                            {dificultad}
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

export default Canciones
