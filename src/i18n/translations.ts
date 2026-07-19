export type Locale = 'en' | 'id' | 'ms' | 'ja';

interface Translations {
  [key: string]: { en: string; id: string; ms: string; ja: string };
}

const translations: Translations = {
  // ─── META ───
  siteTitle: {
    en: 'Al Usmani Islamic Boarding School | Student Enrollment 2026/2027',
    id: 'Pondok Pesantren Al Usmani | Penerimaan Santri 2026/2027',
    ms: 'Pondok Pesantren Al Usmani | Pendaftaran Pelajar 2026/2027',
    ja: 'アル・ウスマニ・イスラム寄宿学校 | 2026/2027年度 生徒募集',
  },
  siteDescription: {
    en: 'Student enrollment for Baitul Ulum Wal Huffadz Al Usmani Islamic Boarding School in Banten, Indonesia. Tahfidz, Diniyyah, TPQ, language, and character development programs.',
    id: 'Penerimaan santri Pondok Pesantren Baitul Ulum Wal Huffadz Al Usmani di Banten, Indonesia. Program Tahfidz, Diniyyah, TPQ, bahasa, dan pembentukan adab.',
    ms: 'Pendaftaran pelajar Pondok Pesantren Baitul Ulum Wal Huffadz Al Usmani di Banten, Indonesia. Program Tahfidz, Diniyyah, TPQ, bahasa, dan pembentukan adab.',
    ja: 'インドネシア・バンテン州のバイトゥル・ウルム・ワル・フッファーズ・アル・ウスマニ・イスラム寄宿学校の生徒募集。タハフィーズ、ディニーヤ、TPQ、語学、人格形成プログラム。',
  },

  // ─── NAV ───
  navAbout: { en: 'About', id: 'Tentang', ms: 'Tentang', ja: '概要' },
  navProgram: { en: 'Programs', id: 'Program', ms: 'Program', ja: 'プログラム' },
  navLife: { en: 'Student Life', id: 'Kehidupan Santri', ms: 'Kehidupan Pelajar', ja: '学生生活' },
  navLocation: { en: 'Location', id: 'Lokasi', ms: 'Lokasi', ja: 'アクセス' },
  navRegister: { en: 'Register Now →', id: 'Daftar Sekarang →', ms: 'Daftar Sekarang →', ja: '今すぐ登録 →' },
  menuOpen: { en: 'Open menu', id: 'Buka menu', ms: 'Buka menu', ja: 'メニューを開く' },
  menuClose: { en: 'Close menu', id: 'Tutup menu', ms: 'Tutup menu', ja: 'メニューを閉じる' },

  // ─── HERO ───
  heroBadge: {
    en: 'Student Enrollment 2026/2027 is Open',
    id: 'Penerimaan Santri 2026/2027 Dibuka',
    ms: 'Pendaftaran Pelajar 2026/2027 Dibuka',
    ja: '2026/2027年度 生徒募集開始',
  },
  heroTitle1: {
    en: 'Growing in knowledge.',
    id: 'Tumbuh dalam ilmu.',
    ms: 'Tumbuh dalam ilmu.',
    ja: '知識の中で成長する。',
  },
  heroTitle2: {
    en: 'Rooted in character.',
    id: 'Berakar dalam adab.',
    ms: 'Berakar dalam adab.',
    ja: '品格に根ざして。',
  },
  heroLead: {
    en: "Nurturing sons and daughters into a Qur'anic generation — knowledgeable, confident, and ready to bring benefit to the ummah.",
    id: "Mendampingi putra-putri menjadi generasi Qur'ani yang berilmu, percaya diri, dan siap membawa manfaat bagi umat.",
    ms: "Mendampingi anak-anak menjadi generasi Qur'ani yang berilmu, yakin diri, dan bersedia membawa manfaat kepada ummah.",
    ja: 'クルアーン世代として、知識に満ち、自信を持ち、ウンマに貢献できる子どもたちを育みます。',
  },
  heroCtaPrimary: { en: 'Start Registration', id: 'Mulai Pendaftaran', ms: 'Mulai Pendaftaran', ja: '登録を始める' },
  heroCtaSecondary: { en: 'Explore programs', id: 'Jelajahi program', ms: 'Terokai program', ja: 'プログラムを見る' },
  heroTrustTitle: {
    en: 'Boarding or day school',
    id: 'Muqim atau pulang-pergi',
    ms: 'Mukim atau ulang-alik',
    ja: '寄宿制または通学制',
  },
  heroTrustSub: {
    en: 'Flexible learning options for every family',
    id: 'Pilihan belajar sesuai kebutuhan keluarga',
    ms: 'Pilihan belajar mengikut keperluan keluarga',
    ja: 'ご家庭に合わせた柔軟な学習形態',
  },
  heroNote1: {
    en: 'From the very first step',
    id: 'Sejak langkah pertama',
    ms: 'Sejak langkah pertama',
    ja: '最初の一歩から',
  },
  heroNote2: {
    en: 'A home for learning & growing',
    id: 'Menjadi rumah untuk belajar & bertumbuh',
    ms: 'Menjadi rumah untuk belajar & bertumbuh',
    ja: '学び、成長するための場所',
  },

  // ─── MARQUEE ───
  marqueeCourage: { en: 'COURAGE', id: 'KEBERANIAN', ms: 'KEBERANIAN', ja: '勇気' },
  marqueeBenefit: { en: 'BENEFIT', id: 'MANFAAT', ms: 'MANFAAT', ja: '貢献' },

  // ─── ABOUT ───
  aboutLabel: { en: '01 / About Us', id: '01 / Tentang Kami', ms: '01 / Tentang Kami', ja: '01 / 私たちについて' },
  aboutKicker: {
    en: 'Education that touches both mind and heart',
    id: 'Pendidikan yang menyentuh akal dan hati',
    ms: 'Pendidikan yang menyentuh akal dan hati',
    ja: '知性と心に届く教育',
  },
  aboutTitle: {
    en: 'Not just memorizing, but',
    id: 'Bukan sekadar menghafal, tetapi',
    ms: 'Bukan sekadar menghafal, tetapi',
    ja: 'ただ暗記するのではなく、',
  },
  aboutTitleEm: {
    en: 'becoming a person of knowledge and noble character.',
    id: 'menjadi pribadi yang berilmu dan beradab.',
    ms: 'menjadi peribadi yang berilmu dan beradab.',
    ja: '知識と高潔な人格を備えた人間になること。',
  },
  aboutBody1: {
    en: "Baitul 'Ulum Wal Huffadz Al Usmani provides a learning environment that integrates the Qur'an, Islamic studies, languages, skills, and character development.",
    id: "Pondok Pesantren Baitul 'Ulum Wal Huffadz Al Usmani menghadirkan lingkungan belajar yang memadukan Al-Qur'an, ilmu agama, bahasa, keterampilan, dan pembentukan karakter.",
    ms: "Pondok Pesantren Baitul 'Ulum Wal Huffadz Al Usmani menyediakan persekitaran belajar yang mengintegrasikan Al-Qur'an, pengajian agama, bahasa, kemahiran, dan pembentukan sahsiah.",
    ja: 'バイトゥル・ウルム・ワル・フッファーズ・アル・ウスマニは、クルアーン、イスラム学、語学、スキル、人格形成を統合した学習環境を提供します。',
  },
  aboutBody2: {
    en: 'Every student is guided to understand knowledge, practice it daily, then confidently and gracefully convey it to others.',
    id: 'Setiap santri didampingi untuk memahami ilmu, mengamalkannya dalam keseharian, lalu berani menyampaikannya dengan santun dan penuh percaya diri.',
    ms: 'Setiap pelajar dibimbing untuk memahami ilmu, mengamalkannya dalam kehidupan harian, lalu berani menyampaikannya dengan santun dan penuh keyakinan.',
    ja: 'すべての生徒が知識を理解し、日々実践し、礼儀正しく自信を持って他者に伝えられるよう指導されます。',
  },
  aboutLink: {
    en: 'See daily student life',
    id: 'Lihat keseharian santri',
    ms: 'Lihat kehidupan harian pelajar',
    ja: '学生の日常を見る',
  },
  aboutQuote: {
    en: '"We believe every child has fitrah to love knowledge — our role is to create the environment for it to grow."',
    id: '"Kami percaya setiap anak punya fitrah mencintai ilmu — tugas kami menciptakan lingkungan untuk bertumbuh."',
    ms: '"Kami percaya setiap anak mempunyai fitrah mencintai ilmu — tugas kami mewujudkan persekitaran untuk bertumbuh."',
    ja: '「すべての子どもには知識を愛するフィトラ（天性）があると信じています。私たちの役割はそれを育む環境を作ることです。」',
  },

  // ─── PROGRAMS ───
  programLabel: { en: '02 / Programs', id: '02 / Program', ms: '02 / Program', ja: '02 / プログラム' },
  programKicker: {
    en: 'A curriculum that shapes the whole person',
    id: 'Kurikulum yang membentuk manusia seutuhnya',
    ms: 'Kurikulum yang membentuk insan seutuhnya',
    ja: '人間全体を育むカリキュラム',
  },
  programTitle: {
    en: 'Three pillars of',
    id: 'Tiga pilar',
    ms: 'Tiga tiang',
    ja: '学びの',
  },
  programTitleEm: { en: 'learning.', id: 'belajar.', ms: 'pembelajaran.', ja: '三つの柱。' },
  prog1Title: { en: 'Tahfidz & TPQ', id: 'Tahfidz & TPQ', ms: 'Tahfidz & TPQ', ja: 'タハフィーズ & TPQ' },
  prog1Desc: {
    en: "Qur'an memorization guided by experienced tahfidz teachers. For younger students, TPQ builds a strong tajwid foundation with a fun and engaging approach.",
    id: "Hafalan Al-Qur'an dibimbing oleh pengajar tahfidz berpengalaman. Bagi usia dini, TPQ membangun fondasi tajwid yang kuat dengan pendekatan menyenangkan.",
    ms: "Hafalan Al-Qur'an dibimbing oleh pengajar tahfidz berpengalaman. Bagi usia muda, TPQ membina asas tajwid yang kukuh dengan pendekatan yang menyeronokkan.",
    ja: '経験豊富なタハフィーズ教師によるクルアーン暗記指導。低年齢の生徒にはTPQが楽しいアプローチでタジュウィードの基礎を築きます。',
  },
  prog2Title: { en: 'Diniyyah', id: 'Diniyyah', ms: 'Diniyyah', ja: 'ディニーヤ' },
  prog2Desc: {
    en: 'Classical Islamic studies (kitab kuning) covering fiqh, hadith, aqidah, and akhlak. Students build depth in religious knowledge through guided traditional learning.',
    id: 'Kajian kitab kuning meliputi fiqih, hadits, aqidah, dan akhlak. Santri membangun kedalaman ilmu agama melalui pembelajaran tradisional yang terarah.',
    ms: 'Kajian kitab kuning meliputi fiqh, hadis, akidah, dan akhlak. Pelajar membina kedalaman ilmu agama melalui pembelajaran tradisional yang terarah.',
    ja: 'フィクフ、ハディース、アキーダ、アフラークを網羅する古典イスラム学（キタブ・クニン）。体系的な伝統教育を通じて宗教知識を深めます。',
  },
  prog3Title: { en: 'Language & Confidence', id: 'Bahasa & Percaya Diri', ms: 'Bahasa & Keyakinan Diri', ja: '語学 & 自信' },
  prog3Desc: {
    en: 'Arabic and English language programs, public speaking (muhadharah), and self-development activities. Students learn to communicate clearly and lead with confidence.',
    id: 'Program bahasa Arab dan Inggris, muhadharah (pidato), dan kegiatan pengembangan diri. Santri belajar berkomunikasi jelas dan memimpin dengan yakin.',
    ms: 'Program bahasa Arab dan Inggeris, muhadharah (pidato), dan aktiviti pembangunan diri. Pelajar belajar berkomunikasi dengan jelas dan memimpin dengan yakin.',
    ja: 'アラビア語・英語プログラム、ムハーダラ（演説）、自己啓発活動。明確なコミュニケーションと自信あるリーダーシップを学びます。',
  },
  progLink: { en: 'Register for this program', id: 'Daftar untuk program ini', ms: 'Daftar untuk program ini', ja: 'このプログラムに登録' },
  curriculumLabel: { en: 'What they learn', id: 'Yang dipelajari', ms: 'Yang dipelajari', ja: '学ぶこと' },
  currTahfidz: { en: 'Tahfidz & Tahsin', id: 'Tahfidz & Tahsin', ms: 'Tahfidz & Tahsin', ja: 'タハフィーズ & タフスィーン' },
  currKitab: { en: 'Kitab Kuning', id: 'Kitab Kuning', ms: 'Kitab Kuning', ja: 'キタブ・クニン' },
  currFiqh: { en: 'Fiqh & Hadith', id: 'Fiqih & Hadits', ms: 'Fiqh & Hadis', ja: 'フィクフ & ハディース' },
  currAqidah: { en: 'Aqidah & Akhlak', id: 'Aqidah & Akhlak', ms: 'Akidah & Akhlak', ja: 'アキーダ & アフラーク' },
  currArabic: { en: 'Arabic', id: 'Bahasa Arab', ms: 'Bahasa Arab', ja: 'アラビア語' },
  currEnglish: { en: 'English', id: 'Bahasa Inggris', ms: 'Bahasa Inggeris', ja: '英語' },
  currNahwu: { en: 'Nahwu Shorof', id: 'Nahwu Shorof', ms: 'Nahwu Shorof', ja: 'ナフウ・ショロフ' },
  currMuhadharah: { en: 'Muhadharah', id: 'Muhadharah', ms: 'Muhadharah', ja: 'ムハーダラ' },

  // ─── JOURNEY ───
  journeyLabel: { en: '03 / Student Journey', id: '03 / Perjalanan Santri', ms: '03 / Perjalanan Pelajar', ja: '03 / 学びの旅' },
  journeyCaption: {
    en: 'Learning with dedication, growing with joy.',
    id: 'Belajar dengan tekun, bertumbuh dengan gembira.',
    ms: 'Belajar dengan tekun, bertumbuh dengan gembira.',
    ja: '真剣に学び、喜びの中で成長する。',
  },
  journeyKicker: {
    en: 'Guided at every step',
    id: 'Didampingi di setiap proses',
    ms: 'Dibimbing di setiap proses',
    ja: '一歩一歩寄り添いながら',
  },
  journeyTitle: {
    en: 'A rhythm that builds',
    id: 'Ritme yang membentuk',
    ms: 'Ritma yang membentuk',
    ja: '良い習慣を築く',
  },
  journeyTitleEm: { en: 'good habits.', id: 'kebiasaan baik.', ms: 'kebiasaan baik.', ja: 'リズム。' },
  step1Title: { en: 'Discover potential', id: 'Kenali potensi', ms: 'Kenali potensi', ja: '可能性を発見' },
  step1Desc: {
    en: 'Every child arrives with their own story, abilities, and learning pace.',
    id: 'Setiap anak datang dengan cerita, kemampuan, dan ritme belajar yang berbeda.',
    ms: 'Setiap anak datang dengan cerita, kebolehan, dan rentak pembelajaran yang berbeza.',
    ja: 'すべての子どもがそれぞれの物語、能力、学びのペースを持って入学します。',
  },
  step2Title: { en: 'Build habits', id: 'Bangun kebiasaan', ms: 'Bina kebiasaan', ja: '習慣を築く' },
  step2Desc: {
    en: 'Worship, study, discipline, and manners are cultivated through structured daily routines.',
    id: 'Ibadah, belajar, disiplin, dan adab dilatih dalam keseharian yang terarah.',
    ms: 'Ibadah, belajar, disiplin, dan adab dilatih dalam kehidupan harian yang terarah.',
    ja: '礼拝、学習、規律、礼儀が体系的な日課を通じて培われます。',
  },
  step3Title: { en: 'Dare to serve', id: 'Berani bermanfaat', ms: 'Berani memberi manfaat', ja: '奉仕する勇気' },
  step3Desc: {
    en: 'Students are trained to present, speak, teach, and contribute to their community.',
    id: 'Santri dilatih tampil, berbicara, mengajar, dan hadir untuk lingkungannya.',
    ms: 'Pelajar dilatih untuk tampil, bertutur, mengajar, dan hadir untuk persekitarannya.',
    ja: '発表、スピーチ、教えること、そして地域への貢献ができるよう訓練されます。',
  },

  // ─── GALLERY ───
  galleryLabel: { en: '04 / Student Life', id: '04 / Kehidupan Santri', ms: '04 / Kehidupan Pelajar', ja: '04 / 学生生活' },
  galleryKicker: {
    en: 'Days full of meaning',
    id: 'Hari-hari yang penuh makna',
    ms: 'Hari-hari yang penuh makna',
    ja: '意義に満ちた日々',
  },
  galleryTitle1: { en: 'Learn. Grow.', id: 'Belajar. Bertumbuh.', ms: 'Belajar. Bertumbuh.', ja: '学ぶ。成長する。' },
  galleryTitle2: { en: 'Together.', id: 'Bersama.', ms: 'Bersama.', ja: 'ともに。' },
  galleryFollow: { en: 'Follow @ponpes_al_usmani', id: 'Ikuti @ponpes_al_usmani', ms: 'Ikuti @ponpes_al_usmani', ja: '@ponpes_al_usmani をフォロー' },
  galleryAlt1: { en: 'Bonds that strengthen', id: 'Kebersamaan yang menguatkan', ms: 'Kebersamaan yang menguatkan', ja: '絆を深める仲間たち' },
  galleryCaption1: { en: 'Bonds that strengthen', id: 'Kebersamaan yang menguatkan', ms: 'Kebersamaan yang menguatkan', ja: '絆を深める仲間たち' },
  galleryAlt2: { en: 'Learning tahsin together', id: 'Belajar tahsin bersama', ms: 'Belajar tahsin bersama', ja: '一緒にタフスィーンを学ぶ' },
  galleryCaption2: { en: 'Growing through the process', id: 'Tumbuh melalui proses', ms: 'Tumbuh melalui proses', ja: '過程を通じて成長する' },
  galleryAlt3: { en: 'Growing through the process', id: 'Tumbuh melalui proses', ms: 'Tumbuh melalui proses', ja: '過程を通じて成長する' },
  galleryCaption3: { en: 'Join Al Usmani family', id: 'Bergabung bersama Al Usmani', ms: 'Sertai keluarga Al Usmani', ja: 'アル・ウスマニの家族になろう' },
  galleryAlt4: { en: 'Dare to perform and create', id: 'Berani tampil dan berkarya', ms: 'Berani tampil dan berkarya', ja: '挑戦し、創造する勇気' },
  galleryCaption4: { en: 'Dare to perform and create', id: 'Berani tampil dan berkarya', ms: 'Berani tampil dan berkarya', ja: '挑戦し、創造する勇気' },

  // ─── LOCATION ───
  locationLabel: { en: '05 / Location', id: '05 / Lokasi', ms: '05 / Lokasi', ja: '05 / アクセス' },
  locationKicker: {
    en: 'Close to home, warm like home',
    id: 'Dekat dari rumah, hangat seperti rumah',
    ms: 'Dekat dari rumah, hangat seperti rumah',
    ja: '家から近く、家のように温かい',
  },
  locationTitle: { en: 'Find us', id: 'Temukan kami', ms: 'Temui kami', ja: '所在地' },
  locationTitleEm: { en: 'in Banten, Indonesia.', id: 'di Banten, Indonesia.', ms: 'di Banten, Indonesia.', ja: 'インドネシア、バンテン州。' },
  locationOrg: {
    en: 'Yayasan Baitul Ulum Wal Huffadz Al Usmani',
    id: 'Yayasan Baitul Ulum Wal Huffadz Al Usmani',
    ms: 'Yayasan Baitul Ulum Wal Huffadz Al Usmani',
    ja: 'バイトゥル・ウルム・ワル・フッファーズ・アル・ウスマニ財団',
  },
  locationAddress: {
    en: 'Jl. Wiru Indah I, Parung Serab, Tangerang, Banten, Indonesia',
    id: 'Jl. Wiru Indah I, Parung Serab, Tangerang, Banten, Indonesia',
    ms: 'Jl. Wiru Indah I, Parung Serab, Tangerang, Banten, Indonesia',
    ja: 'インドネシア、バンテン州タンゲラン市 Jl. Wiru Indah I, Parung Serab',
  },
  locationCta: { en: 'Open Google Maps', id: 'Buka Google Maps', ms: 'Buka Google Maps', ja: 'Google マップで開く' },

  // ─── REGISTRATION ───
  regLabel: { en: '06 / Registration', id: '06 / Pendaftaran', ms: '06 / Pendaftaran', ja: '06 / 入学登録' },
  regKicker: {
    en: 'One step closer to a meaningful education',
    id: 'Satu langkah lebih dekat menuju pendidikan yang bermakna',
    ms: 'Satu langkah lebih dekat menuju pendidikan yang bermakna',
    ja: '意義ある教育への第一歩',
  },
  regTitle: { en: 'Register your', id: 'Daftarkan putra-putri', ms: 'Daftarkan anak', ja: 'お子様の' },
  regTitleEm: { en: 'child.', id: 'Anda.', ms: 'anda.', ja: '登録。' },
  regSubtitle: {
    en: 'Fill in basic information. We will contact you via WhatsApp within 1×24 hours.',
    id: 'Isi data dasar. Kami akan menghubungi Anda via WhatsApp dalam 1×24 jam.',
    ms: 'Isi maklumat asas. Kami akan menghubungi anda melalui WhatsApp dalam 1×24 jam.',
    ja: '基本情報をご記入ください。24時間以内にWhatsAppでご連絡いたします。',
  },
  formParentName: { en: "Parent's full name", id: 'Nama lengkap orang tua', ms: 'Nama penuh ibu bapa', ja: '保護者氏名' },
  formParentPlaceholder: { en: 'e.g. Ahmad Abdullah', id: 'contoh: Ahmad Abdullah', ms: 'contoh: Ahmad Abdullah', ja: '例: 山田 太郎' },
  formPhone: { en: 'WhatsApp number', id: 'Nomor WhatsApp', ms: 'Nombor WhatsApp', ja: 'WhatsApp番号' },
  formPhonePlaceholder: { en: '08xx xxxx xxxx', id: '08xx xxxx xxxx', ms: '08xx xxxx xxxx', ja: '08xx xxxx xxxx' },
  formStudentName: { en: 'Student name', id: 'Nama calon santri', ms: 'Nama calon pelajar', ja: '生徒氏名' },
  formStudentPlaceholder: { en: "Child's full name", id: 'Nama lengkap anak', ms: 'Nama penuh anak', ja: 'お子様のフルネーム' },
  formAge: { en: 'Age', id: 'Usia', ms: 'Umur', ja: '年齢' },
  formProgram: { en: 'Program of interest', id: 'Program yang diminati', ms: 'Program yang diminati', ja: '希望プログラム' },
  formProgOpt1: { en: 'Tahfidz / TPQ', id: 'Tahfidz / TPQ', ms: 'Tahfidz / TPQ', ja: 'タハフィーズ / TPQ' },
  formProgOpt2: { en: 'Diniyyah', id: 'Diniyyah', ms: 'Diniyyah', ja: 'ディニーヤ' },
  formProgOpt3: { en: 'All programs', id: 'Semua program', ms: 'Semua program', ja: '全プログラム' },
  formAttendance: { en: 'Attendance mode', id: 'Sistem kehadiran', ms: 'Sistem kehadiran', ja: '通学形態' },
  formAttOpt1: { en: 'Boarding (Muqim)', id: 'Muqim', ms: 'Mukim', ja: '寄宿（ムキム）' },
  formAttOpt2: { en: 'Day school', id: 'Pulang-pergi', ms: 'Ulang-alik', ja: '通学' },
  formAttOpt3: { en: 'Want to consult', id: 'Ingin konsultasi', ms: 'Ingin berunding', ja: '相談したい' },
  formNotes: { en: 'Questions', id: 'Yang ingin ditanyakan', ms: 'Soalan', ja: 'ご質問' },
  formNotesOptional: { en: '(optional)', id: '(opsional)', ms: '(pilihan)', ja: '（任意）' },
  formNotesPlaceholder: {
    en: 'Fees, schedule, facilities, or special needs...',
    id: 'Biaya, jadwal, fasilitas, atau kebutuhan khusus...',
    ms: 'Yuran, jadual, kemudahan, atau keperluan khas...',
    ja: '費用、スケジュール、施設、特別なご要望など...',
  },
  formSubmit: { en: 'Submit Registration Interest', id: 'Kirim Minat Pendaftaran', ms: 'Hantar Minat Pendaftaran', ja: '入学希望を送信' },
  formPrivacy: {
    en: 'Data is used only for the student enrollment process.',
    id: 'Data hanya digunakan untuk proses penerimaan santri.',
    ms: 'Data hanya digunakan untuk proses pendaftaran pelajar.',
    ja: 'データは入学手続きにのみ使用されます。',
  },

  // ─── WHATSAPP MESSAGE ───
  waMessage: {
    en: "Assalamu'alaikum, I would like to register my child:",
    id: "Assalamu'alaikum, saya ingin mendaftarkan anak saya:",
    ms: "Assalamu'alaikum, saya ingin mendaftarkan anak saya:",
    ja: "アッサラームアライクム、子どもの入学を希望します：",
  },
  waParent: { en: 'Parent name', id: 'Nama Ortu', ms: 'Nama Ibu Bapa', ja: '保護者名' },
  waPhone: { en: 'WhatsApp', id: 'No. WA', ms: 'No. WA', ja: 'WhatsApp' },
  waStudent: { en: 'Student name', id: 'Nama Santri', ms: 'Nama Pelajar', ja: '生徒名' },
  waAge: { en: 'Age', id: 'Usia', ms: 'Umur', ja: '年齢' },
  waProgram: { en: 'Program', id: 'Program', ms: 'Program', ja: 'プログラム' },
  waAttendance: { en: 'Mode', id: 'Sistem', ms: 'Sistem', ja: '形態' },
  waNotes: { en: 'Notes', id: 'Catatan', ms: 'Catatan', ja: '備考' },

  // ─── FOOTER ───
  footerTagline: {
    en: 'Educating with knowledge, accompanying with character.',
    id: 'Mendidik dengan ilmu, membersamai dengan adab.',
    ms: 'Mendidik dengan ilmu, menemani dengan adab.',
    ja: '知識で教え、品格で寄り添う。',
  },
  footerCopyright: {
    en: '© 2026 Yayasan Baitul Ulum Wal Huffadz Al Usmani',
    id: '© 2026 Yayasan Baitul Ulum Wal Huffadz Al Usmani',
    ms: '© 2026 Yayasan Baitul Ulum Wal Huffadz Al Usmani',
    ja: '© 2026 バイトゥル・ウルム・ワル・フッファーズ・アル・ウスマニ財団',
  },
  footerBackTop: { en: 'Back to top ↑', id: 'Kembali ke atas ↑', ms: 'Kembali ke atas ↑', ja: 'ページ上部へ ↑' },

  // ─── FAB ───
  fabLabel: {
    en: 'Contact Al Usmani via WhatsApp',
    id: 'Hubungi Al Usmani melalui WhatsApp',
    ms: 'Hubungi Al Usmani melalui WhatsApp',
    ja: 'WhatsAppでアル・ウスマニに連絡',
  },
  fabText: { en: 'Ask Admin', id: 'Tanya Admin', ms: 'Tanya Admin', ja: '問い合わせ' },
};

export function t(lang: Locale, key: string): string {
  return translations[key]?.[lang] ?? translations[key]?.['en'] ?? key;
}

export function getLocalePath(lang: Locale, path: string = '/'): string {
  if (lang === 'en') return path;
  return `/${lang}${path}`;
}

export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
  { code: 'ms', label: 'Malaysia', flag: '🇲🇾' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];
