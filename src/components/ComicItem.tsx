import { Link } from 'wouter'

interface ComicItemProps {
  id: number
  title: string
  image: string
  authors: any[]
}

export default function ComicItem({
  id,
  title,
  image,
  authors
}: ComicItemProps) {
  return (
    <li className="group mb-6">
      <Link href={`/comics/${id}`}>
        <a>
          <div className="relative rounded-sm aspect-ratio-comic bg-gray-100 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-red-300 transition-all duration-300 ease-in-out">
            <img
              className="object-fill w-full h-full shadow-lg shadow-slate-400"
              src={image}
              alt={`Cover image from ${title}`}
            />
          </div>
        </a>
      </Link>
      <div className="mt-6">
        <h5>
          <Link href={`/comics/${id}`}>
            <a className="text-black text-sm line-clamp-2 font-bold group-hover:text-red-600 transition-all duration-300 ease-in-out">
              {title}
            </a>
          </Link>
        </h5>
        <p className="text-gray-600 text-xs line-clamp-2 mt-1">
          <a className="hover:cursor-pointer hover:underline">
            {authors.length > 0 ? authors[0].name : null}
          </a>
          <span>{`${', '}`}</span>
          <a className="hover:cursor-pointer hover:underline">
            {authors.length > 1 ? authors[1].name : null}
          </a>
        </p>
      </div>
    </li>
  )
}
