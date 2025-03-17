import { SVGProps } from 'react'

export function Loader(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z' />
    </svg>
  )
}

export function SunIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export function MoonIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export function StarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z' />
    </svg>
  )
}

export function BookIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023'
      />
    </svg>
  )
}

export function FilterIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z'
          fill='currentColor'
        ></path>
      </g>
    </svg>
  )
}

export function ArrowUpRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          id='primary'
          d='M19,4H9A1,1,0,0,0,9,6h7.59L4.29,18.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L18,7.41V14.9a1,1,0,0,0,2,0V5A1,1,0,0,0,19,4Z'
        ></path>
      </g>
    </svg>
  )
}

export function ArrowLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M5 12h14M5 12l4-4m-4 4 4 4'
      />
    </svg>
  )
}

export function CalendarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z'
      />
    </svg>
  )
}

export function CrossIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'></path>
    </svg>
  )
}

export function ChartIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207'
      />
    </svg>
  )
}

export function UsersGroup(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export function AlertIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z'
      />
    </svg>
  )
}

export function HamburgerMenuIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 50'
      {...props}
    >
      <path d='M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z'></path>
    </svg>
  )
}

export function RSSIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      {...props}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path d='M3 1H1V3H3C8.52285 3 13 7.47715 13 13V15H15V13C15 6.37258 9.62742 1 3 1Z'></path>{' '}
        <path d='M3 6H1V8H3C5.76142 8 8 10.2386 8 13V15H10V13C10 9.13401 6.86599 6 3 6Z'></path>{' '}
        <path d='M3 15C4.10457 15 5 14.1046 5 13C5 11.8954 4.10457 11 3 11C1.89543 11 1 11.8954 1 13C1 14.1046 1.89543 15 3 15Z'></path>{' '}
      </g>
    </svg>
  )
}

export function GitHubIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_9914_10)'>
        <path
          d='M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_9914_10'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export function TwitterIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'></path>
    </svg>
  )
}

export function HashnodeIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 337 337'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect x='113' y='113' width='111' height='111' rx='55.5' fill='none' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z'
        fill='currentColor'
      />
    </svg>
  )
}

export function LinkedInIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 448 512'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path>
    </svg>
  )
}

export function DevToIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 448 512'
      {...props}
    >
      <path d='M120.1 208.3c-3.9-2.9-7.8-4.4-11.7-4.4H91v104.5h17.5c3.9 0 7.8-1.5 11.7-4.4 3.9-2.9 5.8-7.3 5.8-13.1v-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32H43.9C19.7 32 .1 51.6 0 75.8v360.4C.1 460.4 19.7 480 43.9 480h360.2c24.2 0 43.8-19.6 43.9-43.8V75.8c-.1-24.2-19.7-43.8-43.9-43.8zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3h-46.4V173h47.4c35.4 0 47.4 28.5 47.4 47.3v70.9zm100.7-88.7H201.6v38.4h32.6v29.6H201.6v38.4h53.3v29.6h-62.2c-11.2.3-20.4-8.5-20.7-19.7V193.7c-.3-11.2 8.6-20.4 19.7-20.7h63.2v29.5zm103.6 115.3c-13.2 30.8-36.9 24.6-47.4 0l-38.5-144.8h32.6l29.7 113.7 29.6-113.7h32.6l-38.5 144.8z' />
    </svg>
  )
}

export function LeetCodeIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z'></path>
      <path d='M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z'></path>
    </svg>
  )
}

export function GeeksForGeeksIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path d='M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z'></path>
      </g>
    </svg>
  )
}

export function CodingNinjasIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path d='M23.198 0c-.499.264-1.209.675-1.79.984a542.82 542.82 0 0 0 0 6.242c.995-.526 1.761-.834 1.79-2.066V0zM8.743.181C7.298.144 5.613.65 4.47 1.414c-1.17.8-1.987 1.869-2.572 3.179A16.787 16.787 0 0 0 .9 8.87c-.15 1.483-.128 3.079.025 4.677.27 1.855.601 3.724 1.616 5.456 1.57 2.62 4.313 4.109 7.262 4.19 3.41.246 7.233.53 11.411.807.022-2.005.01-5.418 0-6.25-3.206-.21-7.398-.524-11.047-.782-.443-.043-.896-.056-1.324-.172-1.086-.295-1.806-.802-2.374-1.757-.643-1.107-.875-2.832-.797-4.294.11-1.27.287-2.41 1.244-3.44.669-.56 1.307-.758 2.161-.84 5.17.345 7.609.53 12.137.858.032-1.133.01-3.46 0-6.229C16.561.752 12.776.474 8.743.181zm-.281 9.7c.174.675.338 1.305.729 1.903.537.832 1.375 1.127 2.388.877.76-.196 1.581-.645 2.35-1.282zm12.974 1.04-5.447.689c.799.739 1.552 1.368 2.548 1.703.988.319 1.78.01 2.308-.777.209-.329.56-1.148.591-1.614zm.842 6.461c-.388.01-.665.198-.87.355.002 1.798 0 4.127 0 6.223.586-.297 1.135-.644 1.793-.998-.005-1.454.002-3.137-.005-4.707a.904.904 0 0 0-.917-.873z'></path>
      </g>
    </svg>
  )
}

export function InstagramIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z'></path>
      <path d='M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z'></path>
      <circle cx='12.3' cy='3.7' r='.533'></circle>
    </svg>
  )
}

export function CourseraIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <polygon points='23.974 11.653 23.973 11.645 23.974 11.657'></polygon>
      <path d='M6.267,18.242c0.118,0.005,0.235,0.008,0.353,0.008c1.045,0,2.011-0.19,2.878-0.569c0.217-0.095,0.427-0.205,0.642-0.328c0.117-0.068,0.228-0.142,0.338-0.219l0.08-0.056l0.137-0.095c0.164-0.12,0.317-0.251,0.467-0.388l0.052-0.051c0.088-0.085,0.176-0.171,0.259-0.26l0.311-0.359l0.118-0.151l0.056-0.083l0.055-0.081c0.462-0.791,1.965-3.672,1.965-3.672v-0.006l0.09-0.175l0.074-0.138c0.222-0.411,0.382-0.703,0.594-1.009l0.006-0.01c0.493-0.731,1.344-1.251,2.346-1.339c1.68-0.148,3.152,0.978,3.287,2.513c0.135,1.537-1.117,2.902-2.798,3.05c-0.087,0.008-0.189,0.012-0.292,0.012c-0.255,0-0.503-0.029-0.742-0.083l0.023,0.004l-0.009,0.003c-1.232-0.262-2.017-1.178-2.404-1.589l-1.617,3.032c0,0,0.503,0.516,0.847,0.774c0.346,0.258,0.791,0.511,1.146,0.669c0.836,0.379,1.812,0.6,2.838,0.601c0.121,0,0.097,0,0.222-0.005c1.844-0.079,3.488-0.799,4.674-2.034c1.123-1.173,1.733-2.511,1.738-4.097v-0.048l-0.011-0.262v0.001c-0.004-0.107-0.01-0.204-0.02-0.3c-0.095-1.068-0.447-2.037-0.991-2.862c-0.26-0.396-0.545-0.743-0.862-1.053l-0.002-0.002c-0.469-0.457-1.01-0.842-1.603-1.136l-0.037-0.016c-0.875-0.43-1.903-0.681-2.988-0.681c-0.021,0-0.042,0-0.063,0c-0.001,0-0.002,0-0.003,0c-0.008,0-0.017,0-0.027,0c-0.886,0-1.734,0.162-2.52,0.455c-0.693,0.251-1.293,0.592-1.824,1.02c-0.12,0.1-0.227,0.195-0.33,0.293l0.004-0.003l-0.085,0.087L12.521,7.73h0.001l-0.056,0.056l-0.026,0.029L12.3,7.965c-0.104,0.119-0.202,0.239-0.296,0.356V8.319L12,8.315c-0.192,0.238-0.37,0.485-0.5,0.707c-0.089,0.143-0.176,0.289-0.259,0.435l-1.147,2.365l0.002,0.001l-0.06,0.12L9.91,12.204c-0.251,0.519-0.521,1.037-0.821,1.463c-0.672,0.751-1.431,1.12-2.406,1.12c-0.068,0-0.139-0.003-0.209-0.008c-0.588-0.023-1.092-0.165-1.539-0.435c-0.423-0.251-0.762-0.608-0.987-1.036l-0.007-0.014c-0.206-0.376-0.328-0.826-0.328-1.304c0-0.033,0.001-0.065,0.002-0.097v0.005l0.002-0.035c0.031-0.775,0.321-1.379,0.904-1.898c0.142-0.126,0.291-0.232,0.446-0.326c0.021-0.013,0.044-0.024,0.065-0.037C5.466,9.361,5.959,9.24,6.524,9.24L6.7,9.245c0.899,0.035,1.592,0.32,2.145,0.88l1.734-3.174c-0.403-0.275-0.864-0.519-1.352-0.708L9.18,6.227C9.161,6.22,9.14,6.211,9.12,6.205C9.058,6.182,8.997,6.159,8.934,6.138C8.432,5.963,7.849,5.838,7.245,5.786L7.218,5.784C7.185,5.78,7.175,5.778,7.162,5.777c-0.088-0.005-0.177-0.016-0.265-0.02C6.813,5.754,6.709,5.751,6.605,5.75H6.6H6.545c-0.011,0-0.025,0-0.038,0c-1.071,0-2.085,0.247-2.994,0.685C2.485,6.941,1.64,7.693,1.03,8.619L1.016,8.642C0.38,9.599,0,10.779,0,12.05c0,0.014,0,0.026,0,0.039c-0.002,1.595,0.568,2.996,1.701,4.173C2.885,17.498,4.421,18.163,6.267,18.242z'></path>
      <polygon points='23.972 11.637 23.972 11.642 23.973 11.645'></polygon>
      <path d='M3.476 6.688c.012-.006.026-.01.038-.016C3.515 6.672 3.517 6.671 3.518 6.67L3.476 6.688zM7.145 6.153c.004 0 .014.002.019.002.003 0 .007.001.01.001L7.145 6.153z'></path>
      <polygon points='13.045 7.551 13.051 7.547 13.058 7.541'></polygon>
      <path d='M14.829 6.583c.015-.006.031-.009.047-.015.002-.001.003-.001.004-.002L14.829 6.583zM22.971 8.818c.004.005.006.012.01.017.001.001.002.003.003.004L22.971 8.818z'></path>
    </svg>
  )
}

export function DiscordIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      {...props}
    >
      <path
        id='Layer_2'
        d='M85.778,24.561c-11.641-8.71-22.793-8.466-22.793-8.466s-1.14,1.302-1.14,1.302c13.839,4.152,20.27,10.257,20.27,10.257
		c-19.799-10.901-45.019-10.823-65.613,0c0,0,6.675-6.431,21.328-10.583c0,0-0.814-0.977-0.814-0.977s-11.071-0.244-22.793,8.466
		c0,0-11.722,21.084-11.722,47.052c0,0,6.838,11.722,24.829,12.292c0,0,3.012-3.582,5.454-6.675
		c-10.339-3.093-14.246-9.524-14.246-9.524c6.495,4.064,13.063,6.608,21.247,8.222c13.316,2.741,29.879-0.077,42.249-8.222
		c0,0-4.07,6.594-14.734,9.606c2.442,3.012,5.373,6.512,5.373,6.512C90.662,83.254,97.5,71.532,97.5,71.613
		C97.5,45.645,85.778,24.561,85.778,24.561z M34.818,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.333-11.892,16.357-11.855,16.607,0
		C43.121,60.054,39.458,64.043,34.818,64.043z M64.531,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.366-11.869,16.19-11.874,16.607,0
		C72.834,60.054,69.171,64.043,64.531,64.043z'
      ></path>
    </svg>
  )
}

export function GmailIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      {...props}
    >
      <path d='M14.5 2h-13A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm-1.766 1L8 6.738 3.266 3h9.468zM2 13V4.646l6 4.615 6-4.616V13H2z'></path>
    </svg>
  )
}
