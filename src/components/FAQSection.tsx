'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQSection.module.css';
import CurvedDivider from './CurvedDivider';

const faqs = [
  {
    question: "Apakah produk OhDough Halal?",
    answer: "Tentu! 100% Halal. Kami hanya menggunakan bahan-bahan premium yang terjamin kehalalannya, tanpa menggunakan rhum, alkohol, atau bahan non-halal lainnya."
  },
  {
    question: "Bagaimana cara pesannya?",
    answer: "Sangat mudah! Klik tombol 'Order Now' atau icon WhatsApp di bawah web ini. Anda akan langsung terhubung dengan admin kami untuk mengisi format order."
  },
  {
    question: "Berapa lama rotinya tahan?",
    answer: "Karena tanpa pengawet, Bomboloni & Roti kami tahan 2-3 hari di suhu ruang. Jika disimpan di kulkas (dalam wadah tertutup), bisa tahan hingga 5 hari. Hangatkan sebentar di microwave agar lembut kembali!"
  },
  {
    question: "Apakah bisa kirim ke luar kota?",
    answer: "Untuk menjaga kualitas fresh, saat ini kami hanya melayani pengiriman area Jombang. Untuk pesanan khusus atau partai besar, silakan konsultasi via WhatsApp."
  },
  {
    question: "Apakah harus Pre-Order?",
    answer: "Untuk saat ini, **Ya, kami menerapkan sistem Made-to-Order eksklusif.** Artinya, setiap roti yang Anda terima benar-benar baru dibuat khusus untuk pesanan Anda, menjamin kesegaran dan kualitas terbaik tanpa stok lama. Pesan hari ini untuk dinikmati esok hari!"
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
       {/* Top Divider */}
       <CurvedDivider color="#FFF" type="top" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.headingWrapper}>
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.heading}
            >
                Curious about the Clouds?
            </motion.h2>
            <p className={styles.subtitle}>Frequently Asked Questions</p>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={styles.icon}>+</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className={styles.answer}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
