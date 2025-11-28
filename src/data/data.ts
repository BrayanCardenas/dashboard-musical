// Tipos
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

// Datos
export const eventos: Evento[] = [
  { nombre: "Concierto Rock Festival", fecha: "2025-12-15", lugar: "Arena Central", musicos: 8, estado: "Confirmado" },
  { nombre: "Jazz Night", fecha: "2025-12-20", lugar: "Blue Note Club", musicos: 5, estado: "Pendiente" },
  { nombre: "Acoustic Session", fecha: "2025-12-25", lugar: "Café Musical", musicos: 3, estado: "Confirmado" },
  { nombre: "Summer Festival", fecha: "2026-01-10", lugar: "Parque Central", musicos: 12, estado: "Confirmado" },
  { nombre: "Blues Night", fecha: "2026-01-15", lugar: "The Basement", musicos: 4, estado: "Pendiente" },
]

export const musicos: Musico[] = [
  { nombre: "Carlos Rodríguez", instrumento: "Guitarra", contacto: { email: "carlos@music.com", telefono: "+34 600 123 456" }, estado: "Activo" },
  { nombre: "María González", instrumento: "Voz", contacto: { email: "maria@music.com", telefono: "+34 600 234 567" }, estado: "Activo" },
  { nombre: "Juan Pérez", instrumento: "Batería", contacto: { email: "juan@music.com", telefono: "+34 600 345 678" }, estado: "Inactivo" },
  { nombre: "Ana Martínez", instrumento: "Piano", contacto: { email: "ana@music.com", telefono: "+34 600 456 789" }, estado: "Activo" },
  { nombre: "Pedro López", instrumento: "Bajo", contacto: { email: "pedro@music.com", telefono: "+34 600 567 890" }, estado: "Activo" },
]

export const canciones: Cancion[] = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: "5:55", genero: "Rock", dificultad: "Avanzado" },
  { titulo: "Hotel California", artista: "Eagles", duracion: "6:30", genero: "Rock", dificultad: "Intermedio" },
  { titulo: "Imagine", artista: "John Lennon", duracion: "3:03", genero: "Pop", dificultad: "Básico" },
  { titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracion: "8:02", genero: "Rock", dificultad: "Avanzado" },
  { titulo: "Wonderwall", artista: "Oasis", duracion: "4:18", genero: "Rock", dificultad: "Básico" },
  { titulo: "Take Five", artista: "Dave Brubeck", duracion: "5:24", genero: "Jazz", dificultad: "Avanzado" },
]

export const stats: DashboardStat[] = [
  { nombre: "Concierto Rock Festival", fecha: "2025-12-15", lugar: "Arena Central", estado: "Confirmado" },
  { nombre: "Jazz Night", fecha: "2025-12-20", lugar: "Blue Note Club", estado: "Pendiente" },
  { nombre: "Acoustic Session", fecha: "2025-12-25", lugar: "Café Musical", estado: "Confirmado" },
]
