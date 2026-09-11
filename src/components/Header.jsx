/**
 * Header.jsx
 *
 * Bar paling atas, menampilkan nama/judul situs dan tombol toggle
 * sidebar di layar kecil (mobile).
 *
 * Props:
 *  - onToggleSidebar: fungsi yang dipanggil saat tombol hamburger diklik
 */
function Header({ onToggleSidebar }) {
  return (
    <header
      id="site-header"
      style={{
        borderBottom: '1px solid var(--color-border-light)',
        backgroundColor: 'var(--color-bg)',
        padding: '0.6rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Tombol hamburger (hanya muncul di mobile) */}
      <button
        id="sidebar-toggle-btn"
        onClick={onToggleSidebar}
        aria-label="Toggle navigasi"
        style={{
          display: 'none',           /* ditampilkan oleh media query di CSS */
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.25rem',
          color: 'var(--color-text)',
          fontSize: '1.25rem',
          lineHeight: 1,
        }}
        className="mobile-only"
      >
        ☰
      </button>

      {/* Nama situs + logo */}
      <a
        href="/"
        id="site-title-link"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-serif)',
          fontWeight: 700,
          fontSize: '1.125rem',
          color: 'var(--color-text)',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}
      >
        <img
          src="/logo.png"
          alt="Logo Yusman Alidzar"
          id="site-logo"
          style={{ width: '32px', height: '32px', objectFit: 'cover', borderRadius: '6px' }}
        />
        Yusman Alidzar
      </a>
    </header>
  )
}

export default Header
