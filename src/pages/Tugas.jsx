/**
 * Tugas.jsx: Halaman Katalog Tugas (/tugas)
 *
 * Bergaya halaman kategori/daftar isi Wikipedia:
 * daftar tugas bertaut, dikelompokkan dengan heading section.
 * Setiap entri menampilkan: judul (link biru), badge status, tanggal update.
 *
 * Data diambil dari src/data/tugas.js
 */
import { Link } from 'react-router'
import tugasList from '../data/tugas'

function BadgeStatus({ status }) {
  const cls = {
    'selesai': 'badge badge-selesai',
    'berjalan': 'badge badge-berjalan',
    'belum-mulai': 'badge badge-belum',
  }[status] ?? 'badge badge-belum'

  const label = {
    'selesai': 'Selesai',
    'berjalan': 'Berjalan',
    'belum-mulai': 'Belum Mulai',
  }[status] ?? status

  return <span className={cls}>{label}</span>
}

function Tugas() {
  return (
    <article id="page-tugas" className="prose">
      <h1>Bank Tugas</h1>
      <p>
        Halaman ini memuat seluruh tugas mata kuliah{' '}
        <strong>Pengembangan Aplikasi Web</strong>. Setiap tugas selesai dikerjakan,
        entri akan diperbarui beserta tautan submission-nya.
      </p>

      <h2 id="section-daftar-tugas">Daftar Tugas</h2>

      {tugasList.length === 0 ? (
        <p style={{ color: 'var(--color-text-muted)' }}>Belum ada tugas tercatat.</p>
      ) : (
        <table
          id="tabel-tugas"
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
          }}
        >
          <thead>
            <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
              <th style={thStyle}>Judul</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Deadline</th>
              <th style={thStyle}>Diperbarui</th>
            </tr>
          </thead>
          <tbody>
            {tugasList.map((t) => (
              <tr
                key={t.id}
                style={{ borderBottom: '1px solid var(--color-border-light)' }}
              >
                <td style={tdStyle}>
                  <Link
                    to={`/tugas/${t.id}`}
                    id={`link-${t.id}`}
                    style={{ color: 'var(--color-link)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    {t.judul}
                  </Link>
                </td>
                <td style={tdStyle}>
                  <BadgeStatus status={t.status} />
                </td>
                <td style={{ ...tdStyle, color: 'var(--color-text-muted)' }}>
                  {t.deadline ?? '-'}
                </td>
                <td style={{ ...tdStyle, color: 'var(--color-text-muted)' }}>
                  {t.updatedAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </article>
  )
}

const thStyle = {
  textAlign: 'left',
  padding: '0.5rem 0.75rem',
  fontWeight: 600,
  color: 'var(--color-text-muted)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
}

const tdStyle = {
  padding: '0.6rem 0.75rem',
  verticalAlign: 'top',
}

export default Tugas
