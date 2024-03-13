import type { SVGProps } from "react"

export function Pause(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <title>Pause</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M46.677 64.652c0-9.362 7.132-17.387 16.447-17.394c9.315-.007 24.677.007 34.55.007c9.875 0 17.138 7.594 17.138 16.998c0 9.403-.083 119.094-.083 127.82c0 8.726-7.58 16.895-16.554 16.837c-8.975-.058-25.349.115-34.963.058c-9.614-.058-16.646-7.74-16.646-17.254c0-9.515.11-117.71.11-127.072zm14.759.818s-.09 118.144-.09 123.691c0 5.547 3.124 5.315 6.481 5.832c3.358.518 21.454.47 24.402.47c2.947 0 7.085-1.658 7.167-6.14c.08-4.483-.082-119.507-.082-123.249c0-3.742-4.299-4.264-7.085-4.66c-2.787-.395-25.796 0-25.796 0zm76.664-.793c.027-9.804 7.518-17.541 17.125-17.689c9.606-.147 25.283.148 35.004.148c9.72 0 17.397 8.52 17.397 17.77s-.178 117.809-.178 127c0 9.192-7.664 17.12-16.323 17.072c-8.66-.05-26.354 0-34.991.048c-8.638.05-17.98-8.582-18.007-17.783c-.027-9.201-.055-116.763-.027-126.566m16.917.554s-.089 118.145-.089 123.692c0 5.547 3.123 5.314 6.48 5.832c3.359.518 21.455.47 24.402.47c2.948 0 7.086-1.659 7.167-6.141c.081-4.482-.08-119.506-.08-123.248c0-3.742-4.3-4.265-7.087-4.66c-2.786-.396-25.796 0-25.796 0z"
      />
    </svg>
  )
}

export function Play(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <title>Play</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M59 61.922c0-9.768 13.016-15.432 22.352-11.615c10.695 7.017 101.643 58.238 109.869 65.076c8.226 6.838 10.585 17.695-.559 25.77c-11.143 8.074-99.712 60.203-109.31 64.73c-9.6 4.526-21.952-1.632-22.352-13.088c-.4-11.456 0-121.106 0-130.873m13.437 8.48c0 2.494-.076 112.852-.216 115.122c-.23 3.723 3 7.464 7.5 5.245c4.5-2.22 97.522-57.704 101.216-59.141c3.695-1.438 3.45-5.1 0-7.388C177.488 121.952 82.77 67.76 80 65.38c-2.77-2.381-7.563 1.193-7.563 5.023z"
      />
    </svg>
  )
}

export function Stop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <title>Stop</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M48.227 65.473c0-9.183 7.096-16.997 16.762-17.51c9.666-.513 116.887-.487 125.094-.487c8.207 0 17.917 9.212 17.917 17.71c0 8.499.98 117.936.49 126.609c-.49 8.673-9.635 15.995-17.011 15.995c-7.377 0-117.127-.327-126.341-.327c-9.214 0-17.472-7.793-17.192-16.1c.28-8.306.28-116.708.28-125.89zm15.951 4.684c-.153 3.953 0 112.665 0 116.19c0 3.524 3.115 5.959 7.236 6.156c4.12.198 112.165.288 114.852 0c2.686-.287 5.811-2.073 5.932-5.456c.12-3.383-.609-113.865-.609-116.89c0-3.025-3.358-5.84-6.02-5.924c-2.662-.085-110.503 0-114.155 0c-3.652 0-7.083 1.972-7.236 5.924"
      />
    </svg>
  )
}