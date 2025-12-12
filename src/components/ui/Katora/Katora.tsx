'use client';
import colors from '@/lib/constants';
import styles from './katora.module.css';

type KatoraProps = {
    color:string;
}


export default function Katora({ color }: KatoraProps) {
  let colorObj = colors.find(c=> c.hex === color);
  if (!colorObj) {
    colorObj = colors[0]; // Fallback to the first color if not found
  }

  const imgSrc = `/pawns/svg/${colorObj?.name.toLowerCase()}.svg`; 

  return (
    <div className={styles.katora}>
        <img src={imgSrc} alt="selected-image" className={styles.katoraImage} />
        <img src="/game_pawn_holder.png" alt="selected-image-base" className={styles.katoraImage} />
    </div>
  )
}
