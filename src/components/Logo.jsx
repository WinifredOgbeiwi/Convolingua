import { Link } from 'react-router-dom'
import { IMAGES } from '../utilities'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`logo ${className}`.trim()} aria-label="ConvoLingua home">
      <img src={IMAGES.Logo} alt="ConvoLingua" className="logo-img" width={140} height={40} />
    </Link>
  )
}
