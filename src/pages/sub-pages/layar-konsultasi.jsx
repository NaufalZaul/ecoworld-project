import Modal from "../../components/modal"

export default function LayarKonsultasi() {

  return (
    <div className="w-100 row row-cols-2 align-items-center justify-content-center text-center" style={{ minHeight: 90 + 'vh' }}>
      <div className="col-4 d-flex flex-column justify-content-evenly" style={{ minHeight: 80 + 'vh' }}>
        <div className="p-2 ">
          <img src="./find-pro-1.png" class="img-fluid w-75 rounded-4" alt="" />
          <h3 className="mt-4 mb-2">Ainina Putri</h3>
          <p className="my-2 fs-5">Aquascaper Enthauntist</p>
        </div>
        <button type="button" className="btn btn-primary px-5" data-bs-toggle="modal"
          data-bs-target="#exampleModal">Akhiri Percakapan</button>
        <Modal
          message="Apakah anda ingin mengakhiri percakapan ini?"
          toPage="/konsultasi"
        />
      </div>
      <div className="col-5">
        <div className="border rounded-3 p-4 d-flex flex-column justify-content-between bg-secondary-subtle" 
          style={{ minHeight: 80 + 'vh' }}>
          <div className="overflow-auto" style={{ height: 70 + 'vh' }}>
            <span className="d-flex justify-content-start align-items-end">
              <p className="border rounded-pill px-4 py-2 text-start shadow-sm bg-white">Selamat pagi, ada yang bisa dibantu</p>
              <span className="mx-3 mb-3">19.00</span>
            </span>
            <span className="d-flex justify-content-end align-items-end">
              <span className="mx-3 mb-3">19.00</span>
              <p className="border rounded-pill px-4 py-2 text-end shadow-sm bg-white bg-primary-subtle">Saya ingin berkonsultasi dengan anda</p>
            </span>
          </div>
          <div class="input-group mb-2 start-0 end-0 bottom-0 shadow ">
          <input type="text" class="form-control" id="pesan" placeholder="Ketik Disini" />
          <button class="input-group-text bg-primary-subtle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </button>
          <button class="input-group-text bg-primary-subtle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div >
  )
}