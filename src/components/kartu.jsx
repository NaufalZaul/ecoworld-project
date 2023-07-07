import { NavLink } from 'react-router-dom'
import { FormatRupiah } from "@arismun/format-rupiah";

export function CardProduct({
  cardImage,
  cardAlt,
  cardTitle,
  cardStore,
  cardDesc,
  cardPrice
}) {
  return (
    <a href="#" className="text-decoration-none">
      <div className="card m-auto shadow" style={{ minwidth: 17 + 'rem' }}>
        <img src={cardImage} className="card-img-top" alt={cardAlt} style={{ height: 15 + 'rem' }} />
        <div className="card-body d-flex flex-column justify-content-around" style={{ height: 15 + 'rem' }}>
          <h5 className="fs-6 mb-1">{cardTitle}</h5>
          <a href="#" className="text-decoration-none">{cardStore}</a>
          <p className="card-text mt-3 text-secondary">{cardDesc}</p>
          <span className="card-text">
            <FormatRupiah value={cardPrice} />
          </span>
        </div>
      </div>
    </a>
  )
}

export function CardCommunity({
  cardImage,
  cardTitle,
  cardDesc,
}) {
  return (
    <div class="col">
      <div className="card d-flex flex-row align-items-center px-3 py-2 shadow p-3 mb-5 bg-white rounded">
        <img src={cardImage} className="card-img-top" style={{ width: '5rem', borderRadius: "50%" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardDesc}</p>
        </div>
        <a className="footer text-center text-decoration-none text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
          </svg>
          <small className="">Gabung</small>
        </a>
      </div>
    </div>
  )
}



export function CardArticle({
  link,
  image,
  title,
  writer,
  publish,
}) {
  return (
    <NavLink to={link} className="col p-2 d-flex text-decoration-none text-black">
      <div className="d-flex">
        <img src={image} className="rounded-4"
          style={{ width: '13rem', height: '13rem', objectFit: 'cover' }} alt="" />
      </div>
      <div className="ms-3 pt-3">
        <h5 className="fs-5">{title}</h5>
        <h6 className="card-text mt-1 ">Penulis {writer}</h6>
        <p className="card-text fw-lighter">Dipublikasikan pada {publish}</p>
        <span className="card-text text-primary">
          Baca Artikel
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right ms-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
          </svg>
        </span>
      </div>
    </NavLink>
  )
}
