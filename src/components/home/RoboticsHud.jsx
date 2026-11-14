/** Ambient HUD / circuit overlay for the robotics page hero. */
export default function RoboticsHud() {
  return (
    <div className="rp-hud" aria-hidden>
      <div className="rp-hud-grid" />
      <div className="rp-hud-scan" />
      <svg className="rp-hud-rings" viewBox="0 0 400 400" focusable="false">
        <circle className="rp-hud-ring rp-hud-ring--a" cx="200" cy="200" r="148" />
        <circle className="rp-hud-ring rp-hud-ring--b" cx="200" cy="200" r="118" />
        <circle className="rp-hud-ring rp-hud-ring--c" cx="200" cy="200" r="88" />
        <path
          className="rp-hud-arc"
          d="M52 200 A148 148 0 0 1 200 52"
          fill="none"
        />
        <path
          className="rp-hud-arc rp-hud-arc--lime"
          d="M348 200 A148 148 0 0 1 200 348"
          fill="none"
        />
      </svg>
      <span className="rp-hud-node rp-hud-node--1" />
      <span className="rp-hud-node rp-hud-node--2" />
      <span className="rp-hud-node rp-hud-node--3" />
      <span className="rp-hud-node rp-hud-node--4" />
    </div>
  )
}
