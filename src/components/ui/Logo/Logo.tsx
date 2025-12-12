import styles from './logo.module.css'

export default function Logo({src}:{src?:string}) {
 return (
    <div className={styles.logo}>
        <img src={src || "/logo_cvent.png"} alt="Cvent" className={styles.logoImg} />
    </div>
  )
}

export function LogoGame({src}:{src?:string}) {
 return (
    <div className={styles.logo}>
        <img src={src || "/logo_cvent.png"} alt="Cvent" className={styles.logoImgGame} />
    </div>
  )
}