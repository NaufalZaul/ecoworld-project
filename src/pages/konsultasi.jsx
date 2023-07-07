import { Link } from 'react-router-dom'

export default function Konsultasi() {
  return (
    <div className="w-100 row row-cols-1 justify-content-end p-5 my-2" style={{ background: `#fff url('../bgkomunitas.png') center center/cover no-repeat`}}>
      <div className="col-5 rounded-5 px-5 py-5 border shadow p-3 mb-5 bg-white rounded" style={{ backgroundColor: "BCE6FF" }}>
        <div className="text-center-justify">
          <a style={{ fontSize: "25px" }}><b style={{ color: "#015C92" }}>Ayo Temukan Konsultan Favoritmu !</b></a>
          <br />
          <a style={{ fontSize: "15px", marginTop: "10px" }}>Temukan dan Terhubung Dengan Aquascaper atau Terrariumer Profesional</a>
        </div>
        <div className=" my-3 mt-4">
          <label for="exampleInputProvinsi1" class="form-label">Provinsi :</label>
          <input type="text" className="text-start input-group input-group-text rounded-2"
            id="exampleInputProvinsi1" placeholder="Nama Provinsi" style={{ fontSize: '15px' }} />
        </div>
        <div className=" my-3 mt-4">
          <label for="exampleInputKabupaten2" class="form-label">Nama Kota/ Kabupaten :</label>
          <input type="text" className="text-start input-group input-group-text rounded-2"
            id="exampleInputKabupaten2" placeholder="Nama Kota / Kabupaten" style={{ fontSize: '15px' }} />
        </div>
        <div class="form-floating my-3">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
            style={{ height: "100px", fontSize: '15px' }}></textarea>
          <label for="floatingTextarea2" style={{ fontSize: '15px' }} >Tambahkan Keterangan (Optional)</label>
        </div>
        <Link to="/list-konsultan" className="w-100 btn my-3 p-2" style={{ backgroundColor: '#015C92', color: 'white' }}>Cari Sekarang</Link>
      </div>
    </div>
  )
}