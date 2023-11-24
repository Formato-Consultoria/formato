'use client'
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ContactSection } from "@/components/section-contact";
import WhatsappWidgetButton from "@/components/whatsapp-widget-button";

import cx from "clsx";
import { blinker, inter } from "@/utils/_fonts";

import {
  Innovation,
  Metrics,
  Mindset,
  Strategy,
  cdl,
  farMelhor,
  garanti,
  maisBr,
  nexa,
  sebrae,
} from "@/components/images";
import { ArrowRight } from '@/components/images/phosphor';
import { InfiniteScrollCarousel } from "@/components/section-infinite-scroll-carousel";
import ButttonGlobal from "@/components/button";
import { PillarBoxCard } from "@/components/comp-pillar-box";
import { ArticleCardContainer } from "@/components/article-card-container";
import { ArticleCard } from "@/components/article-card";

import { PropsArticle } from "@/@types/article";
import { DataFormatter } from "@/utils/format-data-article";
import { use, useMemo } from "react";

const PageHome = () => {
  const resultData = use(getLastArticleData());
  const { articles } = useMemo(() => resultData, [resultData.articles]);

  return (
    <>
      <WhatsappWidgetButton />

      <section className={cx('principal', inter.className)}>
        <div className={'titulo_and_apresentation'}>
          <h1>
            Formato
            <span>Consultoria</span>
          </h1>

          <p>
            Ajudamos a conectar pessoas a seus negócios. Buscamos inovação e crescimento pessoal. Alinhamos objetivos, criamos conexão e colocamos ideias brilhantes em prática.
          </p>

          <Link href={"/sobre"}>
            <ButttonGlobal value="Saiba Mais" />
          </Link>
        </div>

        <div className={'box_imgs'}>
          <Image
            src={"/images/box-imgs-office-of-the-main-section.png"}
            height={194}
            width={215}
            alt="hero 1"
          />
          <Image
            src={"/images/box-imgs-man-climbing-ladder.png"}
            height={194}
            width={194}
            alt="hero 2"
          />
          <Image
            src={"/images/box-imgs-main-section-building.png"}
            height={194}
            width={215}
            alt="hero 3"
          />
        </div>
      </section>

      <section className={cx(
        "w-full h-auto m-0 mb-0 p-0",
      )}>
        <div className={"w-full flex flex-wrap items-stretch justify-center gap-y-12 md:gap-10 lg:gap-[60px] bg-[var(--white-mediumn)] py-7"}>
          <PillarBoxCard src={Mindset.src} value={"MINDSET"} />
          <PillarBoxCard src={Strategy.src} value={"ESTRATÉGIA"} />
          <PillarBoxCard src={Metrics.src} value={"MÉTRICAS"} />
          <PillarBoxCard src={Innovation.src} value={"EVOLUÇÃO"} />
        </div>
      </section>

      {articles && <section className={cx("w-full h-auto m-0 mb-0 p-0 flex flex-col items-center")}>
      <h2 className={cx("md:self-start text-[var(--black-80)] md:ml-[90px] text-center mt-[30px] mx-5 font-medium text-xl lg:text-2xl lg:mt-[25px] lg:font-semibold", blinker.className)}>ULTIMAS NOVIDADES:</h2>

      <ArticleCardContainer className="md:gap-x-3 pt-12 items-center justify-center">
        <>{articles.map((article: PropsArticle) => (
          <ArticleCard
            key={article.id}
            article={article}
            isNew
            className={"md:w-96"}
          />
        ))}</>
      </ArticleCardContainer>

      <Link className="no-underline self-end mr-4 mt-5 md:mt-10 sm:self-center sm:mr-0 md:self-end md:mr-16" href="/categorias/all">
        <ButttonGlobal
          value="Veja todos os artigos"
          icone={<ArrowRight size={20} />}
        />
      </Link>

      <hr className="w-3/4 border-[var(--black-10)] mt-4 md:mt-7" />
      </section>}

      <section className={cx('services', inter.className)}>
        <h2 className={cx("text-[var(--black-80)] ml-[50px] text-center mt-[30px] mx-5 font-medium text-xl lg:text-2xl lg:mt-[25px] lg:font-semibold", blinker.className)}>SERVIÇOS</h2>

        <div className={'container_services'}>
          <div className={cx('box_services', 'black', "ring-2 ring-zinc-950/10")}>
            <Image
              src="/icons/consultor.png"
              alt="consultoria"
              width={40}
              height={40}
            />

            <p>Consultorias Empresarial</p>
            <small>Consultores com experiência prática de mercado e especializados em gestão e inovação. Consultorias de finanças, marketing, processos, modelagem de negócios e transformação digital.</small>
          </div>

          <div className={cx('box_services', "ring-2 ring-zinc-950/10")}>
            <Image
              src="/icons/workshop.png"
              alt="workshop"
              width={40}
              height={40}
            />
            <p>Workshop</p>
            <small>Profissionais com know-how em metodologias ativas e expertise gerencial. Atuamos com abordagens inovativas e personalizadas. Conduzimos workshops de elaboração de planejamento estratégico, melhoria da produtividade e gestão por indicadores.</small>
          </div>

          <div className={cx('box_services', 'black', "ring-2 ring-zinc-950/10")}>
            <Image
              src="/icons/mentoria_tecnica.png"
              alt="mentoria técnica"
              width={40}
              height={40}
            />
            <p>Mentoria Técnica</p>
            <small>Mentoria de negócios focadas em colaborar com objetivos de projetos a serem atingidos. Ajudamos na definição  do desafio, desenhamos um processo de desenvolvimento e contribuímos para acelerar a entrega de resultados.</small>
          </div>
        </div>

        <Link href="/servicos">
          <ButttonGlobal
            value="Conhecer todos os serviços"
            icone={<ArrowRight size={20} />}
          />
        </Link>
      </section>

      <section className={cx("about w-full bg-[var(--white-mediumn)] flex flex-col items-stretch", inter.className)}>
        <h2 className={cx("text-[var(--black-80)] ml-[50px] text-center mt-[30px] mx-5 font-medium text-xl lg:text-2xl lg:mt-[25px] lg:font-semibold", blinker.className)}>SOBRE A HISOTÓRIA DA FORMATO</h2>

        <div className={"relative w-full h-auto flex justify-center px-5 flex-col py-[30px] gap-5 lg:py-10 lg:gap-10 lg:flex-row"}>
          <div className={cx("relative mb-5 lg:m-0 w-auto h-[200px] md:w-full md:h-[250px] lg:w-2/4 lg:h-[350px] rounded-xl", "ring-1 ring-zinc-950/10")}>
            <Image
              className="rounded lg:rounded-xl self-center object-cover"
              src="/images/Logotipo_light.jpg"
              fill
              alt="sobre a nossa empresa image banner"
            />
          </div>

          <div className={"flex flex-col p-0 md:pt-5 max-w-full lg:max-w-[630px] overflow-hidden leading-8 text-base lg:leading-5 lg:text-lg text-[var(--back-80)]"}>
            <p>Desde 2017 atuamos no segmento de consultoria empresarial.</p>
            <br />
            <p>Simplificando a gestão e a tornando um processo prazeroso.</p>
            <br />
            <p>Somos apaixonados por negócios, com uma vontade sincera de trabalhar pelo sucesso dos nossos clientes e fazer a diferença na vida de cada pessoa que está conosco.</p>
            <br />
            <p>Acreditamos na inovação e desenvolvemos soluções personalizadas, que respeitam o momento de vida e objetivos de cada um, para assim, criar um mundo melhor juntos.</p>

            <Link href={"/sobre"} className="mt-7 no-underline mx-auto sm:mx-0">
              <ButttonGlobal value="Saber Mais..." />
            </Link>
          </div>
        </div>
      </section>

      <InfiniteScrollCarousel
        images={[
          nexa.src,
          sebrae.src,
          farMelhor.src,
          cdl.src,
          garanti.src,
          maisBr.src
        ]}
      />

      <ContactSection />
    </>
  )
}

export default PageHome;

async function getLastArticleData() {
  try {
    const input: RequestInfo | URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?filters[category][slug][$ne]=-1&filters[author][id][$ne]=-1&pagination[page]=1&pagination[pageSize]=3&sort=publishedAt&populate=deep`;
    const response = await fetch(input);
    if (!response) notFound();

    const { data } = await response.json();

    if (!data)
      throw Error("o 'data' não possui nenhum artigo");
    else {
      const articles: Array<PropsArticle> = DataFormatter.formatMultipleArticleData(data);
      return { articles }
    }
  } catch (error) {
    console.log("Error ao buscar ultimos artigos: ", error);
    return { articles: null };
  }
}