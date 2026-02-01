'use client';

import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';
import CurvedDivider from './CurvedDivider';

const reviews = [
  {
    name: "Nurika Nadhifa",
    role: "Cloud Lover from Megaluh",
    text: "Donatnya gede, makan satu aja udah kenyang & toppingnya pas. Roti Tuna-nya juara, kerasa banget bahannya premium. Anakku (Abidzar) sampai lahap banget makan Roti Sosis-nya!",
    rating: 5
  },
  {
    name: "Dimas A.",
    role: "Verified Buyer",
    text: "Akhirnya nemu Japanese Milk Bread yang autentik di Jombang. Royal Cloud 9-nya wajib banget buat hantaran.",
    rating: 5
  },
  {
    name: "Sari W.",
    role: "Foodie",
    text: "Packaging estetik, rasa premium, harga bersahabat. Fix langganan buat snack acara kantor.",
    rating: 5
  }
];

export default function TestimonialSection() {
  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.header}
        >
          <span className={styles.tagline}>Social Proof</span>
          <h2 className={styles.title}>Cloud Lovers Say</h2>
        </motion.div>

        <div className={styles.grid}>
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={styles.card}
            >
              <div className={styles.stars}>{"★".repeat(review.rating)}</div>
              <p className={styles.text}>"{review.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{review.name.charAt(0)}</div>
                <div>
                    <span className={styles.name}>{review.name}</span>
                    <span className={styles.role}>{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <CurvedDivider color="#FDFBF7" type="bottom" />
    </section>
  );
}
