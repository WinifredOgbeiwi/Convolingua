/** Playful floating doodles for the kids page (stars, books, balloons). */
export default function KidsArt() {
  return (
    <div className="kids-art" aria-hidden>
      <span className="kids-blob kids-blob--a" />
      <span className="kids-blob kids-blob--b" />
      <span className="kids-blob kids-blob--c" />

      <svg className="kids-doodle kids-doodle--star" viewBox="0 0 64 64" focusable="false">
        <path
          fill="#ff5d9e"
          d="M32 4l7.4 15.1L56 21.5 44 33.2l2.8 16.3L32 41.6 17.2 49.5 20 33.2 8 21.5l16.6-2.4z"
        />
      </svg>

      <svg className="kids-doodle kids-doodle--star2" viewBox="0 0 48 48" focusable="false">
        <path
          fill="#5b34d6"
          d="M24 3l5.5 11.2L42 16.4 33 25.1l2.1 12.2L24 31.4 12.9 37.3 15 25.1 6 16.4l12.5-2.2z"
        />
      </svg>

      <svg className="kids-doodle kids-doodle--book" viewBox="0 0 80 64" focusable="false">
        <rect x="8" y="10" width="28" height="44" rx="4" fill="#fff" stroke="#5b34d6" strokeWidth="3" />
        <rect x="44" y="10" width="28" height="44" rx="4" fill="#ffe27a" stroke="#5b34d6" strokeWidth="3" />
        <path d="M36 12v40" stroke="#5b34d6" strokeWidth="3" />
        <path d="M16 22h12M16 32h12M52 22h12M52 32h8" stroke="#ff5d9e" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <svg className="kids-doodle kids-doodle--balloon" viewBox="0 0 48 72" focusable="false">
        <ellipse cx="24" cy="24" rx="18" ry="22" fill="#5b34d6" />
        <ellipse cx="18" cy="16" rx="5" ry="7" fill="rgba(255,255,255,0.35)" />
        <path d="M24 46c0 8 4 14 0 22" stroke="#2d1b69" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M18 44h12l-6 8z" fill="#3b1fa3" />
      </svg>

      <svg className="kids-doodle kids-doodle--abc" viewBox="0 0 72 40" focusable="false">
        <rect x="2" y="4" width="68" height="32" rx="10" fill="#fff" stroke="#ff5d9e" strokeWidth="3" />
        <text
          x="36"
          y="27"
          textAnchor="middle"
          fontFamily="'Baloo 2', sans-serif"
          fontSize="18"
          fontWeight="800"
          fill="#5b34d6"
        >
          ABC
        </text>
      </svg>

      <svg className="kids-doodle kids-doodle--heart" viewBox="0 0 40 36" focusable="false">
        <path
          fill="#ff5d9e"
          d="M20 32S4 22 4 12a8 8 0 0 1 16-2 8 8 0 0 1 16 2c0 10-16 20-16 20z"
        />
      </svg>
    </div>
  )
}
