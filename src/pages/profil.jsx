import { Link } from 'react-router-dom'
import { CardCommunity } from "../components/kartu";
import { community } from "../data/dataKomunitas";


export default function Profile() {
  return (
    <div className="">
      <div className="position-relative" style={{ height: '20rem' }}>
        <Link to=''>
          <button type="submit" className="btn position-absolute d-flex align-i  tems-center m-3 text-white "
            style={{ backgroundColor: '#0D4465' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-left me-2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>
            <span>Kembali</span>
          </button>
        </Link>
        <img src="./delbert-pagayona-46v8clmNjY8-unsplash.jpg" className="w-100" 
          style={{ height: 100 + '%', objectFit: "cover" }} alt="" />
      </div>
      <div className="d-flex flex-column align-items-end position-relative p-5">
        <div className="position-absolute translate-middle" style={{ width: 20 + '%', top: 10 + 'rem',left: 15 + '%' }}>
          <div className="border bg-white rounded-4 shadow-sm p-4 pb-5 text-center">
            <div className="">
              <img src="./huy-phan-_LWxQJFgpyo-unsplash.jpg" className="rounded-circle shadow" alt=""
                style={{ width: 7 + 'rem', height: 7 + 'rem', objectFit: 'cover' }} />
            </div>
            <div className="border-black border-bottom my-4">
              <h5 className="">Wahyono</h5>
              <p className="text-primary">wahyono928@gmail.com</p>
            </div>
            <div>
              <p className="mb-1">56 tahun</p>
              <p className="">Semarang</p>
            </div>
          </div>
          <button type='submit' className="btn w-100 mt-4 rounded-pill text-white" style={{ backgroundColor: '#0D4465' }} >Ikuti</button>
        </div>
        <div className="w-75 border p-3 rounded shadow-sm">
          <h3 className="fs-5 fw-bold mb-3">Description</h3>
          <p className="">Halo sobat pecinta aquascape, salam kenal. Saya wahyono alias pak ono, saya memiliki ketertarikan dengan budidaya ekosistem aquascape sejak saya pensiun.Saya memilih kegiatan ini karena sebelumnya saya sangat suka menanam tumbuh-tumbuhan di depan halaman rumah, secara kebetulan teman saya yang berkunjung menawarkan saya untuk menambah hobi baru yaitu budidaya aquascape.
          </p>
        </div>
        <div className="w-75 mt-5">
          <h3 className="fs-5 fw-bold mb-3">Community</h3>
          <div className="row row-cols-1 g-3">
            {
              community.map((val, key)=> (key < 2) ? (
                <Link to='' class="col">
                  <div className="card d-flex flex-row align-items-center px-3 py-2">
                    <img src="./Subtract.png" className="card-img-top rounded-circle" 
                      style={{ width: '5rem', height: '5rem', objectFit: 'cover' }} alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{val.name}</h5>
                      <p className="card-text">Ketua Organisasi</p>
                    </div>
                  </div>
                </Link>
              ) : '')
              
            }
          </div>
        </div>
      </div>
    </div>
  )
}