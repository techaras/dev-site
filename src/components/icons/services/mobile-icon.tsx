export function MobileIcon({ className }: { className?: string }) {
    return (
      <svg 
        className={className} 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M5.75 4.25C5.75 3.00736 6.75736 2 8 2H16C17.2426 2 18.25 3.00736 18.25 4.25V19.75C18.25 20.9926 17.2426 22 16 22H8C6.75736 22 5.75 20.9926 5.75 19.75V4.25ZM10.25 18.25C10.25 18.6642 10.5858 19 11 19H13C13.4142 19 13.75 18.6642 13.75 18.25C13.75 17.8358 13.4142 17.5 13 17.5H11C10.5858 17.5 10.25 17.8358 10.25 18.25Z" 
          fill="url(#paint0_linear_420_257)" 
        />
        <defs>
          <linearGradient 
            id="paint0_linear_420_257" 
            x1="12" 
            y1="2" 
            x2="12" 
            y2="22" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EAEAEA"/>
            <stop offset="0.5" stopColor="#DBDBDB"/>
            <stop offset="0.75" stopColor="#F2F2F2"/>
            <stop offset="1" stopColor="#ADA996"/>
          </linearGradient>
        </defs>
      </svg>
    )
  }