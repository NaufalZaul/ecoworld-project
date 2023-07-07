import { useState } from "react";
import Footer from "../components/footer";
import { CardProduct, CardCommunity } from "../components/kartu";
import { product } from "../data/dataProduk";
import { community } from "../data/dataKomunitas";


export default function Home() {

  return (
    <div style={{ backgroundImage: `url('../bgberanda.png')` }}>

      {/* HEADLINE */}
      {/* kurang setting otomatis class active */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ width: "100%", height: "100%", objectFit: "cover" }}>
          <div className="carousel-item active darkening" data-bs-interval="700">
            <img src="./Foto-Beranda.png" class="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} alt="..." />
          </div>
          <div className="carousel-item darkening">
            <img src="./delbert-pagayona-46v8clmNjY8-unsplash.jpg" class="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} alt="..." />
          </div>
          <div className="carousel-item darkening">
            <img src="./huy-phan-nJrSZM_OaJg-unsplash.jpg" class="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} alt="..." />
          </div>
          <div className="content" style={{ position: "absolute", width: "100%", height: "100%", top: "0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white", fontSize: "45px", margin: "8px" }}>
            <span>Perjalanan Baru Untuk <b style={{ color: "yellow" }}>Aquascape</b></span>
            <span><b style={{ color: "yellow" }}>Mari Bergabung </b> dan Temukan <b style={{ color: "yellow" }}>Kemudahan</b> </span>
          </div>
        </div>
      </div>




      {/* TRENDING ARTICLE */}
      <div style={{ padding: "20px 150px", marginTop: "0" }}>
        <h3 className="mt-5 mb-4 fw-bold">ARTIKEL</h3>
        <div className="mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="./Subtract.png" className="img-fluid rounded-5 gambar " alt="..." />
            </div>

            <div className="col-md-6 ms-5">
              <div className="h-100 d-flex flex-column justify-content-center">
                <h5 className="fs-3 mb-4" style={{ color: '#015C92' }}>Aquascaping 101</h5>
                <p className="lh-lg" style={{ textAlign: "justify" }}>Ada pertanyaan tentang bagaimana memulai Aquascaping? Dalam serial YouTube ini, kami punya jawabannya. Seri 7 bagian ini mencakup Tangki, Substrat, Lampu, Makanan, Perawatan dan Pemeliharaan yang Tepat, Desain, dan segala sesuatu di antaranya....</p>
                <a className="text-emphasis text-decoration-none d-flex align-items-center" href="#">
                  Baca Selengkapnya
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right ms-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="row g-0 justify-content-end">
            <div className="col-md-6 me-5">
              <div className="h-100 d-flex flex-column justify-content-center">
                <h5 className="fs-3 mb-4" style={{ color: '#015C92' }}>My Aquascape - Hobbyist Spotlights </h5>
                <p className="lh-lg" style={{ textAlign: "justify" }}>"My Aquascape" Sorotan Penghobi Jelajahi orang, kepribadian, desain, dan alasan di balik Aquascaper di seluruh negeri.<br /><br />Tiga video Sorotan Hobi "My Aquascape" berikut menampilkan Patrick Smith, Pablo Velasco, dan Travis Myer.</p>
                <a className="text-emphasis text-decoration-none d-flex align-items-center" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-left me-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z" />
                  </svg>
                  Baca Selengkapnya
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <img src="./Bapakartikel.png" className="img-fluid rounded-5 gambar" alt="..." />
            </div>
          </div>
        </div>



        {/* TRENDING STORE */}
        <h3 className="mt-5 mb-4 fw-bold">TOKO</h3>
        <div className="row row-cols-4 justify-content-center">
          {
            product.map((val, key) => (key < 4) ? (
              <CardProduct
                cardImage={val.image}
                cardAlt="contoh"
                cardTitle={val.title}
                cardStore={val.store}
                cardDesc={val.desc}
                cardPrice={val.price}
              />
            ) : '')
          }
        </div>




        {/* TRENDING COMMUNITY */}
        <div className="d-flex justify-content-between mt-5 mb-4 ">
          <h3 className="">Komunitas Aquascape</h3>
          <p className="">
            Lihat Semua
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right ms-2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
              <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </p>
        </div>

        <div className="card-group">
          {
            community.map((val, key) => (key < 2) ? (
              <div class="row m-2">
                <CardCommunity
                  cardImage={val.image}
                  cardTitle={val.name}
                  cardDesc={val.desc}
                />
                <CardCommunity
                  cardImage={val.image}
                  cardTitle={val.name}
                  cardDesc={val.desc}
                />

              </div>
            ) : '')
          }
        </div>
      </div>

      <Footer />

    </div>
  )
}