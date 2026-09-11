/**
 * Footer.jsx
 *
 * Footer minimal bergaya Wikipedia, satu baris teks kecil di bagian bawah.
 */
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="site-footer"
      style={{
        borderTop: '1px solid var(--color-border-light)',
        padding: '0.75rem 1rem',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.8rem',
        color: 'var(--color-text-muted)',
        textAlign: 'center',
        backgroundColor: 'var(--color-bg-subtle)',
      }}
    >
      © {year} Yusman Alidzar | Portofolio & Bank Tugas Pengembangan Aplikasi Web
    </footer>
  )
}

export default Footer
