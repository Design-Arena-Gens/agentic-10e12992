export default function Logo() {
  return (
    <div className="logo-wrapper">
      <svg
        className="logo-svg"
        viewBox="0 0 480 240"
        role="img"
        aria-labelledby="goodluck-footwear-logo"
      >
        <title id="goodluck-footwear-logo">GoodLuck Footwear logo</title>
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#18213a" />
            <stop offset="100%" stopColor="#0c101d" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffd56f" />
            <stop offset="50%" stopColor="#ffb703" />
            <stop offset="100%" stopColor="#ff6f61" />
          </linearGradient>
          <linearGradient id="shoeHighlight" x1="30%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffe0b2" stopOpacity="0" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#000000" floodOpacity="0.35" />
          </filter>
        </defs>

        <g filter="url(#softShadow)">
          <rect
            x="20"
            y="20"
            width="440"
            height="200"
            rx="36"
            fill="url(#bgGradient)"
          />
          <g transform="translate(60 70)">
            <g transform="translate(0 -10)">
              <path
                d="M44 72c-7-20 0-41 18-52 13-8 31-9 42-2 11 7 21 9 33 3 15-7 33-3 43 12 6 9 9 20 6 30l-4 16c-4 18-19 31-37 33l-67 7c-21 2-39-10-46-29z"
                fill="url(#accentGradient)"
              />
              <path
                d="M158 74c-6 10-17 17-30 19l-60 6c-13 1-25-5-32-16 7 20 26 33 48 30l70-7c20-2 36-17 40-37l4-18c0-1 0-2 0-3-2 9-18 15-40 12z"
                fill="url(#shoeHighlight)"
              />
              <path
                d="M50 74c-2-6 1-12 7-14 15-5 42-6 61 2 11 4 18 12 15 21-3 8-13 13-24 14l-35 4c-11 1-21-5-24-13z"
                fill="#18213a"
                opacity="0.35"
              />
              <circle cx="84" cy="64" r="6" fill="#121a2d" />
              <circle cx="108" cy="60" r="6" fill="#121a2d" />
              <circle cx="132" cy="58" r="6" fill="#121a2d" />
            </g>

            <g transform="translate(190 10)">
              <path
                d="M28 0c-15 0-28 11-28 27s11 27 27 27c9 0 16-3 21-9l-11-8c-2 2-6 4-10 4-6 0-11-4-11-11h35c3-21-10-30-23-30zm-10 22c1-6 5-9 10-9 6 0 9 3 10 9z"
                fill="url(#accentGradient)"
              />
              <path
                d="M72 0c-15 0-28 11-28 27s11 27 28 27c9 0 16-3 21-9l-11-8c-2 2-6 4-10 4-6 0-11-4-11-11h35c3-21-10-30-23-30zm-10 22c1-6 5-9 10-9 6 0 9 3 10 9z"
                fill="url(#accentGradient)"
              />
              <path
                d="M117 20c4 0 8 1 10 3l7-12c-5-6-14-9-21-9-18 0-31 12-31 27s12 27 30 27c10 0 19-4 23-10l-10-10c-2 3-6 5-11 5-6 0-10-4-10-9 0-6 5-9 13-9z"
                fill="url(#accentGradient)"
              />
              <path
                d="M148 2v50h16v-20c0-8 5-13 11-13 5 0 8 3 8 9v24h16v-27c0-14-8-23-21-23-8 0-15 4-19 10V2z"
                fill="url(#accentGradient)"
              />
              <path
                d="M226 52c8 0 14-3 18-9v7h16V2h-16v7c-4-5-10-9-18-9-16 0-29 12-29 27s12 27 29 27zm5-39c7 0 12 5 12 12s-5 12-12 12c-6 0-12-5-12-12s5-12 12-12z"
                fill="url(#accentGradient)"
              />
            </g>
          </g>
          <g transform="translate(60 160)">
            <text
              x="0"
              y="0"
              fontFamily="'Poppins', 'Segoe UI', sans-serif"
              fontSize="48"
              fontWeight="700"
              letterSpacing="0.08em"
              fill="#f5f7ff"
            >
              GOODLUCK
            </text>
            <text
              x="2"
              y="38"
              fontFamily="'Montserrat', 'Segoe UI', sans-serif"
              fontSize="26"
              fontWeight="500"
              letterSpacing="0.6em"
              fill="#ffd56f"
            >
              FOOTWEAR
            </text>
            <rect x="0" y="52" width="180" height="4" rx="2" fill="url(#accentGradient)" opacity="0.75" />
          </g>
        </g>
      </svg>
    </div>
  );
}
