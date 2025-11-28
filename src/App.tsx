import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Canciones from "./pages/Canciones"
import Musicos from "./pages/Musicos"
import Agenda from "./pages/Agenda"
import Configuracion from "./pages/Configuracion"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard title="Dashboard" /></ProtectedRoute>} />
            <Route path="/agenda" element={<ProtectedRoute><Agenda title="Agenda" /></ProtectedRoute>} />
            <Route path="/canciones" element={<ProtectedRoute><Canciones title="Canciones" /></ProtectedRoute>} />
            <Route path="/musicos" element={<ProtectedRoute><Musicos title="Músicos" /></ProtectedRoute>} />
            <Route path="/configuracion" element={<ProtectedRoute><Configuracion title="Configuración" /></ProtectedRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
