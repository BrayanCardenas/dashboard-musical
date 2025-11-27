
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Canciones from "./components/Canciones"
import Musicos from "./components/Musicos"
import Agenda from "./components/Agenda"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/canciones" element={<Canciones title="Canciones" />} />
            <Route path="/musicos" element={<Musicos title="Músicos" />} />
            <Route path="/agenda" element={<Agenda title="Agenda" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
