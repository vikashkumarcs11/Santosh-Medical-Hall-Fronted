import React from 'react';
import { motion } from 'framer-motion';
import Abouts from './Abouts';

// ─── Animation Variants ───────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.12 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// ─── Data ─────────────────────────────────────────────────────────────
const TRUST_CHIPS = [
  { icon: '⏱', label: '30 मिनट डिलीवरी' },
  { icon: '💊', label: 'सभी दवाइयाँ' },
  { icon: '🌙', label: '24×7 सेवा' },
  { icon: '✅', label: 'Genuine Medicines' },
];

const STATS = [
  { num: '15K+', label: 'खुश ग्राहक' },
  { num: '30min', label: 'डिलीवरी' },
  { num: '24×7', label: 'सेवा' },
];

// ─── Component ────────────────────────────────────────────────────────
const HeroPage = () => {
  return (
    <div className="font-sans bg-teal-50 min-h-screen">

      {/* ── HERO SECTION ── */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-sky-600 px-4 pb-12 pt-5 md:px-10 md:pb-20 md:pt-8"
      >
        {/* BG blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"
        />

        {/* ── TOP NAV ── */}
        <motion.nav
          variants={fadeUp}
          custom={0}
          className="relative z-10 mb-6 flex items-center justify-between"
        >
          {/* Logo pill */}
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-devanagari text-xs font-semibold tracking-wide text-white">
              संतोष मेडिकल हॉल
            </span>
          </div>

          {/* Call button */}
          <a
            href="tel:7909097377"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-teal-700 shadow-lg shadow-black/20 transition active:scale-95"
          >
            <svg className="h-3.5 w-3.5 fill-teal-700" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call Now
          </a>
        </motion.nav>

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 text-white">
          {/* Rx badge */}
          <motion.div variants={fadeUp} custom={1} className="mb-3 inline-flex items-center gap-2">
            <span className="flex h-5 w-7 items-center justify-center rounded bg-white/20 text-[10px] font-black text-white">
              Rx
            </span>
            <span className="font-devanagari text-xs font-medium text-white/85">
              CDSCO Licensed Pharmacy
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="font-devanagari mb-1 text-[clamp(32px,9vw,56px)] font-black leading-none tracking-tight drop-shadow-lg"
          >
            संतोष मेडिकल हॉल
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={3}
            className="font-devanagari mb-5 text-[clamp(15px,4vw,20px)] font-light text-white/80"
          >
            आपकी सेहत, हमारी प्राथमिकता
          </motion.p>

          {/* Trust chips */}
          <motion.div variants={fadeUp} custom={4} className="mb-6 flex flex-wrap gap-2">
            {TRUST_CHIPS.map((c, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur-sm"
              >
                <span className="text-sm">{c.icon}</span>
                <span className="font-devanagari">{c.label}</span>
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} custom={5} className="flex flex-wrap flex-col md:w-70 gap-3">
            {/* WhatsApp CTA */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/7909097377"
              target="_blank"
              rel="noreferrer"
              className="flex min-w-[150px] flex-1 items-center justify-center gap-2.5 rounded-2xl bg-white px-6 py-4 text-[clamp(14px,3.8vw,16px)] font-bold text-teal-700 shadow-2xl shadow-teal-900/30 transition"
            >
              <svg className="h-5 w-5 flex-shrink-0 fill-[#25D366]" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.552 4.103 1.523 5.836L.057 23.857a.5.5 0 0 0 .611.611l6.107-1.463A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.651-.502-5.177-1.378l-.37-.217-3.827.917.936-3.734-.237-.386A9.944 9.944 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              <span className="font-devanagari">अभी ऑर्डर करें</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>

            {/* Call CTA */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="tel:7909097377"
              className="flex min-w-[130px] flex-1 items-center justify-center gap-2.5 rounded-2xl border-2 border-white/35 bg-white/12 px-5 py-4 backdrop-blur-sm transition"
            >
              <span className="text-xl">📞</span>
              <div className="text-left">
                <p className="font-devanagari text-[10px] text-white/65">कॉल करें</p>
                <p className="text-[clamp(14px,4vw,17px)] font-extrabold text-white">7909097377</p>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* ── DIGITAL SIGNBOARD (desktop right column) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, type: 'spring', bounce: 0.35, delay: 0.3 }}
          className="relative z-10 mx-auto mt-10 w-full max-w-sm rounded-3xl border-4 border-red-600 bg-[#0a2e6e] p-5 text-white shadow-2xl md:absolute md:right-10 md:top-1/2 md:mt-0 md:-translate-y-1/2"
        >
          {/* Board header */}
          <div className="mb-3 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-2xl"
              >
                🩺
              </motion.div>
              <div>
                <p className="font-devanagari text-xl font-black leading-none">संतोष</p>
                <p className="text-xs font-bold tracking-widest text-red-300">MEDICAL HALL</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-white/50">Dr. संतोष कुमार</p>
              <p className="text-xs font-bold text-emerald-300">7909097377</p>
              <p className="text-xs font-bold text-emerald-300">7484037720</p>
            </div>
          </div>

          <hr className="mb-3 border-white/15" />

          <h2 className="font-devanagari text-center text-3xl font-black">मेडिकल हॉल</h2>
          <p className="font-devanagari mt-0.5 text-center text-sm text-red-300">ओजे जी दवाखाना</p>

          <div className="mt-4 rounded-xl bg-white/10 py-2.5 px-4 text-center">
            <p className="font-devanagari text-xs text-white/80">
              📍 कोइनी बाजार • मिश्रा मार्केट • बिहारशरीफ
            </p>
          </div>

          {/* Floating pill decorations */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-4 py-2 text-lg shadow-xl"
          >
            💊 💉 💊
          </motion.div>
        </motion.div>
      </motion.header>

      {/* ── OFFER TICKER ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="overflow-hidden bg-yellow-100 py-2.5"
      >
        <div className="flex items-center gap-3 px-4">
          <span className="flex-shrink-0 rounded-md bg-yellow-500 px-2 py-0.5 text-[11px] font-bold text-white">
            🎟 OFFER
          </span>
          <div className="overflow-hidden">
            <motion.p
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="font-devanagari whitespace-nowrap text-xs font-semibold text-yellow-900"
            >
              🎉 20% छूट — किसी भी दवा पर • Valid till 30 April 2026 • Dr. संतोष कुमार •
              कोइनी बाजार, मिश्रा मार्केट, बिहारशरीफ gopalganj
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* ── STATS BAND ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 bg-white"
      >
        {STATS.map((s, i) => (
          <div key={i} className="py-4 text-center">
            <p className="text-[clamp(18px,5vw,22px)] font-extrabold text-teal-700">{s.num}</p>
            <p className="font-devanagari mt-0.5 text-[10px] text-gray-400">{s.label}</p>
          </div>
        ))}
      </motion.div>
      <Abouts />
    </div>
  );
};

export default HeroPage;