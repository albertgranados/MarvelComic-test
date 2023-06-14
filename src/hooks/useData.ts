import { useEffect, useState } from 'react'
import results from '../mocks/results.json'

interface useDataProps {
  page: string | undefined
}

export default function useData({ page }: useDataProps = { page: '1' }) {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    /* const fetchData = async () => {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/comics?apikey=${
          import.meta.env.VITE_MARVEL_API_KEY
        }&format=comic&formatType=comic&orderBy=-focDate&dateDescriptor=thisMonth`
      )
      const result = await response.json()
      setData(result.data.results)
    }

    void fetchData() */
    setData(results.data.results)
  }, [])

  return { data }
}
