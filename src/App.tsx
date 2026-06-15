import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RafaPratas925 from './pages/rprata925'
import Loja01 from './pages/loja01'
import DressrosaTattoo from './pages/dressrosa_tattoo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rprata925/*" element={<RafaPratas925 />} />
        <Route path="/dressrosa-tattoo/*" element={<DressrosaTattoo />} />
        <Route path="/" element={<Navigate to="/building" replace />} />
        <Route path="/building/*" element={<Loja01 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
