import useData from '../hooks/useData'
import ComicItem from '../components/ComicItem'
import Grid from '../components/Grid'

interface ComicItemProps {
  page?: string
}

export default function ComicsScreen({ page }: ComicItemProps) {
  const { data } = useData({ page })

  const getImage = (comic: any) => {
    const path: string = comic.thumbnail.path
    const extension: string = comic.thumbnail.extension
    const NOT_AVAILABLE = 'image_not_available'
    const PORTRAIT_MODE = 'portrait_uncanny'
    const isAvailable = !path.includes(NOT_AVAILABLE)
    const isPortrait = path.includes(PORTRAIT_MODE)

    if (!isAvailable && !isPortrait) {
      return `${path}/${PORTRAIT_MODE}.${extension}`
    } else {
      return `${path}.${extension}`
    }
  }

  return (
    <>
      Comics
      <div>
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
      </div>
    </>
  )
}
