import {
  buildQueryParams,
  fetchQiitaArticles,
  filteredResponseData,
} from './scripts/fetchQiitaArticles'
;(async () => {
  try {
    console.log('start')

    const page = 1
    const perPages = 10
    const stocks = 100
    const created = '2024-01-01'
    const tag = 'TypeScript'

    const queryParams = buildQueryParams(page, perPages, stocks, created, tag)
    const articles = await fetchQiitaArticles(queryParams)

    if (articles) {
      const result = filteredResponseData(articles)
      console.log(result)
    }

    console.log('end')
  } catch (error) {
    console.error('エラーが発生しました:', error)
  }
})()
