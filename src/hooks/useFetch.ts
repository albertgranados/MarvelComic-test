import { useEffect, useState } from 'react'
import { type Result, type ComicLibrary } from '../types/ComicLibraryInterface'

const API_PATH: string = 'http://gateway.marvel.com/v1/public/comics'
const API_KEY: string = import.meta.env.VITE_MARVEL_API_KEY
const FILTER: string =
  'format=comic&formatType=comic&orderBy=-focDate&dateDescriptor=thisMonth'

export default function useFetch(currentPage: number, itemsPerPage: number) {
  const [data, setData] = useState<Result[]>([])
  const [totalItems, setTotalItems] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const getComics = async () => {
    const response: Response = await fetch(
      `${API_PATH}?apikey=${API_KEY}&${FILTER}&limit=${itemsPerPage}&offset=${
        itemsPerPage * (currentPage - 1)
      }`
    )
    const json: ComicLibrary = await response.json()

    if (json.code === 200) {
      setTotalItems(json.data.total)

      if (currentPage > Math.ceil(json.data.total / itemsPerPage)) {
        setError('Invalid page')
        setIsLoading(false)
        return
      }

      const result: Result[] = json.data.results
      setData(result)
      setIsLoading(false)
    } else {
      setError('Invalid request. Please try it again.')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    setError('')

    if (isNaN(currentPage) || currentPage < 1) {
      setError('Invalid page')
      setIsLoading(false)
      return
    }

    void getComics()
  }, [currentPage])

  return { data, totalItems, isLoading, error }
}
