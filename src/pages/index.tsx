import styles from '../../styles/Home.module.scss';
import Image from 'next/image';

import { Inter } from '@next/font/google';
import { NextFont } from '@next/font/dist/types';

import PrimaryButton from '../components/primary_btn';

const inter: NextFont = Inter({
  weight: ['400', '500', '600', '700'],
  fallback: ['sans-serif']
});


export default function Home() {
  return (
    <section className={`${styles.principal} ${inter.className}`}>
      <div className={styles.titulo_and_apresentation}>
        <h1>
          Formato<span>Consultoria</span>
        </h1>

        <h3>Lorem ipsum dolor sit ametconsectetur adipiscing?Lorem ipsum dolor sit ametconsectetur adipiscing?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie metus tempus neque aliquam hendrerit.</p>
      </div>

      <PrimaryButton text="Saiba Mais"/>

      <div className={styles.box_imgs}>
        <Image 
          src="/images/box-imgs-office-of-the-main-section.png"
          width={250}
          height={250}
          alt="man climbing ladder"
        />
        <Image 
          src="/images/box-imgs-man-climbing-ladder.png"
          width={250}
          height={250}
          alt="man climbing ladder"
        />
        <Image 
          src="/images/box-imgs-main-section-building.png"
          width={250}
          height={250}
          alt="man climbing ladder"
        />
      </div>
    </section>
  )
}