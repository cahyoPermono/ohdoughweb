'use client';

import styles from './MenuSection.module.css';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

// Map specific products to images (fallback to generic if not matched)
const getImage = (name: string) => {
    // Real photos provided by user (Enhanced Style)
    if (name.toLowerCase().includes('tuna') || name.toLowerCase().includes('ocean') || name.toLowerCase().includes('mayo')) return '/images/enhanced_tuna_mayo.png';
    if (name.toLowerCase().includes('sausage') || name.toLowerCase().includes('osaka')) return '/images/enhanced_sausage_roll.png';
    if (name.toLowerCase().includes('garlic')) return '/images/enhanced_garlic_bread.png';
    if (name.toLowerCase().includes('melon')) return '/images/enhanced_melon_pan.png';
    if (name.toLowerCase().includes('teriyaki')) return '/images/enhanced_teriyaki_bun.png';
    if (name.toLowerCase().includes('darkluscious')) return '/images/bomboloni_darkluscious.png';
    if (name.toLowerCase().includes('cookie') || name.toLowerCase().includes('oreo')) return '/images/bomboloni_cookie_cloud.png';
    if (name.toLowerCase().includes('velvet')) return '/images/bomboloni_velvet_noir.png';
    if (name.toLowerCase().includes('cheezu')) return '/images/bomboloni_snowy_cheezu.png';
    if (name.toLowerCase().includes('matcha')) return '/images/bomboloni_matcha_zen.png';
    if (name.toLowerCase().includes('almond')) return '/images/bomboloni_almond_truffle.png';

    // Generated fallbacks
    if (name.toLowerCase().includes('chocolate')) return '/images/bomboloni_chocolate_1769764908057.png';
    if (name.toLowerCase().includes('greentea') || name.toLowerCase().includes('matcha')) return '/images/bomboloni_matcha_1769764926116.png';
    if (name.toLowerCase().includes('bun') || name.toLowerCase().includes('bread')) return '/images/japanese_milk_bread_1769764947467.png';
    return '/images/bomboloni_chocolate_1769764908057.png'; // Default
};

const menuItems = [
  {
    category: 'The Cloud Bombs',
    theme: 'pink', 
    bgColor: '#FFF0F5',
    accentColor: '#D81B60',
    description: 'Signature Bomboloni with thick whipped cream filling.',
    items: [
      { name: 'Velvet Noir', desc: 'Chocolate Ganache', price: '15k' },
      { name: 'Matcha Zen Crunch', desc: 'Greentea with Almond Edge', price: '18k' },
      { name: 'Snowy Cheezu', desc: 'Cheese with Cream Cheese', price: '18k' },
      { name: 'Cookie Cloud', desc: 'Oreo with Vla', price: '16k' },
      { name: 'Darkluscious', desc: 'Classic Meses with Vla', price: '15k' },
      { name: 'Almond Truffle', desc: 'Almond Chocolate', price: '18k' },
    ]
  },
  {
    category: 'The Soft Clouds',
    theme: 'orange',
    bgColor: '#FFF8E1',
    accentColor: '#F57F17',
    description: 'Japanese Soft Milk Bread. Fluffy as a cloud.',
    items: [
      { name: 'Garlic Butter Whisper', desc: 'Classic Garlic Bread', price: '12k' },
      { name: 'Vanilla Choco-Cheese Cloud', desc: 'Vanilla Bun with Choco Chips & Sweet Cheese', price: '15k' },
      { name: 'Savory Osaka Roll', desc: 'Premium Sausage Bread', price: '16k' },
      { name: 'Sunrise Melon Pan', desc: 'Classic Melon Bun', price: '12k' },
      { name: 'Ocean Mayo Breeze', desc: 'Tuna Mayo Filling', price: '15k' },
      { name: 'Teriyaki Savory Bun', desc: 'Chicken Teriyaki Filling', price: '16k' },
    ]
  },
   {
    category: 'Royal Special',
    theme: 'blue',
    bgColor: '#E3F2FD',
    accentColor: '#1565C0',
    description: 'Perfect for sharing moments.',
    items: [
      { name: 'Royal Cloud Loaf', desc: 'Premium Roti Sobek for special occasions', price: 'Pre-order' },
    ]
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function MenuSection() {
  return (
    <section className={styles.section} id="menu">
      {/* Floating Parallax Background Elements */}
      <div className={styles.parallaxBg}>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className={styles.shape1} />
          <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className={styles.shape2} />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className={styles.shape3} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.headingWrapper}>
             <h2 className={styles.heading}>Freshly Baked Menu</h2>
             <p className={styles.subHeading}>Choose your fluffy happiness</p>
        </div>
        
        {menuItems.map((cat, idx) => (
          <div key={idx} className={styles.categoryBlock}>
             <div className={styles.categoryTitleWrapper} style={{ borderColor: cat.accentColor }}>
                <h3 className={styles.categoryTitle} style={{ color: cat.accentColor }}>{cat.category}</h3>
             </div>
            
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className={styles.grid}
            >
              {cat.items.map((item, itemIdx) => (
                <motion.div 
                    key={itemIdx} 
                    variants={itemAnim}
                    whileHover={{ y: -10 }}
                    className={styles.card}
                    style={{ backgroundColor: cat.bgColor }}
                >
                  <div className={styles.imageOverlay}>
                      <Image 
                        src={getImage(item.name)} 
                        alt={item.name} 
                        width={200} 
                        height={200}
                        className={styles.pimg}
                      />
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.priceBadge}>{item.price}</div>
                    <h4 className={styles.itemName}>{item.name}</h4>
                    <p className={styles.itemDesc}>{item.desc}</p>
                    <button className={styles.orderBtn} style={{ color: cat.accentColor }}>Add to Cart</button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
