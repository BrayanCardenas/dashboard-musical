import { useState, useEffect } from "react"
import { type Cancion, type Nivel } from "../types/index"

interface CancionModalProps {
  onAddCancion: (cancion: Cancion) => void
  onUpdateCancion?: (index: number, cancion: Cancion) => void
  onClose: () => void
  initialData?: Cancion | null
  editIndex?: number | null
}

const CancionModal = ({ onAddCancion, onUpdateCancion, onClose, initialData, editIndex }: CancionModalProps) => {

  type FormData = {
    titulo: string
    artista: string
    duracion: string
    genero: string
    dificultad: Nivel
  }

  const initialFormState: FormData = {
    titulo: '',
    artista: '',
    duracion: '',
    genero: '',
    dificultad: 'Básico'
  }

  const [formData, setFormData] = useState<FormData>(initialFormState)

  useEffect(() => {
    if (initialData) {
      setFormData({
        titulo: initialData.titulo,
        artista: initialData.artista,
        duracion: initialData.duracion,
        genero: initialData.genero,
        dificultad: initialData.dificultad
      })
    } else {
      setFormData(initialFormState)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const cancion: Cancion = {
      titulo: formData.titulo,
      artista: formData.artista,
      duracion: formData.duracion,
      genero: formData.genero,
      dificultad: formData.dificultad
    }

    if (typeof editIndex === 'number' && onUpdateCancion) {
      onUpdateCancion(editIndex, cancion)
    } else {
      onAddCancion(cancion)
    }

    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white flex flex-col gap-4 p-6 rounded-xl w-[450px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold"
        >
          X
        </button>
        <h2 className="text-xl font-bold">{initialData ? 'Editar Canción' : 'Nueva Canción'}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="titulo" className="font-bold">Título</label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            placeholder="Ej: Bohemian Rhapsody"
            value={formData.titulo}
            onChange={handleChange}
            required
          />

          <label htmlFor="artista" className="font-bold">Artista</label>
          <input
            type="text"
            name="artista"
            id="artista"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            placeholder="Ej: Queen"
            value={formData.artista}
            onChange={handleChange}
            required
          />

          <label htmlFor="duracion" className="font-bold">Duración</label>
          <input
            type="text"
            name="duracion"
            id="duracion"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            placeholder="Ej: 5:55"
            value={formData.duracion}
            onChange={handleChange}
            required
          />

          <label htmlFor="genero" className="font-bold">Género</label>
          <input
            type="text"
            name="genero"
            id="genero"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            placeholder="Ej: Rock"
            value={formData.genero}
            onChange={handleChange}
            required
          />

          <label htmlFor="dificultad" className="font-bold">Dificultad</label>
          <select
            name="dificultad"
            id="dificultad"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            value={formData.dificultad}
            onChange={handleChange}
          >
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>

          <div className="flex gap-2 justify-end mt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 rounded-xl font-bold p-2 cursor-pointer hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button type="submit" className="bg-neon rounded-xl font-bold p-2 cursor-pointer">
              {initialData ? 'Guardar Cambios' : 'Añadir Canción'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CancionModal
