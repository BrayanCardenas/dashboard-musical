import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Canciones from "./pages/Canciones"
import Musicos from "./pages/Musicos"
import Agenda from "./pages/Agenda"
import Configuracion from "./pages/Configuracion"
import Dashboard from "./pages/Dashboard"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard title="Dashboard" />} />
            <Route path="/canciones" element={<Canciones title="Canciones" />} />
            <Route path="/musicos" element={<Musicos title="Músicos" />} />
            <Route path="/agenda" element={<Agenda title="Agenda" />} />
            <Route path="/configuracion" element={<Configuracion title="Configuración" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
