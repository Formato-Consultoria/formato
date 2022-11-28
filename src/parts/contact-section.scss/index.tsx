import  styles from './contact-section.module.scss';
import { inter } from '../../utils/_fonts';

export default function ContactSection() {
    return (
        <section className={`${styles.contact} ${inter.className}`}>
            <div className={styles.sideinfo}>
            <div className={styles.contacts}>
                <h3>Ligue para Nós</h3>
                <p>+55 (62) 99312-8216</p>
            </div>
            
            <div className={styles.address}>
                <h3>Localização</h3>
                <p>R. Goiás, 305</p>
                <p>Centro</p>
                <p>Paracatu, MG 38600-126</p>
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
    )
}