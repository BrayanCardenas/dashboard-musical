import Header from "./Header";
import AddItem from "./AddItem";
import { MailIcon } from "../icons/MailIcon";
import { PhoneIcon } from "../icons/PhoneIcon";

const Musicos = ({ title }: { title: string }) => {
  const h1 = "Músicos"
  const p = "Gestiona tu equipo de músicos profesionales"
  const h3 = "Lista de Músicos"
  const btn = "Nuevo Músico"

  const itemsMusicos = [
    {
      "nombre": "Carlos Rodríguez",
      "instrumento": "Guitarra",
      "contacto": {
        "email": "carlos@music.com",
        "telefono": "+34 600 123 456"
      },
      "estado": "Activo",
      "acciones": "Editar"
    },
    {
      "nombre": "María González",
      "instrumento": "Voz",
      "contacto": {
        "email": "maria@music.com",
        "telefono": "+34 600 234 567"
      },
      "estado": "Activo",
      "acciones": "Editar"
    },
    {
      "nombre": "Juan Pérez",
      "instrumento": "Batería",
      "contacto": {
        "email": "juan@music.com",
        "telefono": "+34 600 345 678"
      },
      "estado": "Inactivo",
      "acciones": "Editar"
    },
    {
      "nombre": "Ana Martínez",
      "instrumento": "Piano",
      "contacto": {
        "email": "ana@music.com",
        "telefono": "+34 600 456 789"
      },
      "estado": "Activo",
      "acciones": "Editar"
    },
    {
      "nombre": "Pedro López",
      "instrumento": "Bajo",
      "contacto": {
        "email": "pedro@music.com",
        "telefono": "+34 600 567 890"
      },
      "estado": "Activo",
      "acciones": "Editar"
    }
  ]

  return (
    <div className="flex-1 flex flex-col">
      <Header title={title} />
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex flex-col gap-6">
          <AddItem h1={h1} p={p} btn={btn} />

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
                        Nombre
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Instrumento
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-foreground">
                        Contacto
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

                    {itemsMusicos.map(({ nombre, instrumento, contacto, estado }) => (
                      <tr className="border-b border-border">
                        <td className="p-4 align-middle font-medium">
                          {nombre}
                        </td>
                        <td className="p-4 align-middle">
                          <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border border-border">
                            {instrumento}
                          </div>
                        </td>
                        <td className="p-4 align-middle text-foreground">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MailIcon className="h-3 w-3" />
                              {contacto.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <PhoneIcon className="h-3 w-3" />
                              {contacto.telefono}
                            </div>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
                          ${estado === "Activo" ? "bg-neon" : "bg-foreground/20"}`}>
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
export default Musicos