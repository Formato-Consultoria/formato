'use client'
import ButttonGlobal from "@/components/button"
import { NotFoundImage } from "@/components/images"
import NoContent from "@/components/no-content"
import Link from "next/link"
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <NoContent
          image={NotFoundImage.src}
        >
            <section>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Ops! Tivemos algum error</p>
                        <p className="mb-4 text-lg font-light text-gray-500">{error.message}</p>
                        <Link href="/" className="inline-flex no-underline">
                            <ButttonGlobal
                              className={'bg-notcontent-600 hover:text-notcontent-600 hover:border-notcontent-600'}
                              onClick={() => reset}
                              value="Tentar navamente"
                            />
                        </Link>
                    </div>   
                </div>
            </section>
        </NoContent>
      </body>
    </html>
  )
}