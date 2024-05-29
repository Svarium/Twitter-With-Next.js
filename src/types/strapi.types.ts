export type StrapiPaginationType = {
    "pageCount": number,
    "total": number,
    "page":number,
    "PageSize":number,    
}

export type StrapiResultType<T> = {
    "data": T[],
    "meta": {
        pagination: StrapiPaginationType
    } 
}