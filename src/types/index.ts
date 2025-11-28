export type EstadoEvento = "Confirmado" | "Pendiente"
export type EstadoMusico = "Activo" | "Inactivo"
export type Nivel = "Básico" | "Intermedio" | "Avanzado"
export type EstadoDashboardStat = "Confirmado" | "Pendiente"

export type Evento = {
  nombre: string
  fecha: string
  lugar: string
  musicos: number
  estado: EstadoEvento
}

export type Musico = {
  nombre: string
  instrumento: string
  contacto: {
    email: string
    telefono: string
  }
  estado: EstadoMusico
}

export type Cancion = {
  titulo: string
  artista: string
  duracion: string
  genero: string
  dificultad: Nivel
}

export type DashboardStat = {
  nombre: string
  fecha: string
  lugar: string
  estado: EstadoDashboardStat
}
