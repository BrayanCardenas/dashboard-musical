
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Canciones from "./components/Canciones"
import Musicos from "./components/Musicos"
import Agenda from "./components/Agenda"
import Configuracion from "./components/Configuracion"
import Dashboard from "./components/Dashboard"

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
