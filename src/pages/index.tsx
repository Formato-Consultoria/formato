import styles from '../../styles/Home.module.scss';
import Image from 'next/image';

import { Inter, Blinker } from '@next/font/google';
import { NextFont } from '@next/font/dist/types';

import PrimaryButton from '../components/primary_btn';

const inter: NextFont = Inter({
  weight: ['400', '500', '600', '700'],
  fallback: ['sans-serif']
});

const blinker: NextFont = Blinker({
  weight: ['300', '400', '600', '700'],
});

export default function Home() {
  return (
    <>
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
          <img src="/images/box-imgs-office-of-the-main-section.png"
           alt="man climbing ladder"/>

          <img src="/images/box-imgs-man-climbing-ladder.png"
            alt="man climbing ladder"/>
            
          <img src="/images/box-imgs-main-section-building.png"
            alt="man climbing ladder"/>
        </div>
      </section>

      <section className={`${styles.strategy} ${blinker.className}`}>
        <div className={styles.title_and_description}>
          <h2>ESTRATEGIA</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.</p>
        </div>

        <div className={styles.strategys_an_image}>
          <div className={styles.first_block}>
            <div className={styles.descoberta}>
              <h3>1. DESCOBERTA</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>

            <div className={styles.modelagem}>
              <h3>2. MODELAGEM</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
          </div>

          <div className={styles.secound_block}>
            <div className={styles.implantacao}>
              <h3>3. IMPLANTAÇÃO</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>

            <div className={styles.ideacao}>
              <h3>4. IDEAÇÃO</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}