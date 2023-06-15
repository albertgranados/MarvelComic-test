import { useLocation } from 'wouter'
import {
  BiChevronLeft,
  BiChevronsLeft,
  BiChevronRight,
  BiChevronsRight
} from 'react-icons/bi'

interface PaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage
}: PaginationProps) {
  const [, navigate] = useLocation()

  const numberOfPages: number = Math.ceil(totalItems / itemsPerPage)
  const isNextVisible: boolean = currentPage < numberOfPages
  const isPrevVisible: boolean = currentPage > 1

  return (
    <div className="flex gap-2 justify-center items-center pt-6 pb-20">
      <PrevButton
        currentPage={currentPage}
        navigate={navigate}
        isVisible={isPrevVisible}
      />

      {currentPage >= numberOfPages && (
        <NumberButton
          number={currentPage - 2}
          currentPage={currentPage}
          navigate={navigate}
        />
      )}
      {currentPage > 1 && (
        <NumberButton
          number={currentPage - 1}
          currentPage={currentPage}
          navigate={navigate}
        />
      )}
      <NumberButton
        number={currentPage}
        currentPage={currentPage}
        navigate={navigate}
      />
      {currentPage < numberOfPages && (
        <NumberButton
          number={currentPage + 1}
          currentPage={currentPage}
          navigate={navigate}
        />
      )}
      {currentPage <= 1 && (
        <NumberButton
          number={currentPage + 2}
          currentPage={currentPage}
          navigate={navigate}
        />
      )}

      <NextButton
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        navigate={navigate}
        isVisible={isNextVisible}
      />
    </div>
  )
}

interface PrevButtonProps {
  currentPage: number
  navigate: (arg0: string) => void
  isVisible: boolean
}

function PrevButton({ currentPage, navigate, isVisible }: PrevButtonProps) {
  const handleOnClickPrev = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (currentPage - 1 === 1) navigate(`/comics`)
    else navigate(`/comics/p/${currentPage - 1}`)
  }

  const handleOnClickFirst = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate(`/comics`)
  }

  return (
    <div className={`flex gap-2 ${!isVisible ? 'hidden' : ''}`}>
      <button
        onClick={handleOnClickFirst}
        className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-2 rounded-l"
      >
        <BiChevronsLeft className="inline-block" size={20} />
      </button>
      <button
        onClick={handleOnClickPrev}
        className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-2 rounded-l"
      >
        <BiChevronLeft className="inline-block" size={20} />
      </button>
    </div>
  )
}

interface NextButtonProps {
  currentPage: number
  numberOfPages: number
  navigate: (arg0: string) => void
  isVisible: boolean
}

function NextButton({
  currentPage,
  numberOfPages,
  navigate,
  isVisible
}: NextButtonProps) {
  const handleOnClickNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate(`/comics/p/${currentPage + 1}`)
  }

  const handleOnClickLast = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate(`/comics/p/${numberOfPages}`)
  }

  return (
    <div className={`flex gap-2 ${!isVisible ? 'hidden' : ''}`}>
      <button
        onClick={handleOnClickNext}
        className={
          'bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-2 rounded-r'
        }
      >
        <BiChevronRight className="inline-block" size={20} />
      </button>
      <button
        onClick={handleOnClickLast}
        className={
          'bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-2 rounded-r'
        }
      >
        <BiChevronsRight className="inline-block" size={20} />
      </button>
    </div>
  )
}

interface NumberButtonProps {
  number: number
  currentPage: number
  navigate: (arg0: string) => void
}

function NumberButton({ number, currentPage, navigate }: NumberButtonProps) {
  const isSelected: boolean = number === currentPage

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (number !== currentPage) {
      if (number === 1) navigate(`/comics`)
      else navigate(`/comics/p/${number}`)
    }
  }

  return (
    <button
      onClick={handleOnClick}
      className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-r"
    >
      <span className={`${isSelected ? 'text-red-600' : ''}`}>{number}</span>
    </button>
  )
}
