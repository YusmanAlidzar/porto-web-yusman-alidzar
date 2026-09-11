/**
 * Layout.jsx
 *
 * Pembungkus global semua halaman.
 * Menerapkan struktur 2 kolom khas Wikipedia:
 *
 *   ┌─────────────────────────────────────────┐
 *   │  Header                                  │
 *   ├───────────┬─────────────────────────────┤
 *   │  Sidebar  │  Konten Utama (slot)         │
 *   │  (nav)    │                              │
 *   ├───────────┴─────────────────────────────┤
 *   │  Footer                                  │
 *   └─────────────────────────────────────────┘
 *
 * Sidebar collapse otomatis di layar < 768px melalui state lokal.
 */
import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div
      id="app-shell"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} />

      <div
        id="main-wrapper"
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        {/* Sidebar: di desktop selalu tampil, di mobile overlay */}
        <div className="sidebar-container" style={{ display: 'contents' }}>
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        </div>

        {/* Konten utama */}
        <main
          id="main-content"
          style={{
            flex: 1,
            maxWidth: 'var(--content-max-width)',
            padding: '1.5rem 2rem',
            minWidth: 0, /* penting agar flex child bisa menyusut */
          }}
        >
          {children}
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
