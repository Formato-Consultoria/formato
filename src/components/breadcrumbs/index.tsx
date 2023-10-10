import Link from "next/link";

export function Breadcrumb({
  categorySlug,
  categoryName
}: { categorySlug: string, categoryName: string }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ul className="inline-flex items-center justify-center mx-auto w-[90%]">
        <li className="inline-flex items-center">
          <Link href="/categorias/all" className="inline-flex items-center text-sm font-medium no-underline text-gray-700 hover:text-[var(--link-color)]">
            <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Inicio
          </Link>
        </li>
        <li>
          <div className="flex items-center w-max">
            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <Link href={`/categorias/${categorySlug}`} className="ml-1 text-sm font-medium no-underline text-gray-700 hover:text-[var(--link-color)] md:ml-2">{categoryName}</Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}