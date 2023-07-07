import { community } from "../data/dataKomunitas";
import { CardCommunity } from "../components/kartu"
import Modal from "../components/modal"
import { Link } from "react-router-dom"


export default function Komunitas() {
  function openModal() {
    return <Modal />
  }
  return (
    <div style={{ backgroundImage: `url('../bgkomunitas1.png')` }}>
      <p className=" mx-0 my-3 px-3 py-2 rounded-end fw-medium" style={{ width: 'fit-content', backgroundColor: '#88CDF6' }}>Komunitas</p>
      <div className="p-5">

        <div class="input-group mb-5 w-50 m-auto shadow-sm">
          <input type="text" class="form-control" placeholder="Temukan komunitas yang anda inginkan" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <span class="input-group-text" id="basic-addon2" style={{ backgroundColor: '#015C92' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search text-white" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
        </div>

        <div className="p-5">
          <div className="card-group">
            {
              community.map((val, key) => (
                <div className="d-flex my-2">
                  <img src={val.image} className="rounded-4"
                    style={{ width: 15 + 'rem' }} alt="..." />
                  <div className="w-100 p-3">
                    <h5 className="">{val.name}</h5>
                    <p className="">{val.desc}</p>
                    <div>

                      <Link to='/detail-komunitas'>
                        <button type="button" class="btn me-3 px-5" style={{ backgroundColor: '#015C92', color: "white" }}>
                          Lihat Komunitas
                        </button>
                      </Link>

                      <button type="button" class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                          class="bi bi-share text" viewBox="0 0 16 16" style={{ color: '#06314A' }}>
                          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}