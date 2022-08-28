import c from "./Paginator.module.css";

const Paginator = ({totalCount, pageSize, selectedPage, updateCurrentPage}) => {
    const pageCount = Math.ceil(totalCount / pageSize)
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    const currentPage = (selectedPage - 5) < 0 ? 0 : selectedPage - 5;
    const nextPage = selectedPage + 5

    return (
        <>
            {pages.slice(currentPage, nextPage).map(page => {
                return <span
                    key={Math.random()}
                    className={selectedPage === page ? c.selected : c.default}
                    onClick={() => updateCurrentPage(page)}
                >{page}
                    </span>
            })}
        </>
    )
}

export default Paginator