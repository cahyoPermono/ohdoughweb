'use client';

import { useState } from 'react';
import styles from './MenuSection.module.css';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { prefixPath } from '../utils/config';

// Map specific products to images (fallback to generic if not matched)
const getImage = (name: string) => {
    // Real photos provided by user (Enhanced Style)
    if (name.toLowerCase().includes('tuna') || name.toLowerCase().includes('ocean') || name.toLowerCase().includes('mayo')) return prefixPath('/images/enhanced_tuna_mayo.png');
    if (name.toLowerCase().includes('sausage') || name.toLowerCase().includes('osaka')) return prefixPath('/images/enhanced_sausage_roll.png');
    if (name.toLowerCase().includes('garlic')) return prefixPath('/images/enhanced_garlic_bread.png');
    if (name.toLowerCase().includes('melon')) return prefixPath('/images/enhanced_melon_pan.png');
    if (name.toLowerCase().includes('teriyaki')) return prefixPath('/images/enhanced_teriyaki_bun.png');
    if (name.toLowerCase().includes('darkluscious')) return prefixPath('/images/bomboloni_darkluscious.png');
    if (name.toLowerCase().includes('cookie') || name.toLowerCase().includes('oreo')) return prefixPath('/images/bomboloni_cookie_cloud.png');
    if (name.toLowerCase().includes('velvet')) return prefixPath('/images/bomboloni_velvet_noir.png');
    if (name.toLowerCase().includes('cheezu')) return prefixPath('/images/bomboloni_snowy_cheezu.png');
    if (name.toLowerCase().includes('matcha')) return prefixPath('/images/bomboloni_matcha_zen.png');
    if (name.toLowerCase().includes('almond')) return prefixPath('/images/bomboloni_almond_truffle.png');

    // Generated fallbacks
    return prefixPath('/images/bomboloni_chocolate_1769764908057.png'); // Default
};

const menuItems = [
  {
    category: 'The Cloud Bombs',
    theme: 'pink', 
    bgColor: '#FFF0F5',
    accentColor: '#D81B60',
    description: 'Signature Bomboloni with thick whipped cream filling.',
    items: [
      { name: 'Velvet Noir', desc: 'Chocolate Ganache', price: '15k', story: "Dark chocolate meets cloud-like dough. A balance of bitter and sweet, representing the duality of pure indulgence. Born from a midnight craving, this is our ode to the night." },
      { name: 'Matcha Zen Crunch', desc: 'Greentea with Almond Edge', price: '18k', story: "A bite of tranquility. Premium Uji matcha brings an earthy depth, harmonized by the crunch of roasted almonds. Inspired by the zen gardens of Kyoto." },
      { name: 'Snowy Cheezu', desc: 'Cheese with Cream Cheese', price: '18k', story: "Inspired by winter's first snow. Savory cheddar meets sweet cream, creating a nostalgic comfort in every fluffy bite. A warm hug in pasture form." },
      { name: 'Cookie Cloud', desc: 'Oreo with Vla', price: '16k', story: "A playful twist on childhood favorites. The crunch of cookies against the softest dough brings back memories of milk-dunking joy." },
      { name: 'Darkluscious', desc: 'Classic Meses with Vla', price: '15k', story: "The classic refined. Thousands of chocolate sprinkles provide texture, while the vla filling offers a smooth, creamy embrace. Timeless." },
      { name: 'Almond Truffle', desc: 'Almond Chocolate', price: '18k', story: "Elegance in a pastry. Nutty aromas of toasted almond dance with rich chocolate ganache, a sophisticated treat for the discerning palate." },
    ]
  },
  {
    category: 'The Soft Clouds',
    theme: 'orange',
    bgColor: '#FFF8E1',
    accentColor: '#F57F17',
    description: 'Japanese Soft Milk Bread. Fluffy as a cloud.',
    items: [
      { name: 'Garlic Butter Whisper', desc: 'Classic Garlic Bread', price: '12k', story: "A savory whisper of aromatic herbs. Roasted garlic butter melts into the pores of the bread, creating a warm, comforting aroma that fills the room." },
      { name: 'Vanilla Choco-Cheese Cloud', desc: 'Vanilla Bun with Choco Chips & Sweet Cheese', price: '15k', story: "A trio of happiness. Vanilla for aroma, chocolate for sweetness, and cheese for depth. A complex symphony of flavors in a soft bun." },
      { name: 'Savory Osaka Roll', desc: 'Premium Sausage Bread', price: '16k', story: "A street food legend reborn. The snap of premium sausage meets the pillowy soft bun, topped with a tang of savory sauce. The bold choice." },
      { name: 'Sunrise Melon Pan', desc: 'Classic Melon Bun', price: '12k', story: "The rising sun of the bakery. A cookie crust that shatters delicately, revealing the softest interior. A textural masterpiece of Japanese tradition." },
      { name: 'Ocean Mayo Breeze', desc: 'Tuna Mayo Filling', price: '15k', story: "A taste of the sea breeze. Savory tuna and creamy mayo bring a umami punch that satisfies the savory soul. Fresh and filling." },
      { name: 'Teriyaki Savory Bun', desc: 'Chicken Teriyaki Filling', price: '16k', story: "Golden glaze of the orient. Sweet and savory teriyaki sauce glazes the bun, finishing with a nutty sesame whisper. An umami bomb." },
    ]
  },
   {
    category: 'Royal Special',
    theme: 'blue',
    bgColor: '#E3F2FD',
    accentColor: '#1565C0',
    description: 'Perfect for sharing moments.',
    items: [
      { name: 'Royal Cloud Loaf', desc: 'Premium Roti Sobek for special occasions', price: 'Pre-order', story: "The crown jewel. Made for sharing, this loaf represents connection and the warmth of breaking bread together with loved ones." },
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
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <section className={styles.section} id="menu">
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.modalBackdrop}
              onClick={() => setSelectedItem(null)}
            />
            <motion.div 
              initial={{ x: "-50%", y: "-40%", opacity: 0, scale: 0.8 }}
              animate={{ x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
              exit={{ x: "-50%", y: "-40%", opacity: 0, scale: 0.8 }}
              className={styles.modalCard}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedItem(null)}>×</button>
              <div className={styles.modalImageWrapper}>
                  <Image 
                    src={getImage(selectedItem.name)} 
                    alt={selectedItem.name} 
                    width={300} 
                    height={300}
                    className={styles.modalImg}
                  />
              </div>
              <div className={styles.modalContent}>
                <span className={styles.modalCategory}>Philosophy & Story</span>
                <h3 className={styles.modalTitle}>{selectedItem.name}</h3>
                <p className={styles.modalDesc}>{selectedItem.desc}</p>
                <div className={styles.separator} />
                <p className={styles.modalStory}>{selectedItem.story}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
                    onClick={() => setSelectedItem(item)}
                    className={styles.card}
                    style={{ backgroundColor: cat.bgColor, cursor: 'pointer' }}
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
                    <h4 className={styles.itemName}>{item.name}</h4>
                    <p className={styles.itemDesc}>{item.desc}</p>
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
