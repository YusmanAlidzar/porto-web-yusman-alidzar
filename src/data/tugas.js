/**
 * tugas.js: Sumber kebenaran (single source of truth) untuk daftar tugas.
 *
 * Untuk menambah tugas baru: cukup tambahkan satu objek ke array ini.
 * Tidak perlu mengubah komponen atau halaman lain.
 *
 * Status yang valid: 'belum-mulai' | 'berjalan' | 'selesai'
 */

const tugasList = [
  {
    id: 'tugas-1',
    judul: 'Tugas 1: Setup Web & Deployment',
    deskripsi: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tugas pertama mata kuliah
      Pengembangan Aplikasi Web meminta pembuatan web kosong dengan hosting dan domain yang
      dapat diakses publik. Pendekatan yang diambil adalah membangun portofolio pribadi
      sekaligus hub pengumpulan tugas-tugas berikutnya.

      Maecenas at nisl vel nisi dignissim fringilla vel nec risus. Praesent tincidunt
      tincidunt magna, vel consequat nulla faucibus id. Nullam efficitur lorem non
      eros dignissim, ut facilisis odio laoreet.
    `,
    status: 'berjalan',
    deadline: '2026-09-15',
    matkul: 'Pengembangan Aplikasi Web',
    tautanSubmission: null,      // isi dengan URL setelah submit
    updatedAt: '2026-09-11',
    catatan: [
      { tanggal: '2026-09-11', isi: 'Setup Vite + React + Tailwind v4 selesai.' },
    ],
  },
  {
    id: 'tugas-2',
    judul: 'Tugas 2: (Placeholder)',
    deskripsi: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deskripsi tugas kedua
      akan diisi setelah instruksi matkul diterima. Sed euismod, nunc vel ultricies
      lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
    `,
    status: 'belum-mulai',
    deadline: null,
    matkul: 'Pengembangan Aplikasi Web',
    tautanSubmission: null,
    updatedAt: '2026-09-11',
    catatan: [],
  },
]

export default tugasList
