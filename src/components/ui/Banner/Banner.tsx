import styles from './banner.module.css';
 

export default function Banner() {
  return (
    <div className={styles.banner}>
        <img src="/banner_snakes.png" alt="Banner" className={styles.bannerImage} />
    </div>
  )
}
