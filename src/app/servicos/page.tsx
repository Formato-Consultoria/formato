import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PillarBoxCard } from "@/components/ui/comp-pillar-box";
import { Accordion } from "@/components/ui/accordion";
import { FAQ, PropsFAQ } from "@/components/shared.faq";

import {
    Innovation,
    Metrics,
    Mindset,
    Strategy,
} from "@/components/images";
import CardService from "@/components/card-service";

import { cn } from "@/lib/utils";
import { DataFormatter } from "@/utils/format-data-article";
import { PropsService, PropsServicePage } from "@/@types/service";

export async function generateMetadata(): Promise<Metadata> {
    const { servicePage } = await getInfoServicePage();

    return {
        title: servicePage?.title ?? "Serviços de Consultoria Empresarial",
        description: servicePage?.description ?? "Na formato, nós capacitamos negócios para alcançar e exceder suas metas, transformando desafios em oportunidades. Com uma abordagem personalizada, nosso objetivo é fornecer soluções estratégicas que impulsionam o crescimento, a inovação e a eficiência operacional."
    }
}

export default async function ServicePage() {
    const { servicePage } = await getInfoServicePage();
    const { services } = await getAllServices();

    return (
        <div className="prose prose-2xl px-5">
            <section className="w-full flex justify-center pt-16">
                <div className={"w-full flex flex-col px-5 md:pl-16 text-center"}>
                    <h2 className={"prose-h2:mb-1 text-3xl md:text-4xl text-balance	text-black"}>
                        {servicePage?.title ?? "Bem-vindo à Nossa Página de Serviços de Consultoria Empresarial"}
                    </h2>

                    <p className={"text-base md:text-lg lg:w-10/12 lg:mx-auto font-normal text-balance text-black/70"}>
                        {servicePage?.description ?? "Na formato, nós capacitamos negócios para alcançar e exceder suas metas, transformando desafios em oportunidades. Com uma abordagem personalizada, nosso objetivo é fornecer soluções estratégicas que impulsionam o crescimento, a inovação e a eficiência operacional."}
                    </p>
                </div>
            </section>

            <hr className="w-full my-5 mx-auto border-black/10" />

            <section className={cn(
                "w-full h-auto not-prose",
            )}>
                <div className={"w-full grid gap-y-5 py-10 md:py-8 auto-rows-auto grid-flow-row grid-cols-2 md:grid-cols-4 bg-[var(--white-mediumn)]"}>
                    <PillarBoxCard customStyle={{ maxWidth: '100%', width: '100%' }} src={Mindset.src} value={"MINDSET"} />
                    <PillarBoxCard customStyle={{ maxWidth: '100%', width: '100%' }} src={Strategy.src} value={"ESTRATÉGIA"} />
                    <PillarBoxCard customStyle={{ maxWidth: '100%', width: '100%' }} src={Metrics.src} value={"MÉTRICAS"} />
                    <PillarBoxCard customStyle={{ maxWidth: '100%', width: '100%' }} src={Innovation.src} value={"EVOLUÇÃO"} />
                </div>
            </section>

            <section className="h-auto w-full px-5 sm:p-0">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-20 gap-2">
                    {services?.map((service: PropsService) => {
                        return (
                            <CardService key={service.id} {...service} />
                        )
                    })}
                </div>
            </section>

            {servicePage?.FAQ && <section id="faqs">
                <h3 className={"mb-3 text-xl md:text-3xl font-medium text-black"}>
                    Perguntas frequentes (FAQ)
                </h3>

                <Accordion type="single" collapsible className="w-full my-6 space-y-1 not-prose">
                    {servicePage?.FAQ?.filter(item => item.component === "shared.faq").map((faq: PropsFAQ) => (
                        <FAQ key={faq.id} {...faq} />
                    ))}
                </Accordion>
            </section>}
        </div>
    )
}

async function getAllServices() {
    const TIMEOUT = 3000;
  
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);
  
    try {
      const input: RequestInfo | URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/services?populate=deep`
  
      const response = await fetch(input, {
        signal: controller.signal,
        next: {
            revalidate: 60 * 8 // 8 min
        }
      });

      if(!response) notFound();
    
      const { data } = await response.json();

      if (!data) return { services: null };
      else {
        const services: Array<PropsService> = await DataFormatter.formatMultipleServiceData(data);

        return { services }
      }
    } catch(error) {
      console.error("Error ao buscar serviços: ", error);
      return { services: null };
    } finally {
      clearTimeout(timeoutId);
    }
}

async function getInfoServicePage() {
    const TIMEOUT = 3000;
  
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);
  
    try {
      const input: RequestInfo | URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/servico?populate=deep`
  
      const response = await fetch(input, {
        signal: controller.signal,
        next: {
            revalidate: 60 * 5 // 5 min
        }
      });

      if(!response) notFound();
      const { data } = await response.json();

      if (!data) return { servicePage: null };
      else {
        const servicePage: PropsServicePage = await DataFormatter.formatServicePageData(data);
        return { servicePage }
      }
    } catch(error) {
      console.error("Error ao buscar serviços: ", error);
      return { servicePage: null };
    } finally {
      clearTimeout(timeoutId);
    }
}