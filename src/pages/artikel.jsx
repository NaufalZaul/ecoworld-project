import { dataArtikel } from "../data/dataArtikel";
import { CardArticle } from "../components/kartu"


export default function Article() {
  return (
    <div style={{ backgroundImage: `url('../bgartikel.png')` }}>
      <p className="mx-0 my-3 px-3 py-2 rounded-end ç" style={{ width: 'fit-content', backgroundColor: '#88CDF6' }}>Artikel</p>
      <div className="p-5">

        <div class="input-group mb-5 w-50 m-auto shadow-sm">
          <input type="text" class="form-control" placeholder="Temukan artikel yang anda inginkan" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <span class="input-group-text" id="basic-addon2" style={{ backgroundColor: '#015C92' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search text-white" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
        </div>

        <div class="position-relative w-75 m-auto">
          <div>
            <img src="./pexels-tim-mossholder-942295 3.png" className="w-100 rounded darkening " style={{ height: 30 + 'rem' }} alt="" />
          </div>
          <div className="position-absolute bottom-0 p-5 text-white">
            <h5 className="fs-2 fw-bold text-capitalize">Mengenal apa itu aquascape? aksesoris dan cara membuatnya</h5>
            <p className="card-text mt-1 fs-5 fw-semibold text-white ">by Joko Anwar</p>
            <p className="card-text fs-5 fw-light">Dipubikasikan pada tanggal 20 Maret 2023</p>
          </div>
        </div>

        <div className="p-2 my-3">
          <h3 className="fs-3 my-4" style={{ color: '#015C92' }}>#Aquascape</h3>

          <div className="card-group">
            <div class="row row-cols-2 m-2 w-100">
              {
                dataArtikel.map((val, key) => (
                  <div className="gambar">
                    <CardArticle
                      link="/detail-artikel"
                      image={val.image}
                      title={val.title}
                      writer={val.writer}
                      publish={val.publish}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </div>





      </div>
    </div>
  )
}