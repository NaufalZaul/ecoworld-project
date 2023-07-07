import { Link } from 'react-router-dom'
import { dataKonsultan } from '../../data/dataKonsultan'

export default function ListKonsultan() {
  return (
    <div className="p-5">
      <h1 className="text-center mb-5">Mari Terhubung dengan Aquascapper Professional</h1>
      <div className="row row-cols-2 g-3">
        {
          dataKonsultan.map((val, key) => (
            <Link to='/layar-konsultasi' className='text-black text-decoration-none'>
              <div className="col d-flex">
                <img src={val.foto} className="card-img-top w-75" alt='' style={{ height: 10 + 'rem' }} />
                <div className="row row-cols-1 align-content-around ms-2">
                  <span className="col">
                    <h5 className="fw-bold fs-5 mb-1">{val.nama}</h5>
                    <h6 className="fw-normal mb-0">{val.pekerjaan}</h6>
                  </span>
                  <span className="col">
                    <p className="fw-light mb-0">{val.organisasi}</p>
                    <p className="fw-light mb-0">Since {val.tahunGabung}</p>
                  </span>
                  <span className="col d-flex justify-content-start align-items-center text-truncate">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <p className="fw-light ms-1 mb-0">{val.lokasi}</p>
                  </span>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}