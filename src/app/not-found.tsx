import NoContent from "@/components/no-content";

import { SearchNotFound, NotFoundImage } from "@/components/images";
import Link from "next/link";
import ButttonGlobal from "@/components/button";

function NotFound() {
    return (
        <NoContent
            image={NotFoundImage.src}
        >
            <section>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-notcontent-600">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Ops! Parece que você se perdeu</p>
                        <p className="mb-4 text-lg font-light text-gray-500">Desculpe, não conseguimos encontrar essa página. Explore nosso site ou entre em contato para ajuda</p>
                        <Link href="/" className="inline-flex no-underline">
                            <ButttonGlobal className={'bg-notcontent-600 hover:text-notcontent-600 hover:border-notcontent-600'} value="Voltar para o inicio"/>
                        </Link>
                    </div>   
                </div>
            </section>
        </NoContent>
    )
}

export default NotFound;