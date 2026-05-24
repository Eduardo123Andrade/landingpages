import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Loja01 from './pages/loja01'
import Loja02 from './pages/loja02'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loja01/*" element={<Loja01 />} />
        <Route path="/loja02/*" element={<Loja02 />} />
        <Route path="/" element={<Navigate to="/loja01" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
