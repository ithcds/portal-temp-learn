export type Locale = 'en' | 'id' | 'ms';

interface Translations {
  [key: string]: { en: string; id: string; ms: string };
}

const translations: Translations = {
  // ─── META ───
  siteTitle: {
    en: 'Al Usmani Islamic Boarding School | Student Enrollment 2026/2027',
    id: 'Pondok Pesantren Al Usmani | Penerimaan Santri 2026/2027',
    ms: 'Pondok Pesantren Al Usmani | Pendaftaran Pelajar 2026/2027',
  },
  siteDescription: {
    en: 'Student enrollment for Baitul Ulum Wal Huffadz Al Usmani Islamic Boarding School in Ciledug, Tangerang. Tahfidz, Diniyyah, TPQ, language, and character development programs.',
    id: 'Penerimaan santri Pondok Pesantren Baitul Ulum Wal Huffadz Al Usmani di Ciledug, Tangerang. Program Tahfidz, Diniyyah, TPQ, bahasa, dan pembentukan adab.',
    ms: 'Pendaftaran pelajar Pondok Pesantren Baitul Ulum Wal Huffadz Al Usmani di Ciledug, Tangerang. Program Tahfidz, Diniyyah, TPQ, bahasa, dan pembentukan adab.',
  },

  // ─── NAV ───
  navAbout: { en: 'About', id: 'Tentang', ms: 'Tentang' },
  navProgram: { en: 'Programs', id: 'Program', ms: 'Program' },
  navLife: { en: 'Student Life', id: 'Kehidupan Santri', ms: 'Kehidupan Pelajar' },
  navLocation: { en: 'Location', id: 'Lokasi', ms: 'Lokasi' },
  navRegister: { en: 'Register Now →', id: 'Daftar Sekarang →', ms: 'Daftar Sekarang →' },
  menuOpen: { en: 'Open menu', id: 'Buka menu', ms: 'Buka menu' },
  menuClose: { en: 'Close menu', id: 'Tutup menu', ms: 'Tutup menu' },

  // ─── HERO ───
  heroBadge: {
    en: 'Student Enrollment 2026/2027 is Open',
    id: 'Penerimaan Santri 2026/2027 Dibuka',
    ms: 'Pendaftaran Pelajar 2026/2027 Dibuka',
  },
  heroTitle1: {
    en: 'Growing in knowledge.',
    id: 'Tumbuh dalam ilmu.',
    ms: 'Tumbuh dalam ilmu.',
  },
  heroTitle2: {
    en: 'Rooted in character.',
    id: 'Berakar dalam adab.',
    ms: 'Berakar dalam adab.',
  },
  heroLead: {
    en: "Nurturing sons and daughters into a Qur'anic generation — knowledgeable, confident, and ready to bring benefit to the ummah.",
    id: "Mendampingi putra-putri menjadi generasi Qur'ani yang berilmu, percaya diri, dan siap membawa manfaat bagi umat.",
    ms: "Mendampingi anak-anak menjadi generasi Qur'ani yang berilmu, yakin diri, dan bersedia membawa manfaat kepada ummah.",
  },
  heroCtaPrimary: { en: 'Start Registration', id: 'Mulai Pendaftaran', ms: 'Mulai Pendaftaran' },
  heroCtaSecondary: { en: 'Explore programs', id: 'Jelajahi program', ms: 'Terokai program' },
  heroTrustTitle: {
    en: 'Boarding or day school',
    id: 'Muqim atau pulang-pergi',
    ms: 'Mukim atau ulang-alik',
  },
  heroTrustSub: {
    en: 'Flexible learning options for every family',
    id: 'Pilihan belajar sesuai kebutuhan keluarga',
    ms: 'Pilihan belajar mengikut keperluan keluarga',
  },
  heroNote1: {
    en: 'From the very first step',
    id: 'Sejak langkah pertama',
    ms: 'Sejak langkah pertama',
  },
  heroNote2: {
    en: 'A home for learning & growing',
    id: 'Menjadi rumah untuk belajar & bertumbuh',
    ms: 'Menjadi rumah untuk belajar & bertumbuh',
  },

  // ─── MARQUEE ───
  marqueeCourage: { en: 'COURAGE', id: 'KEBERANIAN', ms: 'KEBERANIAN' },
  marqueeBenefit: { en: 'BENEFIT', id: 'MANFAAT', ms: 'MANFAAT' },

  // ─── ABOUT ───
  aboutLabel: { en: '01 / About Us', id: '01 / Tentang Kami', ms: '01 / Tentang Kami' },
  aboutKicker: {
    en: 'Education that touches both mind and heart',
    id: 'Pendidikan yang menyentuh akal dan hati',
    ms: 'Pendidikan yang menyentuh akal dan hati',
  },
  aboutTitle: {
    en: 'Not just memorizing, but',
    id: 'Bukan sekadar menghafal, tetapi',
    ms: 'Bukan sekadar menghafal, tetapi',
  },
  aboutTitleEm: {
    en: 'becoming a person of knowledge and noble character.',
    id: 'menjadi pribadi yang berilmu dan beradab.',
    ms: 'menjadi peribadi yang berilmu dan beradab.',
  },
  aboutBody1: {
    en: "Baitul 'Ulum Wal Huffadz Al Usmani provides a learning environment that integrates the Qur'an, Islamic studies, languages, skills, and character development.",
    id: "Pondok Pesantren Baitul 'Ulum Wal Huffadz Al Usmani menghadirkan lingkungan belajar yang memadukan Al-Qur'an, ilmu agama, bahasa, keterampilan, dan pembentukan karakter.",
    ms: "Pondok Pesantren Baitul 'Ulum Wal Huffadz Al Usmani menyediakan persekitaran belajar yang mengintegrasikan Al-Qur'an, pengajian agama, bahasa, kemahiran, dan pembentukan sahsiah.",
  },
  aboutBody2: {
    en: 'Every student is guided to understand knowledge, practice it daily, then confidently and gracefully convey it to others.',
    id: 'Setiap santri didampingi untuk memahami ilmu, mengamalkannya dalam keseharian, lalu berani menyampaikannya dengan santun dan penuh percaya diri.',
    ms: 'Setiap pelajar dibimbing untuk memahami ilmu, mengamalkannya dalam kehidupan harian, lalu berani menyampaikannya dengan santun dan penuh keyakinan.',
  },
  aboutLink: {
    en: 'See daily student life',
    id: 'Lihat keseharian santri',
    ms: 'Lihat kehidupan harian pelajar',
  },
  aboutQuote: {
    en: '"We believe every child has fitrah to love knowledge — our role is to create the environment for it to grow."',
    id: '"Kami percaya setiap anak punya fitrah mencintai ilmu — tugas kami menciptakan lingkungan untuk bertumbuh."',
    ms: '"Kami percaya setiap anak mempunyai fitrah mencintai ilmu — tugas kami mewujudkan persekitaran untuk bertumbuh."',
  },

  // ─── PROGRAMS ───
  programLabel: { en: '02 / Programs', id: '02 / Program', ms: '02 / Program' },
  programKicker: {
    en: 'A curriculum that shapes the whole person',
    id: 'Kurikulum yang membentuk manusia seutuhnya',
    ms: 'Kurikulum yang membentuk insan seutuhnya',
  },
  programTitle: {
    en: 'Three pillars of',
    id: 'Tiga pilar',
    ms: 'Tiga tiang',
  },
  programTitleEm: { en: 'learning.', id: 'belajar.', ms: 'pembelajaran.' },
  prog1Title: { en: 'Tahfidz & TPQ', id: 'Tahfidz & TPQ', ms: 'Tahfidz & TPQ' },
  prog1Desc: {
    en: "Qur'an memorization guided by experienced tahfidz teachers. For younger students, TPQ builds a strong tajwid foundation with a fun and engaging approach.",
    id: "Hafalan Al-Qur'an dibimbing oleh pengajar tahfidz berpengalaman. Bagi usia dini, TPQ membangun fondasi tajwid yang kuat dengan pendekatan menyenangkan.",
    ms: "Hafalan Al-Qur'an dibimbing oleh pengajar tahfidz berpengalaman. Bagi usia muda, TPQ membina asas tajwid yang kukuh dengan pendekatan yang menyeronokkan.",
  },
  prog2Title: { en: 'Diniyyah', id: 'Diniyyah', ms: 'Diniyyah' },
  prog2Desc: {
    en: 'Classical Islamic studies (kitab kuning) covering fiqh, hadith, aqidah, and akhlak. Students build depth in religious knowledge through guided traditional learning.',
    id: 'Kajian kitab kuning meliputi fiqih, hadits, aqidah, dan akhlak. Santri membangun kedalaman ilmu agama melalui pembelajaran tradisional yang terarah.',
    ms: 'Kajian kitab kuning meliputi fiqh, hadis, akidah, dan akhlak. Pelajar membina kedalaman ilmu agama melalui pembelajaran tradisional yang terarah.',
  },
  prog3Title: { en: 'Language & Confidence', id: 'Bahasa & Percaya Diri', ms: 'Bahasa & Keyakinan Diri' },
  prog3Desc: {
    en: 'Arabic and English language programs, public speaking (muhadharah), and self-development activities. Students learn to communicate clearly and lead with confidence.',
    id: 'Program bahasa Arab dan Inggris, muhadharah (pidato), dan kegiatan pengembangan diri. Santri belajar berkomunikasi jelas dan memimpin dengan yakin.',
    ms: 'Program bahasa Arab dan Inggeris, muhadharah (pidato), dan aktiviti pembangunan diri. Pelajar belajar berkomunikasi dengan jelas dan memimpin dengan yakin.',
  },
  progLink: { en: 'Register for this program', id: 'Daftar untuk program ini', ms: 'Daftar untuk program ini' },
  curriculumLabel: { en: 'What they learn', id: 'Yang dipelajari', ms: 'Yang dipelajari' },
  currTahfidz: { en: 'Tahfidz & Tahsin', id: 'Tahfidz & Tahsin', ms: 'Tahfidz & Tahsin' },
  currKitab: { en: 'Kitab Kuning', id: 'Kitab Kuning', ms: 'Kitab Kuning' },
  currFiqh: { en: 'Fiqh & Hadith', id: 'Fiqih & Hadits', ms: 'Fiqh & Hadis' },
  currAqidah: { en: 'Aqidah & Akhlak', id: 'Aqidah & Akhlak', ms: 'Akidah & Akhlak' },
  currArabic: { en: 'Arabic', id: 'Bahasa Arab', ms: 'Bahasa Arab' },
  currEnglish: { en: 'English', id: 'Bahasa Inggris', ms: 'Bahasa Inggeris' },
  currNahwu: { en: 'Nahwu Shorof', id: 'Nahwu Shorof', ms: 'Nahwu Shorof' },
  currMuhadharah: { en: 'Muhadharah', id: 'Muhadharah', ms: 'Muhadharah' },

  // ─── JOURNEY ───
  journeyLabel: { en: '03 / Student Journey', id: '03 / Perjalanan Santri', ms: '03 / Perjalanan Pelajar' },
  journeyCaption: {
    en: 'Learning with dedication, growing with joy.',
    id: 'Belajar dengan tekun, bertumbuh dengan gembira.',
    ms: 'Belajar dengan tekun, bertumbuh dengan gembira.',
  },
  journeyKicker: {
    en: 'Guided at every step',
    id: 'Didampingi di setiap proses',
    ms: 'Dibimbing di setiap proses',
  },
  journeyTitle: {
    en: 'A rhythm that builds',
    id: 'Ritme yang membentuk',
    ms: 'Ritma yang membentuk',
  },
  journeyTitleEm: { en: 'good habits.', id: 'kebiasaan baik.', ms: 'kebiasaan baik.' },
  step1Title: { en: 'Discover potential', id: 'Kenali potensi', ms: 'Kenali potensi' },
  step1Desc: {
    en: 'Every child arrives with their own story, abilities, and learning pace.',
    id: 'Setiap anak datang dengan cerita, kemampuan, dan ritme belajar yang berbeda.',
    ms: 'Setiap anak datang dengan cerita, kebolehan, dan rentak pembelajaran yang berbeza.',
  },
  step2Title: { en: 'Build habits', id: 'Bangun kebiasaan', ms: 'Bina kebiasaan' },
  step2Desc: {
    en: 'Worship, study, discipline, and manners are cultivated through structured daily routines.',
    id: 'Ibadah, belajar, disiplin, dan adab dilatih dalam keseharian yang terarah.',
    ms: 'Ibadah, belajar, disiplin, dan adab dilatih dalam kehidupan harian yang terarah.',
  },
  step3Title: { en: 'Dare to serve', id: 'Berani bermanfaat', ms: 'Berani memberi manfaat' },
  step3Desc: {
    en: 'Students are trained to present, speak, teach, and contribute to their community.',
    id: 'Santri dilatih tampil, berbicara, mengajar, dan hadir untuk lingkungannya.',
    ms: 'Pelajar dilatih untuk tampil, bertutur, mengajar, dan hadir untuk persekitarannya.',
  },

  // ─── GALLERY ───
  galleryLabel: { en: '04 / Student Life', id: '04 / Kehidupan Santri', ms: '04 / Kehidupan Pelajar' },
  galleryKicker: {
    en: 'Days full of meaning',
    id: 'Hari-hari yang penuh makna',
    ms: 'Hari-hari yang penuh makna',
  },
  galleryTitle1: { en: 'Learn. Grow.', id: 'Belajar. Bertumbuh.', ms: 'Belajar. Bertumbuh.' },
  galleryTitle2: { en: 'Together.', id: 'Bersama.', ms: 'Bersama.' },
  galleryFollow: { en: 'Follow @ponpes_al_usmani', id: 'Ikuti @ponpes_al_usmani', ms: 'Ikuti @ponpes_al_usmani' },
  galleryAlt1: { en: 'Bonds that strengthen', id: 'Kebersamaan yang menguatkan', ms: 'Kebersamaan yang menguatkan' },
  galleryCaption1: { en: 'Bonds that strengthen', id: 'Kebersamaan yang menguatkan', ms: 'Kebersamaan yang menguatkan' },
  galleryAlt2: { en: 'Learning tahsin together', id: 'Belajar tahsin bersama', ms: 'Belajar tahsin bersama' },
  galleryCaption2: { en: 'Growing through the process', id: 'Tumbuh melalui proses', ms: 'Tumbuh melalui proses' },
  galleryAlt3: { en: 'Growing through the process', id: 'Tumbuh melalui proses', ms: 'Tumbuh melalui proses' },
  galleryCaption3: { en: 'Join Al Usmani family', id: 'Bergabung bersama Al Usmani', ms: 'Sertai keluarga Al Usmani' },
  galleryAlt4: { en: 'Dare to perform and create', id: 'Berani tampil dan berkarya', ms: 'Berani tampil dan berkarya' },
  galleryCaption4: { en: 'Dare to perform and create', id: 'Berani tampil dan berkarya', ms: 'Berani tampil dan berkarya' },

  // ─── LOCATION ───
  locationLabel: { en: '05 / Location', id: '05 / Lokasi', ms: '05 / Lokasi' },
  locationKicker: {
    en: 'Close to home, warm like home',
    id: 'Dekat dari rumah, hangat seperti rumah',
    ms: 'Dekat dari rumah, hangat seperti rumah',
  },
  locationTitle: { en: 'Find us', id: 'Temukan kami', ms: 'Temui kami' },
  locationTitleEm: { en: 'in Ciledug.', id: 'di Ciledug.', ms: 'di Ciledug.' },
  locationOrg: {
    en: 'Yayasan Baitul Ulum Wal Huffadz Al Usmani',
    id: 'Yayasan Baitul Ulum Wal Huffadz Al Usmani',
    ms: 'Yayasan Baitul Ulum Wal Huffadz Al Usmani',
  },
  locationAddress: {
    en: 'Jl. Wiru Indah I, Parung Serab, Ciledug, Kota Tangerang, Banten',
    id: 'Jl. Wiru Indah I, Parung Serab, Ciledug, Kota Tangerang, Banten',
    ms: 'Jl. Wiru Indah I, Parung Serab, Ciledug, Kota Tangerang, Banten',
  },
  locationCta: { en: 'Open Google Maps', id: 'Buka Google Maps', ms: 'Buka Google Maps' },

  // ─── REGISTRATION ───
  regLabel: { en: '06 / Registration', id: '06 / Pendaftaran', ms: '06 / Pendaftaran' },
  regKicker: {
    en: 'One step closer to a meaningful education',
    id: 'Satu langkah lebih dekat menuju pendidikan yang bermakna',
    ms: 'Satu langkah lebih dekat menuju pendidikan yang bermakna',
  },
  regTitle: { en: 'Register your', id: 'Daftarkan putra-putri', ms: 'Daftarkan anak' },
  regTitleEm: { en: 'child.', id: 'Anda.', ms: 'anda.' },
  regSubtitle: {
    en: 'Fill in basic information. We will contact you via WhatsApp within 1×24 hours.',
    id: 'Isi data dasar. Kami akan menghubungi Anda via WhatsApp dalam 1×24 jam.',
    ms: 'Isi maklumat asas. Kami akan menghubungi anda melalui WhatsApp dalam 1×24 jam.',
  },
  formParentName: { en: "Parent's full name", id: 'Nama lengkap orang tua', ms: 'Nama penuh ibu bapa' },
  formParentPlaceholder: { en: 'e.g. Ahmad Abdullah', id: 'contoh: Ahmad Abdullah', ms: 'contoh: Ahmad Abdullah' },
  formPhone: { en: 'WhatsApp number', id: 'Nomor WhatsApp', ms: 'Nombor WhatsApp' },
  formPhonePlaceholder: { en: '08xx xxxx xxxx', id: '08xx xxxx xxxx', ms: '08xx xxxx xxxx' },
  formStudentName: { en: 'Student name', id: 'Nama calon santri', ms: 'Nama calon pelajar' },
  formStudentPlaceholder: { en: "Child's full name", id: 'Nama lengkap anak', ms: 'Nama penuh anak' },
  formAge: { en: 'Age', id: 'Usia', ms: 'Umur' },
  formProgram: { en: 'Program of interest', id: 'Program yang diminati', ms: 'Program yang diminati' },
  formProgOpt1: { en: 'Tahfidz / TPQ', id: 'Tahfidz / TPQ', ms: 'Tahfidz / TPQ' },
  formProgOpt2: { en: 'Diniyyah', id: 'Diniyyah', ms: 'Diniyyah' },
  formProgOpt3: { en: 'All programs', id: 'Semua program', ms: 'Semua program' },
  formAttendance: { en: 'Attendance mode', id: 'Sistem kehadiran', ms: 'Sistem kehadiran' },
  formAttOpt1: { en: 'Boarding (Muqim)', id: 'Muqim', ms: 'Mukim' },
  formAttOpt2: { en: 'Day school', id: 'Pulang-pergi', ms: 'Ulang-alik' },
  formAttOpt3: { en: 'Want to consult', id: 'Ingin konsultasi', ms: 'Ingin berunding' },
  formNotes: { en: 'Questions', id: 'Yang ingin ditanyakan', ms: 'Soalan' },
  formNotesOptional: { en: '(optional)', id: '(opsional)', ms: '(pilihan)' },
  formNotesPlaceholder: {
    en: 'Fees, schedule, facilities, or special needs...',
    id: 'Biaya, jadwal, fasilitas, atau kebutuhan khusus...',
    ms: 'Yuran, jadual, kemudahan, atau keperluan khas...',
  },
  formSubmit: { en: 'Submit Registration Interest', id: 'Kirim Minat Pendaftaran', ms: 'Hantar Minat Pendaftaran' },
  formPrivacy: {
    en: 'Data is used only for the student enrollment process.',
    id: 'Data hanya digunakan untuk proses penerimaan santri.',
    ms: 'Data hanya digunakan untuk proses pendaftaran pelajar.',
  },

  // ─── WHATSAPP MESSAGE ───
  waMessage: {
    en: "Assalamu'alaikum, I would like to register my child:",
    id: "Assalamu'alaikum, saya ingin mendaftarkan anak saya:",
    ms: "Assalamu'alaikum, saya ingin mendaftarkan anak saya:",
  },
  waParent: { en: 'Parent name', id: 'Nama Ortu', ms: 'Nama Ibu Bapa' },
  waPhone: { en: 'WhatsApp', id: 'No. WA', ms: 'No. WA' },
  waStudent: { en: 'Student name', id: 'Nama Santri', ms: 'Nama Pelajar' },
  waAge: { en: 'Age', id: 'Usia', ms: 'Umur' },
  waProgram: { en: 'Program', id: 'Program', ms: 'Program' },
  waAttendance: { en: 'Mode', id: 'Sistem', ms: 'Sistem' },
  waNotes: { en: 'Notes', id: 'Catatan', ms: 'Catatan' },

  // ─── FOOTER ───
  footerTagline: {
    en: 'Educating with knowledge, accompanying with character.',
    id: 'Mendidik dengan ilmu, membersamai dengan adab.',
    ms: 'Mendidik dengan ilmu, menemani dengan adab.',
  },
  footerCopyright: {
    en: '© 2026 Yayasan Baitul Ulum Wal Huffadz Al Usmani',
    id: '© 2026 Yayasan Baitul Ulum Wal Huffadz Al Usmani',
    ms: '© 2026 Yayasan Baitul Ulum Wal Huffadz Al Usmani',
  },
  footerBackTop: { en: 'Back to top ↑', id: 'Kembali ke atas ↑', ms: 'Kembali ke atas ↑' },

  // ─── FAB ───
  fabLabel: {
    en: 'Contact Al Usmani via WhatsApp',
    id: 'Hubungi Al Usmani melalui WhatsApp',
    ms: 'Hubungi Al Usmani melalui WhatsApp',
  },
  fabText: { en: 'Ask Admin', id: 'Tanya Admin', ms: 'Tanya Admin' },
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
];
