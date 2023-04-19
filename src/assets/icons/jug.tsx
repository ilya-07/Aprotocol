import React from "react";

type Props = {};

const JugSVG = (props: Props) => {
  return (
    <svg
      width="36"
      height="38"
      viewBox="0 0 36 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_0_1764)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.87 12.8888C21.0582 12.7528 21.2348 12.5984 21.3857 12.4248C21.6602 12.1088 21.8889 11.6848 21.8889 11.1712C21.8889 10.6384 21.6423 10.2208 21.3266 9.9288C21.0263 9.6504 20.6483 9.4672 20.2874 9.3424C19.5633 9.0904 18.6938 9 18 9C17.3062 9 16.4367 9.0904 15.7126 9.3424C15.3517 9.4672 14.9737 9.6504 14.6734 9.9288C14.3577 10.2208 14.1111 10.6384 14.1111 11.1712C14.1111 11.6848 14.3398 12.1088 14.6143 12.424C14.7681 12.599 14.9412 12.755 15.13 12.8888C12.8083 14.0272 11 16.468 11 19.4C11 21.4448 11.7933 22.9088 13.1513 23.82C14.4541 24.6936 16.1878 25 18 25C19.8122 25 21.5467 24.6936 22.8487 23.82C24.2067 22.9088 25 21.444 25 19.4C25 16.468 23.1917 14.0272 20.87 12.8888Z"
          fill="#0041FF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.87 12.8888C21.0582 12.7528 21.2348 12.5984 21.3857 12.4248C21.6602 12.1088 21.8889 11.6848 21.8889 11.1712C21.8889 10.6384 21.6423 10.2208 21.3266 9.9288C21.0263 9.6504 20.6483 9.4672 20.2874 9.3424C19.5633 9.0904 18.6938 9 18 9C17.3062 9 16.4367 9.0904 15.7126 9.3424C15.3517 9.4672 14.9737 9.6504 14.6734 9.9288C14.3577 10.2208 14.1111 10.6384 14.1111 11.1712C14.1111 11.6848 14.3398 12.1088 14.6143 12.424C14.7681 12.599 14.9412 12.755 15.13 12.8888C12.8083 14.0272 11 16.468 11 19.4C11 21.4448 11.7933 22.9088 13.1513 23.82C14.4541 24.6936 16.1878 25 18 25C19.8122 25 21.5467 24.6936 22.8487 23.82C24.2067 22.9088 25 21.444 25 19.4C25 16.468 23.1917 14.0272 20.87 12.8888Z"
          fill="url(#paint0_linear_0_1764)"
          // style="mix-blend-mode:overlay"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_0_1764"
          x="0"
          y="0"
          width="36"
          height="38"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="5.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.126389 0 0 0 0 0.495833 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1764"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1764"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_1764"
          x1="25"
          y1="25"
          x2="13.9806"
          y2="14.4349"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default JugSVG;
