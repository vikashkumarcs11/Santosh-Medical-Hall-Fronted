import React from 'react'

import { motion } from 'framer-motion';
const Abouts = () => {
    return (
        <>



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
    )
}

export default Abouts
