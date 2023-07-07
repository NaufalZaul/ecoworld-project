import { CardProduct } from "../components/kartu"
import { product } from '../data/dataProduk'
import { Link } from 'react-router-dom'

export default function Produk() {
  return (
    <div>
      <div class="position-relative">
        <div>
          <img src="./bgtokohh.png" className="w-100" style={{ height: 25 + 'rem', objectFit: 'cover' }} alt="" />
        </div>
        <div className="position-absolute w-100 bottom-50 text-white">
          <div class="input-group w-50 m-auto">
            <input type="text" class="form-control" placeholder="Temukan produk yang anda inginkan" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span class="input-group-text" id="basic-addon2" style={{ backgroundColor: '#015C92' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search text-white" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="row row-cols-2 justify-content-around px-4">
        <div className="col-3">
          <div class="sticky-top list-group w-100 p-4" style={{ top: '0px' }}>
            <a href="#rekomendasi" class="list-group-item list-group-item-action active" aria-current="true" style={{ backgroundColor: '#015C92' }}>
              Rekomendasi
            </a>
            <a href="#aquarium" class="list-group-item list-group-item-action ">Aquarium</a>
            <a href="#ikan-hias" class="list-group-item list-group-item-action">Ikan Hias</a>
            <a href="#tanaman-hias" class="list-group-item list-group-item-action">Tanaman Hias</a>
            <a href="#pupuk" class="list-group-item list-group-item-action">Pupuk</a>
            <a href="#pakan-ikan" class="list-group-item list-group-item-action">Pakan Ikan</a>
            <a href="#aksesoris" class="list-group-item list-group-item-action">Aksesoris</a>
          </div>
        </div>

        <div className="col-9">
          <div className="">
            <h3 className="border text-center rounded-pill fw-bold my-4 p-2 bg-primary-subtle" id="rekomendasi">Rekomendasi</h3>
            <div className="row row-cols-3 g-4">
              {
                product.map((val, key) => (
                  <div className="col">
                    <Link to='/detail-produk'>
                      <CardProduct
                        cardImage={val.image}
                        cardAlt="contoh"
                        cardTitle={val.title}
                        cardStore={val.store}
                        cardDesc={val.desc}
                        cardPrice={val.price}
                      />
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="">
            <h3 className="border text-center rounded-pill fw-bold my-4 p-2 bg-primary-subtle" id="aquarium">Aquarium</h3>
            <div className="row row-cols-3 g-4">
              {
                product.map((val, key) => (
                  <div className="col">
                    <Link to='/detail-produk'>
                      <CardProduct
                        cardImage={val.image}
                        cardAlt="contoh"
                        cardTitle={val.title}
                        cardStore={val.store}
                        cardDesc={val.desc}
                        cardPrice={val.price}
                      />
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="">
            <h3 className="border text-center rounded-pill fw-bold my-4 p-2 bg-primary-subtle" id="ikan-hias">Ikan Hias</h3>
            <div className="row row-cols-3 g-4">
              {
                product.map((val, key) => (
                  <div className="col">
                    <Link to='/detail-produk'>
                      <CardProduct
                        cardImage={val.image}
                        cardAlt="contoh"
                        cardTitle={val.title}
                        cardStore={val.store}
                        cardDesc={val.desc}
                        cardPrice={val.price}
                      />
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="">
            <h3 className="border text-center rounded-pill fw-bold my-4 p-2 bg-primary-subtle" id="tanaman-hias">Tanaman Hias</h3>
            <div className="row row-cols-3 g-4">
              {
                product.map((val, key) => (
                  <div className="col">
                    <Link to='/detail-produk'>
                      <CardProduct
                        cardImage={val.image}
                        cardAlt="contoh"
                        cardTitle={val.title}
                        cardStore={val.store}
                        cardDesc={val.desc}
                        cardPrice={val.price}
                      />
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="">
            <h3 className="border text-center rounded-pill fw-bold my-4 p-2 bg-primary-subtle" id="pupuk">Pupuk</h3>
            <div className="row row-cols-3 g-4">
              {
                product.map((val, key) => (
                  <div className="col">
                    <Link to='/detail-produk'>
                      <CardProduct
                        cardImage={val.image}
                        cardAlt="contoh"
                        cardTitle={val.title}
                        cardStore={val.store}
                        cardDesc={val.desc}
                        cardPrice={val.price}
                      />
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="">
            <h3 className="border text-center rounded-pill fw-bold my-4 p-2 bg-primary-subtle" id="pakan-ikan">Pakan Ikan</h3>
            <div className="row row-cols-3 g-4">
              {
                product.map((val, key) => (
                  <div className="col">
                    <Link to='/detail-produk'>
                      <CardProduct
                        cardImage={val.image}
                        cardAlt="contoh"
                        cardTitle={val.title}
                        cardStore={val.store}
                        cardDesc={val.desc}
                        cardPrice={val.price}
                      />
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="">
            <h3 className="border text-center rounded-pill fw-bold my-4 p-2 bg-primary-subtle" id="aksesoris">Aksesoris</h3>
            <div className="row row-cols-3 g-4">
              {
                product.map((val, key) => (
                  <div className="col">
                    <Link to='/detail-produk'>
                      <CardProduct
                        cardImage={val.image}
                        cardAlt="contoh"
                        cardTitle={val.title}
                        cardStore={val.store}
                        cardDesc={val.desc}
                        cardPrice={val.price}
                      />
                    </Link>
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


