import styles from './Marquee.module.css';

export default function Marquee() {
  const content = (
      <>
        <span className={styles.item}>Freshly Crafted Daily</span>
        <span className={styles.dot}>•</span>
        <span className={styles.item}>100% Halal Certified</span>
        <span className={styles.dot}>•</span>
        <span className={styles.item}>Premium Japanese Flour</span>
        <span className={styles.dot}>•</span>
        <span className={styles.item}>Authentic Bomboloni</span>
        <span className={styles.dot}>•</span>
        <span className={styles.item}>No Preservatives</span>
        <span className={styles.dot}>•</span>
      </>
  );

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.track}>
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
