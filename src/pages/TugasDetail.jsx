/**
 * TugasDetail.jsx: Halaman Detail Tugas (/tugas/:id)
 *
 * Menggabungkan dua pola sesuai design.md:
 * 1. Gaya artikel Wikipedia: H1 judul, narasi deskripsi, heading section.
 * 2. Pola submission page LMS: infobox kanan berisi status, deadline, tautan.
 *
 * Data diambil dari src/data/tugas.js berdasarkan param :id dari URL.
 */
import { Link, useParams } from 'react-router'
import tugasList from '../data/tugas'

function BadgeStatus({ status }) {
  const cls = {
    'selesai':     'badge badge-selesai',
    'berjalan':    'badge badge-berjalan',
    'belum-mulai': 'badge badge-belum',
  }[status] ?? 'badge badge-belum'

  const label = {
    'selesai':     'Selesai',
    'berjalan':    'Sedang Dikerjakan',
    'belum-mulai': 'Belum Mulai',
  }[status] ?? status

  return <span className={cls} style={{ fontSize: '0.85rem' }}>{label}</span>
}

function TugasDetail() {
  const { id } = useParams()
  const tugas = tugasList.find((t) => t.id === id)

  /* Halaman 404 sederhana kalau id tidak ditemukan */
  if (!tugas) {
    return (
      <article id="page-not-found" className="prose">
        <h1>Tugas tidak ditemukan</h1>
        <p>
          Tidak ada tugas dengan ID <code>{id}</code>.{' '}
          <Link to="/tugas" style={{ color: 'var(--color-link)' }}>
            Kembali ke daftar tugas →
          </Link>
        </p>
      </article>
    )
  }

  return (
    <article id={`page-${tugas.id}`} className="prose">
      {/* ── Header halaman ─────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
        <h1 style={{ marginBottom: 0 }}>{tugas.judul}</h1>
        <BadgeStatus status={tugas.status} />
      </div>

      {/* ── Infobox kanan (metadata LMS-style) ─────── */}
      <aside
        className="infobox"
        id={`infobox-${tugas.id}`}
        role="complementary"
        aria-label="Informasi tugas"
      >
        <div className="infobox-title">Informasi Tugas</div>

        <div className="infobox-row">
          <span className="infobox-label">Status</span>
          <BadgeStatus status={tugas.status} />
        </div>

        <div className="infobox-row">
          <span className="infobox-label">Deadline</span>
          <span>{tugas.deadline ?? '-'}</span>
        </div>

        <div className="infobox-row">
          <span className="infobox-label">Matkul</span>
          <span>{tugas.matkul}</span>
        </div>

        <div className="infobox-row">
          <span className="infobox-label">Submission</span>
          <span>
            {tugas.tautanSubmission ? (
              <a
                href={tugas.tautanSubmission}
                target="_blank"
                rel="noopener noreferrer"
                id={`submission-link-${tugas.id}`}
              >
                Lihat →
              </a>
            ) : (
              <span style={{ color: 'var(--color-text-muted)' }}>Belum ada</span>
            )}
          </span>
        </div>

        <div className="infobox-row" style={{ borderBottom: 'none' }}>
          <span className="infobox-label">Diperbarui</span>
          <span>{tugas.updatedAt}</span>
        </div>
      </aside>

      {/* ── Deskripsi tugas (narasi artikel) ─────────── */}
      <h2 id="section-deskripsi">Deskripsi</h2>
      {tugas.deskripsi.trim().split('\n\n').map((para, i) => (
        <p key={i}>{para.trim()}</p>
      ))}

      {/* ── Riwayat / Catatan Pengerjaan ─────────────── */}
      {tugas.catatan && tugas.catatan.length > 0 && (
        <>
          <h2 id="section-catatan">Riwayat Pengerjaan</h2>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.875rem',
            }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                <th style={{ ...thStyle, width: '140px' }}>Tanggal</th>
                <th style={thStyle}>Catatan</th>
              </tr>
            </thead>
            <tbody>
              {tugas.catatan.map((c, i) => (
                <tr
                  key={i}
                  style={{ borderBottom: '1px solid var(--color-border-light)' }}
                >
                  <td style={{ ...tdStyle, color: 'var(--color-text-muted)' }}>{c.tanggal}</td>
                  <td style={tdStyle}>{c.isi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* ── Navigasi kembali ──────────────────────────── */}
      <p style={{ marginTop: '2rem', fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
        ← <Link to="/tugas" style={{ color: 'var(--color-link)' }}>Kembali ke Bank Tugas</Link>
      </p>
    </article>
  )
}

const thStyle = {
  textAlign: 'left',
  padding: '0.4rem 0.6rem',
  fontWeight: 600,
  color: 'var(--color-text-muted)',
  fontSize: '0.78rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
}

const tdStyle = {
  padding: '0.5rem 0.6rem',
  verticalAlign: 'top',
}

export default TugasDetail
