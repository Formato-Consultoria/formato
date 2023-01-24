import style from './footer.module.scss';
import { inter } from '../../utils/_fonts';
import cx from 'clsx';

import Link from 'next/link';

import { InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { LightLogotipo } from '../images';
import { contentService, typeService } from '../../@types/services';
import { ReactElement } from 'react';
import { services } from '../../content/all-services';

export default function Footer() {

    const listServiceByType = (
        type: typeService
    ): ReactElement<contentService>[] => {
    
        const arrServices = Object.values(services).filter(service => service.typeService === type);
    
        return (
          arrServices.map((s: contentService) => (
            <li
                key={s.slug}
            >
                <Link href={`/servicos/${s.slug}`}>{s.title}</Link>
            </li>
          ))
        )
    }

    return (
        <footer className={cx(style.footer, inter.className)}>
            <div className={style.navigation_container}>
                <div className={style.logotipo_img}>
                    <img src={LightLogotipo.src} alt="Formato consultoria"/>
                </div>

                <div className={style.navigation_content}>
                    {/* <nav className={style.menus}>
                        <ul className={style.navigation_options}>
                            <li>
                                <Link href="/">inicio</Link>
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
                            <li>
                                <Link href="/galeria">Galeria</Link>
                            </li>
                        </ul>
                    </nav> */}

                    <div className={style.servicos}>
                        <div className={style.menu_services}>
                            <div>
                                <h5>Serviços de Consultorias</h5>
                                <nav>
                                    <ul className={style.navigation_options}>
                                        {listServiceByType("CEL")}
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <h5>Workshops</h5>
                                <nav>
                                    <ul className={style.navigation_options}>
                                        {listServiceByType("WORKSHOPS")}
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <h5>Mentoria Técnica</h5>
                                <nav>
                                    <ul className={style.navigation_options}>
                                        {listServiceByType("MT")}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.network_and_copy}>
                <div>
                    <Link href="https://www.instagram.com/consultoria.formato" target="_blank">
                        <InstagramLogo size={36} weight="fill" />
                    </Link>

                    <Link href="https://www.linkedin.com/company/formato-consultoria" target="_blank">
                        <LinkedinLogo size={36} weight="fill" />
                    </Link>
                </div>
                <p><span>Formato Consultoria</span> &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}