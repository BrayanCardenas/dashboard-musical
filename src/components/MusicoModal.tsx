import { useState, useEffect } from "react"
import { type Musico, type EstadoMusico } from "../types/index"

interface MusicoModalProps {
  onAddMusico: (musico: Musico) => void
  onUpdateMusico?: (index: number, musico: Musico) => void
  onClose: () => void
  initialData?: Musico | null
  editIndex?: number | null
}

const MusicoModal = ({ onAddMusico, onUpdateMusico, onClose, initialData, editIndex }: MusicoModalProps) => {

  type FormData = {
    nombre: string
    instrumento: string
    email: string
    telefono: string
    estado: EstadoMusico
  }

  const initialFormState: FormData = {
    nombre: '',
    instrumento: '',
    email: '',
    telefono: '',
    estado: 'Activo'
  }

  const [formData, setFormData] = useState<FormData>(initialFormState)

  useEffect(() => {
    if (initialData) {
      setFormData({
        nombre: initialData.nombre,
        instrumento: initialData.instrumento,
        email: initialData.contacto.email,
        telefono: initialData.contacto.telefono,
        estado: initialData.estado
      })
    } else {
      setFormData(initialFormState)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const musico: Musico = {
      nombre: formData.nombre,
      instrumento: formData.instrumento,
      contacto: {
        email: formData.email,
        telefono: formData.telefono
      },
      estado: formData.estado
    }

    if (typeof editIndex === 'number' && onUpdateMusico) {
      onUpdateMusico(editIndex, musico)
    } else {
      onAddMusico(musico)
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
        <h2 className="text-xl font-bold">{initialData ? 'Editar Músico' : 'Nuevo Músico'}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="nombre" className="font-bold">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            placeholder="Ej: Juan Pérez"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label htmlFor="instrumento" className="font-bold">Instrumento</label>
          <input
            type="text"
            name="instrumento"
            id="instrumento"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            placeholder="Ej: Guitarra"
            value={formData.instrumento}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" className="font-bold">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            placeholder="Ej: juan@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="telefono" className="font-bold">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            id="telefono"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            placeholder="Ej: +57 300 123 4567"
            value={formData.telefono}
            onChange={handleChange}
            required
          />

          <label htmlFor="estado" className="font-bold">Estado</label>
          <select
            name="estado"
            id="estado"
            className="border rounded-xl p-2 border-border text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT"
            value={formData.estado}
            onChange={handleChange}
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
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
              {initialData ? 'Guardar Cambios' : 'Añadir Músico'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MusicoModal
