import { Link } from 'react-router-dom'

export default function Modal({
  message,
  toPage
}) {
  function confirm() {
    alert("BERHASIL !!")
  }
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header" style={{ border: "none" }}>
            <button type="button" className="btn-close bg-danger rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body justify-content-center">
            <p className="fs-5 text-center" style={{ color: "#2D82B5" }}>{message}</p>
          </div>
          <div className="modal-footer justify-content-center" style={{ border: "none", marginBottom: "30px" }}>
            <Link to={toPage}>
              <button type="button" className="btn rounded-pill px-4" data-bs-dismiss="modal"
                style={{ backgroundColor: "#88CDF6", margin: "10px" }} onClick={confirm}>Ya</button>
            </Link>
            <button type="button" className="btn btn-danger rounded-pill px-4" data-bs-dismiss="modal">Tidak</button>
          </div>
        </div>
      </div>
    </div>


  )
} 