import axios from 'axios'
import { QiitaArticle } from '../types/QiitaArticle'
import { baseQiitaUrl } from '../constants/qiitaPickConstants'

export const fetchQiitaArticles = async (
  queryParams: string
): Promise<QiitaArticle[] | null> => {
  try {
    const url = baseQiitaUrl + queryParams
    console.log(`axios.get(): ${url}`)
    const response = await axios.get<QiitaArticle[]>(url)
    return response.data
  } catch (error) {
    console.error('Error fetching articles from Qiita:', error)
    return null
  }
}

export const filteredResponseData = (responseData: QiitaArticle[]) => {
  const filteredData = responseData.map((item: QiitaArticle) => ({
    id: item.id,
    title: item.title,
    url: item.url,
    likesCount: item.likes_count,
    stocksCount: item.stocks_count,
    tags: JSON.stringify(item.tags),
    createdAt: new Date(item.created_at),
    updatedAt: new Date(item.updated_at),
  }))

  return JSON.stringify(filteredData, null, 2)
}

export const buildQueryParams = (
  page: number,
  perPage: number,
  stocks: number,
  created: string,
  tag: string
): string => {
  return `?page=${page}&per_page=${perPage}&query=${buildQuery(created, stocks, tag)}`
}

const buildQuery = (created: string, stocks: number, tag: string) => {
  return encodeURIComponent(`created:>${created} stocks:>${stocks} tag:${tag}`)
}
