/** Decorative illustration for the AI & Robotics panel (no external asset needed). */
export default function RoboticsArt() {
  return (
    <div className="robo-art" aria-hidden>
      <span className="robo-chip robo-chip--a">&lt;/&gt;</span>
      <span className="robo-chip robo-chip--b">AI</span>
      <span className="robo-chip robo-chip--c">{'{ }'}</span>
      <span className="robo-chip robo-chip--d">01</span>

      <svg className="robo-svg" viewBox="0 0 400 400" role="presentation" focusable="false">
        <defs>
          <linearGradient id="robo-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#16405f" />
            <stop offset="1" stopColor="#0b2236" />
          </linearGradient>
        </defs>

        {/* antenna */}
        <line x1="200" y1="70" x2="200" y2="102" stroke="#2de2e6" strokeWidth="4" strokeLinecap="round" />
        <circle className="robo-antenna" cx="200" cy="60" r="10" fill="#b6f03c" />

        {/* ears */}
        <rect x="86" y="150" width="22" height="52" rx="9" fill="url(#robo-metal)" stroke="#2de2e6" strokeWidth="2" />
        <rect x="292" y="150" width="22" height="52" rx="9" fill="url(#robo-metal)" stroke="#2de2e6" strokeWidth="2" />

        {/* head */}
        <rect x="106" y="100" width="188" height="146" rx="38" fill="url(#robo-metal)" stroke="#2de2e6" strokeWidth="3" />
        <rect x="128" y="122" width="144" height="102" rx="26" fill="#05101b" />

        {/* face */}
        <g className="robo-eyes">
          <circle cx="170" cy="160" r="15" fill="#2de2e6" />
          <circle cx="230" cy="160" r="15" fill="#2de2e6" />
        </g>
        <path d="M172 194 Q200 214 228 194" fill="none" stroke="#b6f03c" strokeWidth="5" strokeLinecap="round" />

        {/* neck + body */}
        <rect x="186" y="246" width="28" height="16" fill="#0b2236" stroke="#2de2e6" strokeWidth="2" />
        <rect x="130" y="262" width="140" height="102" rx="30" fill="url(#robo-metal)" stroke="#2de2e6" strokeWidth="3" />
        <circle cx="200" cy="312" r="20" fill="#05101b" stroke="#b6f03c" strokeWidth="3" />
        <circle className="robo-core" cx="200" cy="312" r="7" fill="#b6f03c" />
        <circle cx="156" cy="290" r="4" fill="#2de2e6" />
        <circle cx="244" cy="290" r="4" fill="#2de2e6" />

        {/* arms */}
        <path d="M130 292 Q92 300 84 338" fill="none" stroke="#2de2e6" strokeWidth="9" strokeLinecap="round" />
        <path d="M270 292 Q308 280 322 244" fill="none" stroke="#2de2e6" strokeWidth="9" strokeLinecap="round" />
        <circle cx="84" cy="342" r="12" fill="#0b2236" stroke="#b6f03c" strokeWidth="3" />
        <circle cx="324" cy="238" r="12" fill="#0b2236" stroke="#b6f03c" strokeWidth="3" />
      </svg>
    </div>
  )
}
