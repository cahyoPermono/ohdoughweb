'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import CurvedDivider from './CurvedDivider';

export default function HeroSection() {
  return (
    <section className={styles.heroWrapper}>
      <div className="container" style={{ position: 'relative', height: '100%' }}>
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.pills}
            >
              Artisan Bakery Jombang
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={styles.title}
            >
              The Fluffiest <br/>
              <span style={{ color: 'var(--color-orange-bakery)' }}>Cloud Bombs</span> <br/>
              in Town.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={styles.subtitle}
            >
              Premium Bomboloni and Japanese Soft Milk Bread.
              <br/>Freshly crafted daily in our cold kitchen.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
               <a href="#menu" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
                 Order Now
               </a>
            </motion.div>
          </div>

          <div className={styles.imageColumn}>
             <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                className={styles.heroImageWrapper}
             >
                 <Image 
                    src="/images/ohdough_hero_composition_1769764886785.png" 
                    alt="OhDough Artisan Bakery" 
                    width={800} 
                    height={800} 
                    priority
                    className={styles.heroImage}
                 />
                 
                 {/* Floating Badges */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className={styles.floatingBadge}
                    style={{ top: '10%', right: '10%' }}
                 >
                    <span className={styles.badgeText}>100% Halal</span>
                 </motion.div>
             </motion.div>
          </div>
        </div>
      </div>
      
      {/* Curved Divider at the bottom */}
      <CurvedDivider color="#FFFCF5" type="bottom" />
    </section>
  );
}
