import style from './footer.module.scss';
import { inter } from '../../utils/_fonts';

import Link from 'next/link';
import Image from 'next/image';

import { InstagramLogo, FacebookLogo, TwitterLogo } from 'phosphor-react';

export default function Footer() {
    return (
        <footer className={`${style.footer} ${inter.className}`}>
            <div className={style.navigation_container}>
                <div className={style.logotipo_img}>
                    <img src="/icons/Logotipo_light.png" alt="Formato consultoria"/>
                </div>

                <div className={style.navigation_content}>
                    <nav className={style.menus}>
                        <ul className={style.navigation_options}>
                            <li>
                                <Link href="/">inicio</Link>
                            </li>
                            <li>
                                <Link href="/article">Artigo</Link>
                            </li>
                            <li>
                                <Link href="/clientes">Clientes</Link>
                            </li>
                            <li>
                                <Link href="/servicos">Serviços</Link>
                            </li>
                            <li>
                                <Link href="/sobre">Sobre Nós</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={style.servicos}>
                        <h3>Principais serviços</h3>
                        <div className={style.menu_services}>
                            <nav>
                                <ul className={style.navigation_options}>
                                    <li>
                                        <Link href="#">Nome do serviço</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Nome do serviço</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Nome do serviço</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Nome do serviço</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Nome do serviço</Link>
                                    </li>
                                </ul>
                            </nav>

                            <nav>
                                <ul className={style.navigation_options}>
                                    <li>
                                        <Link href="#">Nome do serviço</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Nome do serviço</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Nome do serviço</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Nome do serviço</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Nome do serviço</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.network_and_copy}>
                <div>
                    <Link href="#">
                        <InstagramLogo size={36} />
                    </Link>

                    <Link href="#">
                        <FacebookLogo size={36} />
                    </Link>

                    <Link href="#">
                        <TwitterLogo size={36} />
                    </Link>
                </div>
                <p><span>Formato consultoria</span> &copy; 2022</p>
            </div>
        </footer>
    )
}