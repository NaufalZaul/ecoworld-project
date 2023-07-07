import { NavLink, Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false)
  const [active, setActive] = useState(0)


  const handleClickMenu = (e) => {
    const menuNavbar = document.querySelectorAll('.hovering')
    const getMenuKey = e.getAttribute('menu-key')
    //remove class
    menuNavbar[active].classList.remove('active')
    //add class
    menuNavbar[getMenuKey].classList.add('active')
    setActive(getMenuKey)
  }

  const params = useParams()
  // console.log(params)
  
  useEffect(() => {

      setIsLogin(params.bool)
    if (!params.bool === undefined) {
    }


    // console.log(params.bool === undefined)
  }, [])

  // console.log(isLogin)
  // console.log(params.bool)


  return (
    <div>
      <nav className="navbar navbar-expand-lg text-white me-10"
        style={{ backgroundColor: '#44AAD6' }} >
        <div className="container-fluid">

          <NavLink to="/" className="" style={{ width: 10 + '%' }}>
            <img src="./logo.png" className="w-100" alt="logo" />
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-4 mb-lg-0">
              <li className="nav-item mx-3">
                <NavLink to="/" menu-key="0" className="hovering"
                  onClick={(e) => handleClickMenu(e.currentTarget)} aria-current="page">
                  Beranda
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/artikel" menu-key="1" className="hovering"
                  onClick={(e) => handleClickMenu(e.currentTarget)} aria-current="page">
                  Artikel
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/komunitas" menu-key="2" className="hovering"
                  onClick={(e) => handleClickMenu(e.currentTarget)} aria-current="page">
                  Komunitas
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/produk" menu-key="3" className="hovering"
                  onClick={(e) => handleClickMenu(e.currentTarget)} aria-current="page">
                  Toko
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/konsultasi" menu-key="4" className="hovering"
                  onClick={(e) => handleClickMenu(e.currentTarget)} aria-current="page">
                  Konsultasi
                </NavLink>
              </li>
            </ul>
          </div>

          {/* {isLogin === false ? (

            <form className="d-flex" role="search">
              <NavLink to="/masuk">
                <button className="btn mx-2 px-4" type="submit"
                  style={{ backgroundColor: '#C5E9FF' }}>
                  Masuk
                </button>
              </NavLink>
              <NavLink to="/daftar">
                <button className="btn mx-2 px-4 text-white" type="submit"
                  style={{ backgroundColor: '#0D4465' }}>
                  Daftar
                </button>
              </NavLink>
            </form>
          ) : (
            <div className="btn-group">
              <button type="button" className="btn btn-ghost dropdown-toggle d-flex align-items-center"
                data-bs-toggle="dropdown" aria-expanded="false">
                <div className="w-50">
                  <img src="./Profile-Wahyono.jpg" className="rounded-circle" style={{ width: 40 + 'px', height: 40 + 'px' }} />
                </div>
                <p className="fs-6 m-0 mx-2 text-white">Wahyono</p>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to='/profil'>
                    <button className="dropdown-item" type="button">Akun Saya</button>
                  </Link>
                </li>
                <li><button className="dropdown-item" type="button">Pengaturan</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item text-danger" type="button">Keluar</button></li>
              </ul>
            </div>
          )
          } */}

          {/* <form className="d-flex" role="search">
              <NavLink to="/masuk" className="btn mx-2 px-4 "
                style={{ backgroundColor: '#C5E9FF'}} type="submit">
                Masuk
              </NavLink>
              <NavLink to="/masuk" className="btn mx-2 px-4 text-white"
                style={{ backgroundColor: '#0D4465'}} type="submit">
                Daftar
              </NavLink>
            </form> */}
          
          <div className="btn-group">
            <button type="button" className="btn btn-ghost dropdown-toggle d-flex align-items-center"
              data-bs-toggle="dropdown" aria-expanded="false">
              <div className="w-50">
                <img src="./Profile-Wahyono.jpg" className="rounded-circle" style={{ width: 40 + 'px', height: 40 + 'px', objectFit:'cover' }} />
              </div>
              <p className="fs-6 m-0 mx-2 text-white">Wahyono</p>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link to='/profil'>
                  <button className="dropdown-item" type="button">Akun Saya</button>
                </Link>
              </li>
              <li><button className="dropdown-item" type="button">Pengaturan</button></li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item text-danger" type="button">Keluar</button></li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  )
}