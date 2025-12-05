import { useState } from "react";
import Header from "../components/layout/Header";
import AddItem from "../components/AddItem";
import { MailIcon } from "../icons/MailIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import { musicos as initialMusicos } from "../data/data";
import { estadoColors } from "../constants";
import MusicoModal from "../components/MusicoModal";
import { type Musico } from "../types";

const Musicos = ({ title }: { title: string }) => {
  const h1 = "Músicos"
  const p = "Gestiona tu equipo de músicos profesionales"
  const h3 = "Lista de Músicos"
  const btn = "Nuevo Músico"

  const [listaMusicos, setListaMusicos] = useState<Musico[]>(initialMusicos)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingMusico, setEditingMusico] = useState<Musico | null>(null)
  const [editIndex, setEditIndex] = useState<number | null>(null)

  const handleAddMusico = (nuevoMusico: Musico) => {
    setListaMusicos([...listaMusicos, nuevoMusico])
  }

  const handleUpdateMusico = (index: number, updatedMusico: Musico) => {
    const newMusicos = [...listaMusicos]
    newMusicos[index] = updatedMusico
    setListaMusicos(newMusicos)
  }

  const handleDeleteMusico = (index: number) => {
    const newMusicos = [...listaMusicos]
    newMusicos.splice(index, 1)
    setListaMusicos(newMusicos)
  }

  const handleOpenModal = () => {
    setEditingMusico(null)
    setEditIndex(null)
    setIsModalOpen(true)
  }

  const handleOpenModalEdit = (musico: Musico, index: number) => {
    setEditingMusico(musico)
    setEditIndex(index)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingMusico(null)
    setEditIndex(null)
  }

  return (
    <div className="flex-1 flex flex-col">
      <Header title={title} />
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex flex-col gap-6">
          <AddItem h1={h1} p={p} btn={btn} onClick={handleOpenModal} />

          {isModalOpen && (
            <MusicoModal
              onAddMusico={handleAddMusico}
              onUpdateMusico={handleUpdateMusico}
              onClose={handleCloseModal}
              initialData={editingMusico}
              editIndex={editIndex}
            />
          )}

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
                      <th className="h-12 px-4 align-middle font-medium text-foreground text-left">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {listaMusicos.map((musico, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-4 align-middle font-medium">
                          {musico.nombre}
                        </td>
                        <td className="p-4 align-middle">
                          <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border border-border">
                            {musico.instrumento}
                          </div>
                        </td>
                        <td className="p-4 align-middle text-foreground">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MailIcon className="h-3 w-3" />
                              {musico.contacto.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <PhoneIcon className="h-3 w-3" />
                              {musico.contacto.telefono}
                            </div>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold
                          ${estadoColors[musico.estado]}`}>
                            {musico.estado}
                          </div>
                        </td>
                        <td className="p-4 align-middle text-left">
                          <button
                            className="inline-flex items-center justify-center text-sm font-medium h-9 rounded-md px-3 cursor-pointer hover:bg-sky-500 hover:shadow-md hover:text-white"
                            onClick={() => handleOpenModalEdit(musico, index)}
                          >
                            Editar
                          </button>
                          <button
                            className="inline-flex items-center justify-center text-sm font-medium h-9 rounded-md px-3 cursor-pointer hover:bg-red-100 hover:shadow-md hover:text-red-500 ml-2"
                            onClick={() => handleDeleteMusico(index)}
                          >
                            Eliminar
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