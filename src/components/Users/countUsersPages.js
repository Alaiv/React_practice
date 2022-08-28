// export const countPages = (totalCount, pageSize, selectedPage) => {
//     const pageCount = Math.ceil(totalCount / pageSize)
//     const pages = [];
//     for (let i = 1; i <= pageCount; i++) {
//         pages.push(i)
//     }
//     const currentPage = (selectedPage - 5) < 0 ? 1 : selectedPage - 5;
//     const nextPage = selectedPage + 5
//
//     return {pages, currentPage, nextPage}
// }