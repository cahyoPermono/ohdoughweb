import styles from './ContactFooter.module.css';

export default function ContactFooter() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.heading}>Ready to Taste the Cloud?</h2>
          <p className={styles.text}>
            Our pastries are made fresh to order in our cold kitchen.
            <br />
            Pre-order now to secure your box of happiness.
          </p>
          
          <a 
            href="https://wa.me/6282139832969" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            Order on WhatsApp
          </a>

          <div className={styles.socials}>
            <p>Follow us on Instagram</p>
            <a 
              href="https://instagram.com/ohdough.jombang" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              @ohdough.jombang
            </a>
          </div>

          <p className={styles.copyright}>&copy; {new Date().getFullYear()} OhDough Jombang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
