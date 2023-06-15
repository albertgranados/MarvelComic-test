import useComic from '../hooks/useComic'
import { type Result } from '../types/ComicLibraryInterface'

interface ComicDetailsScreenProps {
  id: number
}

export default function ComicDetailsScreen({ id }: ComicDetailsScreenProps) {
  const { comic, isLoading, error } = useComic(id)

  const getImage = (comic: Result) => {
    const path: string = comic.thumbnail.path
    const extension: string = comic.thumbnail.extension
    const NOT_AVAILABLE: string = 'image_not_available'
    const PORTRAIT_MODE: string = 'portrait_uncanny'
    const isAvailable: boolean = !path.includes(NOT_AVAILABLE)
    const isPortrait: boolean = path.includes(PORTRAIT_MODE)

    if (!isAvailable && !isPortrait) {
      return `${path}/${PORTRAIT_MODE}.${extension}`
    } else {
      return `${path}.${extension}`
    }
  }

  return (
    <div className="flex flex-col pt-[160px] min-h-screen items-center justify-center pb-40">
      {isLoading ? (
        <div className="min-h-screen">
          <p>Loading...</p>
        </div>
      ) : error.length > 0 ? (
        <div className="min-h-screen">
          <p>{error}</p>
        </div>
      ) : comic != null ? (
        <div className="flex items-center justify-center flex-col gap-6">
          <div className="flex rounded-sm w-[300px] aspect-ratio-comic bg-gray-100">
            <img
              className="object-fill"
              src={getImage(comic)}
              alt={`Cover image from`}
            />
          </div>
          <div>
            <h1 className="text-gray-400">{`${id}`}</h1>
            <h1 className="font-bold text-2xl">{`${comic.title}`}</h1>
            <h1 className="text-gray-400">{`${comic.description ?? ''}`}</h1>
          </div>
        </div>
      ) : null}
    </div>
  )
}
