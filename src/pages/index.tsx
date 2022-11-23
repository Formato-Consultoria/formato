import styles from '../../styles/Home.module.scss';

import { Inter, Blinker } from '@next/font/google';
import { NextFont } from '@next/font/dist/types';

import ButttonGlobal from '../components/button';
import { ArrowRight, Buildings } from 'phosphor-react';

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

        <ButttonGlobal text="Saiba Mais"/>

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

      <section className={`${styles.services} ${inter.className}`}>
        <div className={styles.container_services}>
          <div className={`${styles.box_services} ${styles.black}`}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={styles.box_services}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={`${styles.box_services} ${styles.black}`}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={styles.box_services}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={`${styles.box_services} ${styles.black}`}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>

          <div className={styles.box_services}>
            <Buildings size={32} />
            <p>Nome do serviço</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula bibendum tellus vitae molestie.</small>
          </div>
        </div>
        
        <ButttonGlobal text="Saiba Mais" icone={<ArrowRight size={20}/>} />
      </section>

      <section className={`${styles.about} ${inter.className}`}>
        <h2 className={blinker.className}>SOBRE A NOSSA EMPRESA</h2>

        <div className={styles.content}>
          <img src="/images/imagem-predio.png" alt="imagem de um predio preto" />

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id lobortis nulla. In in sapien nec ex eleifend efficitur. Praesent et pulvinar nibh. Suspendisse odio arcu, interdum quis luctus non, pretium sed elit.</p>
            <p>Proin vehicula condimentum magna eu porta. Donec id consequat magna, at posuere nisl. Mauris nec feugiat dui. Mauris interdum lacinia laoreet. Mauris aliquet eget diam vel porta.</p>

            <p>Maecenas auctor elementum augue id hendrerit. Duis nunc risus, lacinia et sapien eu, vehicula mattis sem.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id lobortis nulla. In in sapien nec ex eleifend efficitur. Praesent et pulvinar nibh. Suspendisse odio arcu, interdum quis luctus non, pretium sed elit.</p>
            <p>Proin vehicula condimentum magna eu porta. Donec id consequat magna, at posuere nisl. Mauris nec feugiat dui. Mauris interdum lacinia laoreet. Mauris aliquet eget diam vel porta.</p>

            <p>Maecenas auctor elementum augue id hendrerit. Duis nunc risus, lacinia et sapien eu, vehicula mattis sem.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id lobortis nulla. In in sapien nec ex eleifend efficitur. Praesent et pulvinar nibh. Suspendisse odio arcu, interdum quis luctus non, pretium sed elit.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.lasts_posts} ${inter.className}`}>
        <div className={styles.headler_}>
          <h2 className={blinker.className}>ULTIMAS POSTAGEMS</h2>

          <ButttonGlobal 
            text="Veja todos" 
            icone={<ArrowRight size={20}/>} 
            isSecondary
          />
        </div>

        <div className={styles.boxs_news}>
          <div className={styles.custom_box}>
            <div className={styles.bg_shadow}></div>
            <img className={styles.bg_image} src="/teste/elon-musk.jpg" alt="elon musk" />
            
            <div className={styles.content}>
              <ButttonGlobal text={
                <div>
                  mais <div>sobre...</div>
                </div>}

                isCustommer
              />

              <h3 className={inter.className}>Elon Musk cree que Netflix perdió suscriptores debido a un virus</h3>
              <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.</small>
            </div>
          </div>

          <div className={styles.custom_box}>
            <div className={styles.bg_shadow}></div>
            <img className={styles.bg_image} src="/teste/domain-transfer.jpg" alt="domain-transfer" />

            <div className={styles.content}>
              <ButttonGlobal text={
                <div>
                  mais <div>sobre...</div>
                </div>}

                isCustommer
              />

              <h3 className={inter.className}>Transferir seu portfólio de domínios nunca foi tão fácil</h3>
              <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.</small>
            </div>
          </div>

          <div className={styles.custom_box}>
            <div className={styles.bg_shadow}></div>
            <img className={styles.bg_image} src="/teste/store.jpg" alt="store" />
            
            <div className={styles.content}>
              <ButttonGlobal text={
                <div>
                  mais <div>sobre...</div>
                </div>}

                isCustommer
              />

              <h3 className={inter.className}>7 passos para fazer o cliente comprar novamente na sua loja</h3>
              <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pellentesque felis. Ut eget accumsan magna. Donec ornare quam leo, non dapibus justo tristique dictum.</small>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.blog} ${inter.className}`}>
        <div className={styles.sideinfo}>
          <div className={styles.contacts}>
            <h3>Ligue para Nós</h3>
            <p>+5538999999999</p>
            <p>+5538999999999</p>
          </div>
          
          <div className={styles.address}>
            <h3>Localização</h3>
            <p>Rua da Conceição, 21</p>
            <p>Centro</p>
            <p>Paracatu, MG 38600-000</p>
          </div>
        </div>

        <div className={styles.sideform}>
          <form action="#">
            <input type="text" name="name" id="Name" required placeholder="Digite seu nome" />
            <input type="text" name="address" id="Address" required placeholder="Digite seu enderço" />

            <input type="tel" name="phone" id="Phone" required placeholder="Telefone (e.g +553899999999)" />
            <input type="email" name="email" id="Email" required placeholder="Digite um e-mail valido" />

            <textarea name="message_text" id="MessageText"></textarea>
            <label htmlFor="Terms">
              <input type="checkbox" name="terms" id="Terms" required />
              Eu aceito os <a href="#"><strong>termos de serviço</strong></a>
            </label>

            <input type="button" value="Enviar" />
          </form>
        </div>
      </section>
    </>
  )
}