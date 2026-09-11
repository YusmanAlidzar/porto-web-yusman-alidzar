/**
 * Sidebar.jsx
 *
 * Navigasi kiri bergaya Wikipedia.
 * - Di layar lebar: selalu terlihat, sticky.
 * - Di layar kecil: bisa di-hide/show via prop `isOpen`.
 *
 * Props:
 *  - isOpen: boolean, apakah sidebar terbuka di mobile
 *  - onClose: fungsi penutup sidebar (klik overlay)
 */
import { NavLink } from 'react-router'
import tugasList from '../data/tugas'

function Sidebar({ isOpen, onClose }) {
  /* Fungsi helper: menghasilkan class aktif untuk NavLink */
  const navClass = ({ isActive }) => isActive ? 'nav-item-active' : ''

  const linkStyle = {
    display: 'block',
    padding: '0.35rem 0.75rem',
    color: 'var(--color-text)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-sans)',
    borderLeft: '3px solid transparent',
    transition: 'background 0.15s',
  }

  return (
    <>
      {/* Overlay gelap di mobile saat sidebar terbuka */}
      {isOpen && (
        <div
          id="sidebar-overlay"
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.35)',
            zIndex: 49,
          }}
        />
      )}

      <nav
        id="site-sidebar"
        aria-label="Navigasi utama"
        style={{
          width: 'var(--sidebar-width)',
          minWidth: 'var(--sidebar-width)',
          borderRight: '1px solid var(--color-border-light)',
          backgroundColor: 'var(--color-bg)',
          padding: '1rem 0',
          /* Mobile: fixed overlay; Desktop: normal flow (lihat Layout.jsx) */
          position: isOpen ? 'fixed' : undefined,
          top: isOpen ? 0 : undefined,
          left: isOpen ? 0 : undefined,
          bottom: isOpen ? 0 : undefined,
          zIndex: isOpen ? 50 : undefined,
          overflowY: 'auto',
          transition: 'transform 0.2s ease',
        }}
      >
        {/* ── Navigasi utama ──────────────────────── */}
        <div style={{ marginBottom: '1rem' }}>
          <p style={{
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-text-muted)',
            fontWeight: 600,
            padding: '0 0.75rem',
            margin: '0 0 0.25rem 0',
          }}>
            Navigasi
          </p>

          <NavLink
            to="/"
            end
            id="nav-beranda"
            className={navClass}
            style={linkStyle}
          >
            Beranda
          </NavLink>

          <NavLink
            to="/tugas"
            id="nav-tugas"
            className={navClass}
            style={linkStyle}
          >
            Bank Tugas
          </NavLink>
        </div>

        {/* ── Daftar tugas (sub-nav) ───────────────── */}
        <div>
          <p style={{
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-text-muted)',
            fontWeight: 600,
            padding: '0 0.75rem',
            margin: '0 0 0.25rem 0',
          }}>
            Tugas
          </p>

          {tugasList.map((t) => (
            <NavLink
              key={t.id}
              to={`/tugas/${t.id}`}
              id={`nav-${t.id}`}
              className={navClass}
              style={{ ...linkStyle, paddingLeft: '1.25rem', fontSize: '0.83rem' }}
            >
              {t.judul.split(':')[0].trim()}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Sidebar
