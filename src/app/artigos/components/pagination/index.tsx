import { PropsPagination } from "@/@types/article";

export function Pagination({ meta }: { meta: PropsPagination }) {
    return (<></>
        // <div className={style.pagination_btn}>
        //     <ButttonGlobal
        //         className={style.button_pag}
        //         value={
        //             <ArrowLeft
        //                 size={25}
        //                 color="rgb(118, 18, 134)"
        //                 weight="fill"
        //             />
        //         }
        //         disabled={pageIndex === 1}
        //         onClick={() => {
        //             setPageIndex(pageIndex - 1);
        //         }}
        //     />

        //     <ButttonGlobal
        //         className={style.button_pag}
        //         value={
        //             <ArrowRight
        //                 size={25}
        //                 color="rgb(118, 18, 134)"
        //                 weight="fill"
        //             />
        //         }
        //         disabled={pageIndex === (data && metaPagination?.pagination?.pageCount)}
        //         onClick={() => {
        //             setPageIndex(pageIndex + 1);
        //         }}
        //     />

        //     <span>{`${pageIndex} de ${data && metaPagination?.pagination?.pageCount}`}</span>
        // </div>
    )
}