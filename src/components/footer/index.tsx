import style from './footer.module.scss';
import { inter } from '../../utils/_fonts';
import cx from 'clsx';

import Link from 'next/link';

import { InstagramLogo, LinkedinLogo } from 'phosphor-react';

export default function Footer() {
    return (
        <footer className={cx(style.footer, inter.className)}>
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
                        <div className={style.menu_services}>
                            <div>
                                <h5>Serviços de Consultorias</h5>
                                <nav>
                                    <ul className={style.navigation_options}>
                                        <li>
                                            <Link href="/servicos/financas">Finanças</Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/marketing">Marketing</Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/marketing-digital">Marketing Digital</Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/modelagem-de-negocios">Modelagem de Negócios</Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/producao-enxuta">Produção enxuta</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <h5>Workshops</h5>
                                <nav>
                                    <ul className={style.navigation_options}>
                                        <li>
                                            <Link href="/servicos/planejamento-estrategico">Planejamento Estratégico</Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/gestao-por-okrs">Gestão por OKRs</Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/produtividade-e-gestao-de-tarefas">Produtividade e Gestão de Tarefas</Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/indicadores-e-metricas">Indicadores e Métricas</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div>
                                <h5>Mentoria Técnica</h5>
                                <nav>
                                    <ul className={style.navigation_options}>
                                        <li>
                                            <Link href="/servicos/inovacao-e-modelo-de-negocios">Inovação e Modelo de Negócio</Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/qualidade-e-produtividade">Qualidade e Produtividade</Link>
                                        </li>
                                        <li>
                                            <Link href="/servicos/transformacao-digital">Transformação Digital</Link>
                                        </li>
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
                <p><span>Formato consultoria</span> &copy; 2022</p>
            </div>
        </footer>
    )
}