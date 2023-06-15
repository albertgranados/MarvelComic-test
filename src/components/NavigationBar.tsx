import { Link } from 'wouter'
import MARVEL_LOGO from '../assets/marvel-logo.svg'

export default function NavigationBar() {
  return (
    <div className="flex fixed h-[80px] w-full z-10 justify-center items-center px-4 bg-red-500 shadow-lg">
      <Link to="/">
        <a>
          <img
            src={MARVEL_LOGO}
            alt="Marvel logo"
            className="h-10 border border-white"
          />
        </a>
      </Link>
    </div>
  )
}
