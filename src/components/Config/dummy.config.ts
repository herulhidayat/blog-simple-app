export const DUMMY_DATA = [
    {
      "id": 1,
      "title": "The Future of Web Development",
      "author": "Khairul Hidayat",
      "category": "Tech",
      "summary": "An overview of upcoming trends in frontend development.",
      "content": "<h2>The Future of Web Development</h2><p>Web development terus bergerak cepat. Kombinasi meta-framework, AI, edge computing, dan standar web baru membuat developer dapat membangun aplikasi lebih cepat, aman, dan scalable.</p><h2>Tren Utama</h2><ul><li><strong>Meta-framework</strong> seperti Next.js, Nuxt, SvelteKit memudahkan SSR/SSG/ISR dan routing yang matang.</li><li><strong>AI-assisted dev</strong> mempercepat boilerplate, test, dan refactor.</li><li><strong>Edge &amp; serverless</strong> memangkas latency dengan eksekusi dekat ke user.</li><li><strong>Web Performance</strong>: Core Web Vitals, prefetch pintar, dan data fetching streaming.</li><li><strong>Accessibility by default</strong> jadi baseline kualitas.</li></ul><h2>Best Practices Modern</h2><ol><li>Prioritaskan <em>progressive enhancement</em> dan loading bertahap.</li><li>Gunakan <code>type-safe</code> end-to-end (mis. TypeScript + Zod).</li><li>Automasi test + lint + preview pada CI.</li></ol><blockquote><p>Bangun cepat itu bagus, tapi bangun benar lebih tahan lama.</p></blockquote><h2>Checklist Singkat</h2><ul><li>Analisis bundel &amp; split berdasarkan route.</li><li>Monitoring RUM + error tracking.</li><li>Dokumentasi dan design system konsisten.</li></ul>"
    },
    {
      "id": 2,
      "title": "Minimalist Living: Finding Joy in Simplicity",
      "author": "Ayu Lestari",
      "category": "Lifestyle",
      "summary": "How minimalism can improve mental clarity and overall well-being.",
      "content": "<h2>Minimalist Living: Finding Joy in Simplicity</h2><p>Minimalisme bukan soal memiliki sesedikit mungkin, melainkan menyisakan ruang untuk hal yang paling berarti. Dengan lebih sedikit distraksi, fokus dan ketenangan meningkat.</p><h2>Manfaat Utama</h2><ul><li>Kejelasan mental dan manajemen stres yang lebih baik.</li><li>Penghematan waktu dan biaya.</li><li>Ruang hidup rapi dan mudah dirawat.</li></ul><h2>Langkah Praktis</h2><ol><li><strong>Declutter</strong> per kategori: pakaian, dokumen, digital.</li><li>Terapkan aturan <em>one in, one out</em>.</li><li>Jadwalkan <em>maintenance</em> 15 menit per hari.</li></ol><blockquote><p>“Simplicity is the ultimate sophistication.”</p></blockquote><h2>Checklist Mingguan</h2><ul><li>Rapikan permukaan meja.</li><li>Evaluasi langganan yang tidak terpakai.</li><li>Kurasi galeri foto &amp; file digital.</li></ul>"
    },
    {
      "id": 3,
      "title": "Startup Funding 101",
      "author": "Budi Santoso",
      "category": "Business",
      "summary": "A beginner’s guide to understanding startup funding rounds.",
      "content": "<h2>Startup Funding 101</h2><p>Pendanaan startup dibagi menjadi beberapa tahap, masing-masing dengan tujuan, instrumen, dan ekspektasi yang berbeda.</p><h2>Tahapan Pendanaan</h2><ul><li><strong>Pre-seed</strong>: Validasi ide &amp; riset pasar.</li><li><strong>Seed</strong>: Product-market fit awal, bangun tim inti.</li><li><strong>Series A</strong>: Scale awal, metrik traksi konsisten.</li><li><strong>Series B+</strong>: Ekspansi pasar &amp; optimasi unit economics.</li></ul><h2>Instrumen Umum</h2><ul><li><strong>Equity</strong>: Pertukaran saham dengan dana.</li><li><strong>SAFE/Convertible Note</strong>: Konversi ke equity di ronde berikutnya.</li><li><strong>Grants</strong>: Dana hibah tanpa ekuitas.</li></ul><h2>Kesiapan Pitch</h2><ol><li>Masalah nyata &amp; ukuran pasar jelas.</li><li>Solusi unik + keunggulan kompetitif.</li><li>Metrik kunci (growth, retention, unit economics).</li><li>Roadmap 12–18 bulan dan penggunaan dana.</li></ol><p><em>Tip:</em> Jaga <strong>data room</strong> rapi: cap table, KPI, legal, dan keuangan.</p>"
    },
    {
      "id": 4,
      "title": "Mastering TypeScript for Scalable Apps",
      "author": "Khairul Hidayat",
      "category": "Tech",
      "summary": "Why TypeScript is becoming essential for modern frontend developers.",
      "content": "<h2>Mastering TypeScript for Scalable Apps</h2><p>TypeScript menambahkan sistem tipe statis di atas JavaScript sehingga kode lebih mudah dirawat, aman, dan dapat diskalakan.</p><h2>Pilar Utama</h2><ul><li><strong>Types &amp; Interfaces</strong> untuk kontrak data yang eksplisit.</li><li><strong>Generics</strong> untuk komponen reusable.</li><li><strong>Narrowing</strong> &amp; <strong>discriminated unions</strong> untuk kontrol alur.</li></ul><h2>Contoh</h2><pre><code class=\"language-ts\">type Result&lt;T&gt; = { ok: true; data: T } | { ok: false; error: string };\nfunction parseJSON&lt;T&gt;(raw: string): Result&lt;T&gt; {\n  try { return { ok: true, data: JSON.parse(raw) as T }; }\n  catch (e) { return { ok: false, error: (e as Error).message }; }\n}\n</code></pre><h2>Best Practices</h2><ol><li>Aktifkan <code>strict</code> di <code>tsconfig.json</code>.</li><li>Gunakan <code>zod</code>/<code>valibot</code> untuk validasi runtime.</li><li>Ekspos <code>types</code> dari modul, bukan <em>implementation details</em>.</li></ol>"
    },
    {
      "id": 5,
      "title": "Healthy Eating on a Budget",
      "author": "Siti Nurhaliza",
      "category": "Lifestyle",
      "summary": "Tips for maintaining a healthy diet without overspending.",
      "content": "<h2>Healthy Eating on a Budget</h2><p>Makan sehat tidak harus mahal. Dengan perencanaan yang tepat, Anda bisa mendapatkan gizi seimbang sambil tetap hemat.</p><h2>Strategi Inti</h2><ul><li>Rencanakan menu mingguan dan belanja dengan daftar.</li><li>Pilih bahan <em>whole food</em> serbaguna: beras, telur, sayur musiman.</li><li>Batch cooking &amp; simpan porsi beku.</li></ul><h2>Contoh Menu 3 Hari</h2><table><thead><tr><th>Hari</th><th>Pagi</th><th>Siang</th><th>Malam</th></tr></thead><tbody><tr><td>1</td><td>Oat + pisang</td><td>Nasi + tumis sayur + telur</td><td>Sup ayam sayur</td></tr><tr><td>2</td><td>Yogurt + granola</td><td>Mi jagung + ayam suwir</td><td>Tumis tempe brokoli</td></tr><tr><td>3</td><td>Roti gandum + telur</td><td>Nasi + sarden + sayur bening</td><td>Capcay tahu</td></tr></tbody></table><p><em>Tip:</em> Beli dalam kemasan besar untuk bahan pokok dan gunakan ulang bumbu dasar.</p>"
    },
    {
      "id": 6,
      "title": "Remote Work: Building Productive Teams",
      "author": "Andi Pratama",
      "category": "Business",
      "summary": "Best practices for managing and collaborating in remote teams.",
      "content": "<h2>Remote Work: Building Productive Teams</h2><p>Tim remote yang produktif membutuhkan komunikasi terstruktur, dokumentasi, dan budaya kepercayaan.</p><h2>Pilar Produktivitas</h2><ul><li><strong>Async-first</strong>: keputusan terdokumentasi, tidak bergantung meeting.</li><li><strong>Ritual</strong>: weekly goals, demo day, retrospektif.</li><li><strong>Transparansi</strong>: dashboard KPI dan status proyek.</li></ul><h2>Praktik Harian</h2><ol><li>Gunakan dokumen hidup (wiki) sebagai <em>single source of truth</em>.</li><li>Batasi rapat &amp; tetapkan agenda + catatan aksi.</li><li>Time zone aware: <em>core hours</em> yang disepakati.</li></ol><blockquote><p>Over-communication tertulis &gt; meeting marathon.</p></blockquote>"
    },
    {
      "id": 7,
      "title": "AI and the Future of Creative Design",
      "author": "Khairul Hidayat",
      "category": "Tech",
      "summary": "Exploring how artificial intelligence is transforming design workflows.",
      "content": "<h2>AI and the Future of Creative Design</h2><p>AI mempercepat eksplorasi ide, generasi variasi, dan dokumentasi desain. Peran desainer bergeser ke arah kurasi, arahan kreatif, dan validasi UX.</p><h2>Use Cases</h2><ul><li>Ideation: moodboard &amp; style exploration.</li><li>Asset generation: icon, ilustrasi, mockup.</li><li>UX assist: teks microcopy &amp; empty state.</li></ul><h2>Workflow Saran</h2><ol><li>Mulai dari brief yang jelas (persona, tujuan, batasan).</li><li>Iterasi cepat &amp; evaluasi berbasis metrik (task success, SUS).</li><li>Dokumentasikan keputusan dan alasan penolakan alternatif.</li></ol><p><em>Catatan:</em> Jaga kepatuhan lisensi aset &amp; etika penggunaan data.</p>"
    },
    {
      "id": 8,
      "title": "Mastering TypeScript for Scalable Apps",
      "author": "Khairul Hidayat",
      "category": "Tech",
      "summary": "Why TypeScript is becoming essential for modern frontend developers.",
      "content": "<h2>Mastering TypeScript: Advanced Patterns</h2><p>Lanjutan TypeScript untuk aplikasi besar: utility types, modulasi tipe, dan arsitektur yang ramah refactor.</p><h2>Pola Lanjutan</h2><ul><li><strong>Mapped Types</strong> &amp; <strong>Conditional Types</strong> untuk transformasi tipe.</li><li><strong>Branded Types</strong> mencegah kebingungan ID.</li><li><strong>Module boundaries</strong>: ekspor tipe publik.</li></ul><pre><code class=\"language-ts\">type Brand&lt;T, B&gt; = T &amp; { __brand: B };\ntype UserId = Brand&lt;string, 'UserId'&gt;;\nfunction getUserById(id: UserId) {/* ... */}\n</code></pre><h2>Monorepo &amp; DX</h2><ol><li>Gunakan <code>tsc --build</code> untuk project references.</li><li>Strictness konsisten antar paket.</li><li>Publisher hanya sertakan <code>.d.ts</code> + ESM/CJS sesuai target.</li></ol>"
    },
    {
      "id": 9,
      "title": "Healthy Eating on a Budget",
      "author": "Siti Nurhaliza",
      "category": "Lifestyle",
      "summary": "Tips for maintaining a healthy diet without overspending.",
      "content": "<h2>Budget-Friendly Healthy Eating: Playbook</h2><p>Fokus pada pangan lokal musiman, karbo kompleks, protein terjangkau, dan serat.</p><h2>Keranjang Belanja Dasar</h2><ul><li>Beras/umbi, telur, tempe/tahu, ayam bagian dada/paha.</li><li>Sayur hijau, wortel, kol, tomat, bawang, cabai.</li><li>Buah musiman: pisang, pepaya, semangka.</li></ul><h2>Batch Cooking</h2><ol><li>Masak protein dalam jumlah besar (ungkep/panggang).</li><li>Siapkan <em>base</em> bumbu (merah, putih, kuning).</li><li>Bagi ke porsi dan simpan beku.</li></ol><p><em>Tip:</em> Kurangi minuman manis kemasan; alokasikan ke sumber protein.</p>"
    },
    {
      "id": 10,
      "title": "Remote Work: Building Productive Teams",
      "author": "Andi Pratama",
      "category": "Business",
      "summary": "Best practices for managing and collaborating in remote teams.",
      "content": "<h2>Remote Work: Operasional &amp; Kultur</h2><p>Skalakan tim remote dengan standar operasi ringan namun tegas.</p><h2>Operating System</h2><ul><li><strong>Roadmap publik</strong> per kuartal dan status mingguan.</li><li><strong>PRD ringan</strong> + acceptance criteria jelas.</li><li><strong>Incident review</strong> tanpa saling menyalahkan.</li></ul><h2>People</h2><ol><li>Onboarding terstruktur (buddy system, 30-60-90).</li><li>Feedback dua arah: 1:1 rutin, survey pulse.</li><li>Ritual sosial: virtual coffee, game ringan.</li></ol>"
    },
    {
      "id": 11,
      "title": "AI and the Future of Creative Design",
      "author": "Khairul Hidayat",
      "category": "Tech",
      "summary": "Exploring how artificial intelligence is transforming design workflows.",
      "content": "<h2>AI x Design: Ethics &amp; Governance</h2><p>Selain produktivitas, penting menetapkan koridor etika, hak cipta, dan tata kelola model.</p><h2>Prinsip</h2><ul><li><strong>Transparansi</strong>: cantumkan penggunaan AI dalam proses.</li><li><strong>Consent &amp; Lisensi</strong> untuk dataset &amp; aset.</li><li><strong>Bias Audit</strong> pada output visual &amp; copy.</li></ul><h2>Kontrol Kualitas</h2><ol><li>Checklist UX &amp; aksesibilitas pada deliverable.</li><li>Review manusia wajib untuk materi publik.</li><li>Arsipkan prompt dan keputusan untuk akuntabilitas.</li></ol>"
    }
  ]
  