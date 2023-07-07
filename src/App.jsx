import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Masuk from './auth/masuk'
import Daftar from './auth/daftar'
import Beranda from './pages/beranda'
import Profil from './pages/profil'
import Artikel from './pages/artikel'
import Komunitas from './pages/komunitas'
import Toko from './pages/toko'
import Konsultasi from './pages/konsultasi'
import DetailKomunitas from './pages/sub-pages/detail-komunitas'
import DetailArtikel from './pages/sub-pages/detail-artikel'
import DetailProduk from './pages/sub-pages/detail-produk'
import Pembayaran from './pages/sub-pages/pembayaran'
import ListKonsultan from './pages/sub-pages/list-konsultan'
import LayarKonsultasi from './pages/sub-pages/layar-konsultasi'


export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />}>
          <Route path="/:bool" element={<Beranda />}/>
          
        </Route>
        <Route path="/masuk" element={<Masuk />}>
          
        </Route>
        
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/komunitas" element={<Komunitas />} />
        <Route path="/produk" element={<Toko />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/detail-komunitas" element={<DetailKomunitas />} />
        <Route path="/detail-artikel" element={<DetailArtikel />} />
        <Route path="/detail-produk" element={<DetailProduk />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/list-konsultan" element={<ListKonsultan />} />
        <Route path="/layar-konsultasi" element={<LayarKonsultasi />} />
      </Routes>
    </div>
  )
}



