import { useState } from "react";
import Header from "../components/layout/Header";
import AddItem from "../components/AddItem";
import { dificultadColors } from "../constants";
import { MusicNoteIcon } from "../icons/MusicNoteIcon";
import { ClockIcon } from "../icons/ClockIcon";
import { canciones as initialCanciones } from "../data/data"
import CancionModal from "../components/CancionModal";
import { type Cancion } from "../types";

const Canciones = ({ title }: { title: string }) => {
  const h1 = "Repertorio Musical"
  const p = "Administra todas las canciones de tu repertorio"
  const btn = "Nueva Canción"
  const h3 = "Todas las Canciones"

  const [listaCanciones, setListaCanciones] = useState<Cancion[]>(initialCanciones)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCancion, setEditingCancion] = useState<Cancion | null>(null)
  const [editIndex, setEditIndex] = useState<number | null>(null)

  const handleAddCancion = (nuevaCancion: Cancion) => {
    setListaCanciones([...listaCanciones, nuevaCancion])
  }

  const handleUpdateCancion = (index: number, updatedCancion: Cancion) => {
    const newCanciones = [...listaCanciones]
    newCanciones[index] = updatedCancion
    setListaCanciones(newCanciones)
  }

  const handleDeleteCancion = (index: number) => {
    const newCanciones = [...listaCanciones]
    newCanciones.splice(index, 1)
    setListaCanciones(newCanciones)
  }

  const handleOpenModal = () => {
    setEditingCancion(null)
    setEditIndex(null)
    setIsModalOpen(true)
  }

  const handleOpenModalEdit = (cancion: Cancion, index: number) => {
    setEditingCancion(cancion)
    setEditIndex(index)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingCancion(null)
    setEditIndex(null)
  }

  return (
    <div className="flex-1 flex flex-col">
      <Header title={title} />
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex flex-col gap-6">
          <AddItem h1={h1} p={p} btn={btn} onClick={handleOpenModal} />

          {isModalOpen && (
            <CancionModal
              onAddCancion={handleAddCancion}
              onUpdateCancion={handleUpdateCancion}
              onClose={handleCloseModal}
              initialData={editingCancion}
              editIndex={editIndex}
            />
          )}

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

                    {listaCanciones.map((cancion, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-4 align-middle font-medium">
                          {cancion.titulo}
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2 text-foreground">
                            {cancion.artista}
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2 text-foreground">
                            <ClockIcon className="h-4 w-4" />
                            {cancion.duracion}
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border border-border">
                            {cancion.genero}
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold 
                          ${dificultadColors[cancion.dificultad]?.text} ${dificultadColors[cancion.dificultad]?.bg}`}>
                            {cancion.dificultad}
                          </div>
                        </td>
                        <td className="p-4 align-middle text-right">
                          <button
                            className="inline-flex items-center justify-center text-sm font-medium h-9 rounded-md px-3 cursor-pointer hover:bg-sky-500 hover:shadow-md hover:text-white"
                            onClick={() => handleOpenModalEdit(cancion, index)}
                          >
                            Editar
                          </button>
                          <button
                            className="inline-flex items-center justify-center text-sm font-medium h-9 rounded-md px-3 cursor-pointer hover:bg-red-100 hover:shadow-md hover:text-red-500 ml-2"
                            onClick={() => handleDeleteCancion(index)}
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

export default Canciones
