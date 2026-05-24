import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RafaPratas925 from './pages/rprata925'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rprata925/*" element={<RafaPratas925 />} />
        <Route path="/" element={<Navigate to="/loja01" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
