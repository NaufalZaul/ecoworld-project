import ModalBaru from '../../components/modalBaru'


export default function Pembayaran() {
  return (
    <div>
      <p className=" my-3 px-3 py-2 rounded-end fw-medium" style={{ width: 'fit-content', backgroundColor: '#88CDF6' }}>Pembayaran</p>

      <div className="d-flex m-5">
        <div className="col-5 border-end px-4">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label fw-medium">Kontak</label>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Email atau nomor handphone " />
            <div className="mt-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Pesan melalui email jika ada berita atau pemberitahuan</label>
            </div>
          </div>
          <br />
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label fw-medium">Alamat Pengiriman</label>
            <div className="mt-1">
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Masukkan Negara" />
            </div>
            <div className="d-flex mt-2">
              <input type="text" className="form-control me-1" placeholder="Nama depan" />
              <input type="text" className="form-control ms-1" placeholder="Nama belakang" />
            </div>
            <div className="mt-2">
              <input type="text" className="form-control" placeholder="Alamat rumah" />
            </div>
            <div className="mt-2">
              <input type="text" className="form-control" placeholder="Kota tinggal" />
            </div>
            <div className="d-flex mt-2">
              <input type="text" className="form-control me-1" placeholder="Provinsi" />
              <input type="text" className="form-control ms-1" placeholder="Kode jalan" />
            </div>
          </div>
          <br />
          <div className="text-end">
            <button type="button" className="btn px-5" data-bs-toggle="modal"
              data-bs-target="#pembayaran" style={{ backgroundColor: "#015C92", color: "white" }}>Lanjutkan Pembelian</button>
          </div>
        </div>
        <div className="col border-start px-3">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Pilih semua
              </label>
            </div>
            <button type="submit" className="btn btn-sm btn-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3 me-2" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
              Hapus semua
            </button>
          </div>
          <table class="table text-center" style={{ fontSize: '15px' }}>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" className="text-start">Produk</th>
                <th scope="col">Harga Satuan</th>
                <th scope="col">Kuantitas</th>
                <th scope="col">Total Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </th>
                <td>
                  <div className="row text-start">
                    <img src="./Gambar Produk 1.png" className="w-auto" style={{ height: '5rem' }} />
                    <div className="col">
                      <p className="">Aquarium Optic Clear</p>
                      <p className="fw-bold mb-1">Variasi :</p>
                      <span>Cembung, Sedang</span>
                    </div>
                  </div>
                </td>
                <td>Rp 1.399.000</td>
                <td>2</td>
                <td>Rp 1.399.000</td>
              </tr>
            </tbody>
          </table>

          <div className="my-4">
            <h6>Masukkan Diskon :</h6>
            <div class="input-group mb-3">
              <input type="text" class="form-control fs-6" placeholder="Tiket Diskon" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <button class="input-group-text" id="basic-addon2" style={{ backgroundColor: '#88CDF6' }}>Pilih Diskon</button>
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between">
              <h6 className="">Subtotal</h6>
              <h6 className="">Rp 2.798.000</h6>
            </div>
            <div className="d-flex justify-content-between border-bottom border-black pb-1">
              <h6 className="">Shipping</h6>
              <h6 className="">Rp 70.000</h6>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <h6 className="">Total</h6>
              <h6 className="">Rp 2.868.000</h6>
            </div>
          </div>

        </div>
      </div>




      <ModalBaru
        modalId='pembayaran'
        header={(
          <h4 className="m-auto">Pilih Metode Pembayaran</h4>
        )}
        message={(
          <>
            <h5 className="">Transfer Back</h5>
            <div class="form-check ps-5 py-2 border shadow-sm">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label class="form-check-label" for="flexRadioDefault1">
                <img src="./BRI.png" className="w-25" />
              </label>
            </div>
            <div class="form-check ps-5 py-2 border shadow-sm">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label class="form-check-label" for="flexRadioDefault2">
                <img src="./BCA.png" className="w-25" />
              </label>
            </div>
            <div class="form-check ps-5 py-2 border shadow-sm">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
              <label class="form-check-label" for="flexRadioDefault3">
                <img src="./BNI.png" className="w-25" />
              </label>
            </div>

            <h5 className="mt-3">Lainnya</h5>
            <div class="form-check ps-5 py-2 border shadow-sm">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
              <label class="form-check-label" for="flexRadioDefault4">
                Cash On Delivery (COD)
              </label>
            </div>

          </>
        )}
        footer={(
          <>
            <buton type="button" className="btn" data-bs-dismiss="modal"
              data-bs-toggle="modal"
              data-bs-target="#pembayaran-sukses" style={{ backgroundColor: "#015C92", color: "white" }}> Bayar Sekarang </buton>

          </>
        )}
      />

      <ModalBaru
        modalId='pembayaran-sukses'
        header={(
          <div className="m-auto">
            <img src="./logo.png" style={{ width: "5cm", height: "1.5cm" }} />
            <br />
          </div>
        )}
        message={(
          <>
            <h5 className="align-self-center">Pembayaran Berhasil</h5>
            <p className="align-self-center">Terima kasih telah berbelanja</p>
          </>
        )}
        footer={(
          <>
            <buton type="button" className="btn" data-bs-dismiss="modal" style={{ backgroundColor: "#015C92", color: "white" }}> Keluar
            </buton>
          </>
        )}
      />
    </div>
  )
} 
