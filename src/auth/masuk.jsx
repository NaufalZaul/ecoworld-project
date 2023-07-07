import { useState } from "react";
import { Link } from "react-router-dom"
import Navbar from "../components/navbar"

export default function Login() {
  const [login, setLogin] = useState(true)
  const [user, setUser] = useState({
    email: '',
    pass: ''
  })

  return (
    <div style={{ minHeight: "80vh" }}>
      <div className="row justify-content-around m-5">
        <div className="col-5">
          <h1>Selamat Datang!</h1>
          <img src="./Croods Party Time.png" className="w-75" alt="" />
        </div>
        <div className="col-5 border rounded p-4 shadow-sm">
          <div className="d-flex justify-content-center mb-4">
            <Link to='/masuk'>
              <button className="btn fs-4 w-100 fw-bold rounded-0 text-decoration-underline">Masuk</button>
            </Link>
            <Link to='/daftar'>
              <button className="btn fs-4 w-100 text-secondary-25">Daftar</button>
            </Link>
          </div>
          <form>
            <div class="mb-4">
              <input type="email" class="form-control mb-4 py-2 rounded-pill" placeholder="Email" />
              <input type="password" class="form-control mb-4 py-2 rounded-pill" placeholder="Password" />
            </div>

            <Link to="/true" type="submit" class="btn w-100 rounded-pill"
              style={{ backgroundColor: '#C5E9FF' }}>
              Masuk
            </Link>

            <div className="d-flex justify-content-evenly mt-5">
              <button type="submit" class="btn btn-secondary w-100 mx-1 bg-white">
                <img src="https://img.icons8.com/color/30/null/google-logo.png" />
              </button>
              <button type="submit" class="btn btn-primary w-100 mx-1">
                <img src="https://img.icons8.com/color/30/ffffff/facebook-new.png" />
              </button>
              <button type="submit" class="btn btn-dark w-100 mx-1">
                <img src="https://img.icons8.com/material-sharp/30/ffffff/mac-os.png" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
