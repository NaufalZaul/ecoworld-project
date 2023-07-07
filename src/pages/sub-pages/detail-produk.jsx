import { Link } from 'react-router-dom'
export default function DetailProduct(){
  return(
    <div className="text-center" style={{ backgroundImage: `url('../bgkomunitas1.png')` }}>
      <p className=" mx-0 my-3 px-3 py-2 rounded-end fw-medium" style={{ width: 'fit-content', backgroundColor: '#88CDF6' }}>Produk</p>
      <div className="p-5">
        <img src="./Gambar Produk 1.png" className="w-40 rounded-3 shadow" alt=""/>
      </div>
      
      <h2 className="fs-4">Aquarium Optic Clear</h2>
      <p className="fs-5">Rp 1.399.000</p>
      <br/>
      
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="d-flex align-items-center justify-content-between bg-primary-subtle p-2 rounded-2">
            <span className="fs-6">Jumlah Pembelian</span>
            <button type="submit" className="btn btn-ghost">-</button>
            <span className="fs-6">2</span>
            <button type="submit" className="btn btn-ghost">+</button>
          </div>
          <div>
            <button type="submit" className="w-100 btn btn-ghost border rounded my-3">Tambah Keranjang</button>
            <Link to="/pembayaran">
              <button type="submit" className="w-100 btn btn-danger">Beli Sekarang</button>
            </Link>
          </div>
          <button type="submit" className="btn btn-ghost text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share me-2" viewBox="0 0 16 16">
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
            </svg>
            Share
          </button>    
        </div>
        <div className="col-4 text-start">
          <h5 className="">Deskripsi</h5>
          <p className="">Nama : Aquarium Optic Clear 40 cm Complete Filter, Lampu LED, Termometer - Putih</p>
          <p className="">Ukuran: 30cm x 40cm</p>
          <p className="">Jenis : - </p>
          <p className="">
            Catatan : Pilih Extra Packing Untuk Memastikan Barang Anda Diterima Dengan Kondisi Baik.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-between text-start px-5 mt-5" >
        <div className="" >
          <h5>Penilaian</h5>
          <div className="my-3">
            <div className="d-flex">
              <img src="./Profile-Wahyono.jpg" className='rounded-circle' alt="" style={{ height: '3rem', width: '3rem', objectFit: 'cover' }} />
              <div className="mx-3">
                <span className="">Wahyono</span>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                </div>
              </div>
            </div>
            <br/>
              <p className="fs-6 mt-1">Barang sampai dengan cepat dan tidak ada kerusakan.</p>     
            <br/>
          </div>
        </div>
          <button type="submit" className="btn  h-100 px-4 rounded-4" style={{ backgroundColor: '#06314A', color:"white" }}>Beri Penilaian</button>
      </div>
      
    </div>
  )
}