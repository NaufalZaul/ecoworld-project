export default function DetailArtikel() {
  return (
    <div>
      <p className="mx-0 my-3 px-3 py-2 rounded-end fw-medium" style={{ width: 'fit-content', backgroundColor: '#88CDF6' }}>Artikel</p>

      <div className="p-5" style={{ marginLeft: "100px", marginRight: "100px" }}>
        <h5 className="fs-2 fw-bold text-capitalize">Mengenal apa itu aquascape? aksesoris dan cara membuatnya</h5>
        <p className="card-text mt-1 fs-5 fw-semibold">by Joko Anwar</p>
        <p className="card-text fs-5 fw-light">Dipubikasikan pada tanggal 20 Maret 2023</p>
        <div className="my-3">
          <span class="badge rounded text-bg-danger fs-6 fw-normal mx-1">#Artikel</span>
          <span class="badge rounded text-bg-danger fs-6 fw-normal mx-1">#Aquascape</span>
        </div>
        <img src="./daniel-corneschi-GsAJ4-Tsz_c-unsplash.jpg" class="img-fluid w-100 rounded-4" style={{ height: 30 + 'rem' }} alt="" />
        <div>
          <h1 className="fs-2 fw-bold text-capitalize mt-5 mb-4">Apa itu aquascape</h1>
          <p className="lh-lg">Aquascape adalah seni menghias tanaman di dalam air yang dipadukan dengan penempatan objek seperti batu, kayu, dalam wadah akuarium ataupun akrilik yang menggunakan ekosistem air tawar.
            Aquascape sendiri juga dapat disebut sebagai ilmu penataan akuarium yang dapat mendatangkan nilai tambah serta kepuasan batin yang tinggi, seperti halnya yang dijelaskan di dalam buku Pesona Aquascape.</p>
          <h1 className="fs-2 fw-bold text-capitalize mt-5 mb-4">Sejarah Aquascape</h1>
          <p className="lh-lg">Sebenarnya aquascape ini sudah ada dari zaman masa kuno, hanya saat itu media aquascape ini biasanya memakai wadah seperti mangkuk yang terbuat dari tanah liat atau batu. Lalu di tahun 1369, seorang kaisar China membuat tempat dari bahan porselen yang berbentuk mangkuk dengan diisi ikan Mas. Masuk di era pertengahan sekitar tahun 1836 seorang ahli botani Dr. Nathaniel Bagshaw menciptakan inovasi sebuah wadah kotak dengan isi hewan air dan tumbuhan tropis yang diberi nama Wardian Case/Kotak wardian pada saat itu menjadi populer dan sangat efektif mudah dibawa kemana-mana yang menjadi suatu inovasi awal sejarah aquascape. Sejarah berikutnya di era modern sekitar tahun 1837 di masa era Victoria, aquarium mempunyai gaya khas berbentuk kotak dengan satu sisi yang terbuat dari kaca dengan dinding terbuat dari kayu bermaterial kedap air dan di bawahnya dibuat terasa hangat Seiring perkembangan zaman, dimana diperkenalkan design dengan bahan pada semua dinding dan dasarnya terbuat dari bahan kaca dan bagian rangka terbuat dari logam.</p>
        </div>
      </div>
    </div>
  )
}