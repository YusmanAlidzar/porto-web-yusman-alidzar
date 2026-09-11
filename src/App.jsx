/**
 * App.jsx: Root component + React Router setup
 *
 * Mendefinisikan semua rute aplikasi:
 *  /         → Home (portofolio)
 *  /tugas    → Tugas (katalog)
 *  /tugas/:id → TugasDetail (detail satu tugas)
 *
 * Layout (sidebar + header + footer) membungkus semua halaman.
 */
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tugas from './pages/Tugas'
import TugasDetail from './pages/TugasDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tugas" element={<Tugas />} />
        <Route path="/tugas/:id" element={<TugasDetail />} />
      </Routes>
    </Layout>
  )
}

export default App
