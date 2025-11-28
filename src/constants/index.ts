import type { Nivel } from "../types";

export const dificultadColors: Record<Nivel, { text: string; bg: string }> = {
  Básico: { text: "text-green-600", bg: "bg-green-100" },
  Intermedio: { text: "text-yellow-500", bg: "bg-yellow-100" },
  Avanzado: { text: "text-red-500", bg: "bg-red-100" }
};

export const estadoColors: Record<"Activo" | "Inactivo", string> = {
  Activo: "bg-neon",
  Inactivo: "bg-foreground/20"
};
