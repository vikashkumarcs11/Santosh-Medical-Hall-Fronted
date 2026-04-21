import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const scaleHover = { scale: 1.05, transition: { duration: 0.2 } };
const tapScale = { scale: 0.98 };

const HeroPage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-gradient-to-br from-sky-600 to-emerald-500 text-white pt-16 pb-20 md:pt-20 md:pb-28 relative overflow-hidden"
      >
        {/* Animated background blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Text Content */}
          <motion.div variants={staggerContainer} className="space-y-8">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-3xl text-sm font-semibold tracking-wider"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-3 h-3 bg-emerald-400 rounded-full"
              />
              कोइनी बाजार • मिश्रा मार्केट • बिहारशरीफ
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl font-bold leading-none tracking-tighter">
              संतोष मेडिकल हॉल
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-4xl md:text-5xl font-light text-white/90">
              आपकी सेहत, हमारी प्राथमिकता
            </motion.p>

            {/* Trust Bar */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-x-10 gap-y-6 text-sm">
              {[
                { icon: "🛡️", title: "Licensed Pharmacy", sub: "CDSCO Approved" },
                { icon: "🚚", title: "30 मिनट डिलीवरी", sub: "कोइनी बाजार & आसपास" },
                { icon: "💊", title: "15,000+ खुश ग्राहक", sub: "24×7 सेवा" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-white/70 text-xs">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={scaleHover}
                whileTap={tapScale}
                onClick={() => window.open('https://wa.me/7909097377', '_blank')}
                className="bg-white text-sky-700 hover:bg-emerald-100 px-10 py-6 rounded-3xl text-2xl font-semibold flex items-center gap-4 shadow-2xl shadow-emerald-500/30"
              >
                अभी ऑर्डर करें
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-3xl"
                >
                  →
                </motion.span>
              </motion.button>

              <motion.a
                whileHover={scaleHover}
                whileTap={tapScale}
                href="tel:7909097377"
                className="px-8 py-6 rounded-3xl border-2 border-white/80 hover:border-white flex items-center gap-4 text-lg font-medium"
              >
                <span className="text-4xl">📞</span>
                <div>
                  <div className="text-sm opacity-75">कॉल करें</div>
                  <div className="font-bold text-3xl">7909097377</div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Signboard Replica */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="w-full max-w-lg bg-[#0a3d8c] border-8 border-red-600 rounded-3xl shadow-2xl p-6 text-white overflow-hidden">
              {/* Top header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center text-5xl"
                  >
                    🩸
                  </motion.div>
                  <div>
                    <div className="text-4xl font-black tracking-widest">संतोष</div>
                    <div className="text-xl font-bold text-red-300 -mt-1">मेडिकल हॉल</div>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="opacity-75 text-xs">Dr. संतोष कुमार</div>
                  <div className="font-medium text-emerald-300">7909097377</div>
                  <div className="font-medium text-emerald-300">7484037720</div>
                </div>
              </div>

              {/* Main Title */}
              <div className="text-center -mt-2">
                <h2 className="text-6xl font-black leading-none">मेडिकल हॉल</h2>
                <div className="text-2xl font-medium text-red-300 mt-1">ओजे जी दवाखाना</div>
              </div>

              {/* Location */}
              <div className="mt-8 text-center bg-white/10 backdrop-blur-md py-4 px-8 rounded-2xl text-lg font-medium">
                कोइनी बाजार • मिश्रा मार्केट
              </div>
            </div>

            {/* Decorative floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-12, -8, -12] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-20 -left-8 bg-white rounded-3xl px-6 py-4  shadow-xl text-5xl flex gap-4"
            >
              💊 💉 💊
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-25 right-12 text-7xl"
            >
              🧪
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        
      </motion.header>

      {/* OFFERS BAR */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-emerald-600 to-sky-600 py-6 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
          <div className="flex items-center gap-4">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-5xl"
            >
              🎟️
            </motion.span>
            <div className="text-3xl font-bold">20% OFF</div>
            <div className="text-xl">कोई भी दवा पर</div>
          </div>
          <div className="h-8 w-px bg-white/40 hidden md:block"></div>
          <div className="text-sm opacity-75">• Limited time • Valid till 30 April 2026</div>
        </div>
      </motion.div>

      {/* WHY US SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-emerald-100 text-emerald-700 px-6 py-2 rounded-3xl text-sm font-bold">WHY SANTOSH MEDICAL HALL</span>
            <h2 className="text-5xl font-semibold text-slate-900 mt-4">हम आपको देते हैं सबसे बेहतर</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🚚", title: "30 मिनट घर डिलीवरी", desc: "कोइनी बाजार, मिश्रा मार्केट और आसपास के हर इलाके में तुरंत दवा पहुँचाई जाती है।", extra: "24×7 उपलब्ध" },
              { icon: "💰", title: "सबसे सस्ती दवाएँ", desc: "सभी दवाओं पर सबसे कम दाम। MRP से 20% तक सस्ता।", extra: "मूल्य गारंटी" },
              { icon: "🛡️", title: "100% असली दवाएँ", desc: "CDSCO प्रमाणित • एक्सपायरी चेकिंग • बिल के साथ", extra: "15,000+ परिवारों का विश्वास" }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: "0 25px 40px -12px rgba(0,0,0,0.2)" }}
                className="bg-white rounded-3xl p-8 transition-all duration-300 border border-transparent hover:border-emerald-200"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-5xl mb-8"
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-3xl font-semibold mb-3">{card.title}</h3>
                <p className="text-slate-600 text-lg">{card.desc}</p>
                <div className="mt-12 text-emerald-600 font-medium flex justify-between items-center">
                  <span>{card.extra}</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-4xl"
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL BIG CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 bg-gradient-to-br from-sky-600 to-emerald-500 rounded-3xl text-white p-14 md:p-20 text-center mb-20 shadow-2xl"
      >
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-semibold"
        >
          आज ही अपनी दवा मंगवाएँ
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl mt-6 opacity-90"
        >
          30 मिनट में पहुँचेगी • सुरक्षित पैकिंग • COD उपलब्ध
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#047857" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open('https://wa.me/7909097377?text=Hello%20Santosh%20Medical%20Hall%2C%20I%20want%20to%20order%20medicines', '_blank')}
          className="mt-12 mx-auto flex items-center justify-center gap-6 bg-white text-emerald-700 px-14 py-7 rounded-3xl text-3xl font-bold shadow-xl"
        >
          ORDER MEDICINES NOW
          <motion.span
            animate={{ rotate: [0, 10, -10, 0], x: [0, 5, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-5xl"
          >
            🚀
          </motion.span>
        </motion.button>

        <div className="flex justify-center gap-8 mt-12 text-sm opacity-75">
          <motion.div whileHover={{ y: -3 }}>✅ Cash on Delivery</motion.div>
          <motion.div whileHover={{ y: -3 }}>✅ UPI / Online Payment</motion.div>
          <motion.div whileHover={{ y: -3 }}>✅ Prescription Upload</motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroPage;