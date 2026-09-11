/**
 * Home.jsx: Halaman Utama (Portofolio)
 *
 * Diperlakukan seperti artikel Wikipedia tentang diri sendiri:
 * H1 nama, lalu bagian-bagian H2 dengan border-bottom tipis.
 * Saat ini berisi konten Lorem ipsum sebagai placeholder.
 */

function Home() {
  return (
    <article id="page-home" className="prose">
      {/* H1: nama pemilik, seperti judul artikel Wikipedia */}
      <h1>Yusman Alidzar</h1>

      {/* Infobox: ringkasan cepat di kanan atas, khas Wikipedia */}
      <div className="infobox" id="home-infobox" role="complementary" aria-label="Ringkasan">
        <div className="infobox-title">Yusman Alidzar</div>
        <div className="infobox-row">
          <span className="infobox-label">Role</span>
          <span>Mahasiswa</span>
        </div>
        <div className="infobox-row">
          <span className="infobox-label">Matkul</span>
          <span>Pengembangan Aplikasi Web</span>
        </div>
        <div className="infobox-row">
          <span className="infobox-label">GitHub</span>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            id="infobox-github-link"
          >
            github.com/…
          </a>
        </div>
      </div>

      {/* ── Tentang ──────────────────────────────────── */}
      <h2 id="section-tentang">Tentang</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      {/* ── Keahlian ─────────────────────────────────── */}
      <h2 id="section-keahlian">Keahlian</h2>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante.
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
        <li>Ut labore et dolore magna aliqua</li>
      </ul>

      {/* ── Proyek ───────────────────────────────────── */}
      <h2 id="section-proyek">Proyek</h2>
      <p>
        Maecenas mattis urna vel quam faucibus, sed vehicula orci tincidunt.
        Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquam nisl,
        nec aliquam nisl nisl sit amet nisl. Praesent tincidunt tincidunt
        magna, vel consequat nulla faucibus id.
      </p>

      {/* ── Kontak ───────────────────────────────────── */}
      <h2 id="section-kontak">Kontak</h2>
      <p>
        Nullam efficitur lorem non eros dignissim, ut facilisis odio laoreet.
        Phasellus malesuada eros ut velit condimentum, vel dignissim velit
        volutpat.
      </p>
    </article>
  )
}

export default Home
