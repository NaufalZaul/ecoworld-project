import { community } from '../../data/dataKomunitas'

export default function detailKomunitas() { 
  return (
    <div>
      <p className=" mx-0 my-3 px-3 py-2 rounded-end fw-medium" style={{ width: 'fit-content', backgroundColor: '#88CDF6' }}>Komunitas</p>
      <div className="row row-cols-2 justify-content-around p-5 m-0">
        <div className="col-3 border shadow p-4 mb-2 bg-white rounded" style={{ height: "fit-content" }}>
          <img src="./aquascapebatam.png" className="w-100" />
          <p className="mt-5 me-4" style={{ fontSize:'15px' }}>
            <span className="fw-semibold" >Nama Ketua :</span><br/>
            Yusuf Hendrawan
          </p>
          <p className="me-4" style={{ fontSize:'15px' }}>
            <span className="fw-semibold" >Jumlah Anggota :</span><br/>
            59 Anggota
          </p>
          <p className="me-4" style={{ fontSize:'15px' }}>
            <span className="fw-semibold" >Email :</span><br/>
            Aquascapebatam@gmail.com
          </p>
          <br />
          <p className="me-4" style={{ fontSize:'15px' }}>
            <span className="fw-semibold" >Alamat Sekretariat :</span><br/>
            Jalan Raja Ali Haji, No. 19, Batam, Kepulauan Riau.
          </p>

          <p className="" style={{ textAlign: "justify", fontSize: '15px' }}>
            Jika ingin bergabung ke dalam komunitas ini, dapat mengirimkan email atau bisa datang ke kantor sekretariat kami.
          </p>
          <button type='submit' className="btn w-100 mt-4 rounded-pill text-white" style={{ backgroundColor: '#0D4465' }} >Bergabung</button>
        </div>
        <div className="col-8">
          <h3 className="fw-bold fs-3">Komunitas Aquascape Batam</h3>
          <p className="fs-6">Komunitas Para pegiat aquascaping di kota Batam. Beralamat di kantor sekretariat Aquascape Batam, Jalan Raja Ali Haji, No. 19, Batam, Kepulauan Riau.</p>
          <br />
          <div>
            {
              community.map((val, key) => (
                <div className="d-flex border my-3 p-4">
                  <img src="./Profile-Wahyono.jpg" className="rounded-circle mx-3" style={{ width: 5 + 'rem', height: 5 + 'rem' }} />
                  <div>
                    <h6>Yudi Andhika</h6>
                    <p className='fs-6'>Info dong, kita adain pameran aquascape lagi atau ngga ya?</p>
                    <div clasName="d-flex">
                      <button type="button" className="btn border border-black mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-hand-thumbs-up text-primary me-2" viewBox="0 0 16 16">
                          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                        </svg>
                        10 suka
                      </button>
                      <button type="button" className="btn border border-black mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-text text-primary me-2" viewBox="0 0 16 16">
                          <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        5 komentar
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