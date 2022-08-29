import c from "./Paginator.module.css";
import {useState} from "react";

const Paginator = ({totalCount, pageSize, selectedPage, updateCurrentPage}) => {
    // const [firstPage, setFirstPage] = useState(0)
    // const [lastPage, setLastPage] = useState(10)
    // const prevPagination = () => {
    //     setFirstPage(firstPage - 10)
    //     setLastPage(lastPage - 10)
    // }
    //
    // const nextPagination = () => {
    //     setFirstPage(firstPage + 10)
    //     setLastPage(lastPage + 10)
    // }

    const pageCount = Math.ceil(totalCount / pageSize)
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(totalCount/10)
    const [pagePortionNumber, setPagePortionNumber] = useState(1)
    const leftPortionPage = (pagePortionNumber - 1) * 10 + 1
    const rightPortionPage = pagePortionNumber * 10

    return (
        <>  { pagePortionNumber > 1 &&
            <span><button onClick={() => setPagePortionNumber(pagePortionNumber - 1)}>prev</button></span>}
            {pages.filter(a => a >= leftPortionPage && a <= rightPortionPage).map(page => {
                return <span
                    key={Math.random()}
                    className={selectedPage === page ? c.selected : c.default}
                    onClick={() => updateCurrentPage(page)}
                >{page}
                    </span>
            })}
            { pagePortionNumber < portionCount &&
                <span><button onClick={() => setPagePortionNumber(pagePortionNumber + 1)}>next</button></span>
            }
        </>
    )
}

export default Paginator