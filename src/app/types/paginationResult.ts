export interface IPaginationResult<T> {
    totalRecords: number,
    recordsByPage: number,
    page: number,
    records: T[],
    readonly maxPages: number
}