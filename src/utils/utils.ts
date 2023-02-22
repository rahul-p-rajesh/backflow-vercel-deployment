export interface PaginationParams {
  page: number
  limit: number
  sortBy: string
  sortByDirection: 'ASC' | 'DESC'
  search: string
}

export function preparePaginationParams(params: PaginationParams) {
  const paramsObj: any = {}

  if (params.page) {
    paramsObj.page = params.page + 1
  }

  if (params.limit) {
    paramsObj.limit = params.limit
  }

  if (params.sortBy) {
    paramsObj.sortBy = `${params.sortBy}:${params.sortByDirection}`
  }

  if (params.search) {
    paramsObj.search = params.search
  }

  return paramsObj
}
