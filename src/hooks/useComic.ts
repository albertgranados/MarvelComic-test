import { useEffect, useState } from 'react'
import { type Result } from '../types/ComicLibraryInterface'

const API_PATH: string = 'http://gateway.marvel.com/v1/public/comics'
const API_KEY: string = import.meta.env.VITE_MARVEL_API_KEY

export default function useComic(id: number) {
  const [comic, setComic] = useState<Result>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const getComic = async () => {
    const response = await fetch(`${API_PATH}/${id}?apikey=${API_KEY}`)
    const json = await response.json()

    if (json.code === 200) {
      const result: Result = json.data.results[0]
      setComic(result)
      setIsLoading(false)
    } else {
      setError('Invalid request. Please try it again.')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    setError('')

    void getComic()
  }, [])

  return { comic, isLoading, error }
}
