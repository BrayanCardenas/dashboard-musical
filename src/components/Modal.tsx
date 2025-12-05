import { useState } from "react"
import { type Evento, type EstadoEvento } from "../types/index"

interface ModalProps {
  onAddEvent: (evento: Evento) => void
  onClose: () => void
  initialData?: Evento | null
  editIndex?: number | null
  onUpdateEvent?: (index: number, evento: Evento) => void
}

const Modal = ({ onAddEvent, onClose, initialData, editIndex, onUpdateEvent }: ModalProps) => {

  type FormData = {
    nombre: string
    fecha: string
    lugar: string
    musicos: string
    estado: string
  }

  const initialFormState = {
    nombre: '',
    fecha: '',
    lugar: '',
    musicos: '',
    estado: 'Pendiente'
  }

  const [formData, setFormData] = useState<FormData>(
    initialData
      ? {
        nombre: initialData.nombre,
        fecha: initialData.fecha,
        lugar: initialData.lugar,
        musicos: String(initialData.musicos),
        estado: initialData.estado
      }
      : initialFormState
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const evento: Evento = {
      nombre: formData.nombre,
      fecha: formData.fecha,
      lugar: formData.lugar,
      musicos: formData.musicos === "" ? 0 : Number(formData.musicos),
      estado: formData.estado as EstadoEvento
    }

    if (typeof editIndex === 'number' && onUpdateEvent) {
      onUpdateEvent(editIndex, evento)
    }
    else {
      onAddEvent(evento)
    }

    onClose()
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
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
        <h2 className="text-xl font-bold">Nuevo Evento</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="nombre" className="font-bold">Nombre del Evento</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            placeholder="Ej: Concierto de Rock"
            value={formData.nombre}
            onChange={handleChange}
          />
          <label htmlFor="fecha" className="font-bold">Fecha</label>
          <input
            type="date"
            name="fecha"
            id="fecha"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            value={formData.fecha}
            onChange={handleChange}
          />
          <label htmlFor="lugar" className="font-bold">Lugar</label>
          <input
            type="text"
            name="lugar"
            id="lugar"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            placeholder="Ej: Teatro Mayor"
            value={formData.lugar}
            onChange={handleChange}
          />
          <label htmlFor="musicos" className="font-bold">Músicos</label>
          <input
            type="number"
            name="musicos"
            id="musicos"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            placeholder="Ej: 5"
            value={formData.musicos}
            onChange={handleChange}
          />
          <label htmlFor="estado" className="font-bold">Estado</label>
          <select
            name="estado"
            id="estado"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            value={formData.estado}
            onChange={handleChange}
          >
            <option value="Pendiente">Pendiente</option>
            <option value="Confirmado">Confirmado</option>
          </select>

          <div className="flex gap-2 justify-end mt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 rounded-xl font-bold p-2 cursor-pointer hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button type="submit" className="bg-neon rounded-xl font-bold p-2 cursor-pointer"
            >
              Añadir Evento
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Modal
