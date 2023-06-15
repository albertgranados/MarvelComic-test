import ComicItem from '../components/ComicItem'
import Grid from '../components/Grid'
import Pagination from '../components/Pagination'
import useFetch from '../hooks/useFetch'
import { type Result } from '../types/ComicLibraryInterface'

const ITEMS_PER_PAGE: number = 20

interface ComicItemProps {
  currentPage?: number
}

export default function ComicsScreen({ currentPage = 1 }: ComicItemProps) {
  const { data, totalItems, isLoading, error } = useFetch(
    currentPage,
    ITEMS_PER_PAGE
  )

  return (
    <div className="pt-[80px] min-h-screen">
      <div className="flex flex-col items-center px-4 py-10">
        <h1 className="text-4xl font-medium text-gray-800">
          Last Month Comics
        </h1>
        <h3 className="text-gray-400 mt-4">{`${totalItems} results`}</h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        {isLoading ? (
          <div className="min-h-screen">
            <p>Loading...</p>
          </div>
        ) : error.length > 0 ? (
          <div className="min-h-screen">
            <p>{error}</p>
          </div>
        ) : (
          <ComicsList
            data={data}
            currentPage={currentPage}
            totalItems={totalItems}
          />
        )}
      </div>
    </div>
  )
}

interface ComicsListProps {
  data: any[]
  currentPage: number
  totalItems: number
}

function ComicsList({ data, currentPage, totalItems }: ComicsListProps) {
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
    <>
      <Grid>
        {data?.map((comic: any) => (
          <ComicItem
            key={comic.id}
            id={comic.id}
            image={getImage(comic)}
            title={comic.title}
            authors={comic.creators.items}
          />
        ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </>
  )
}
