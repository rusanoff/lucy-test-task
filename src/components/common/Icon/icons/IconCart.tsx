import { SVGProps } from 'react';

export const IconCart = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 19.0003V12.7275C4 11.623 4.89543 10.7275 6 10.7275H26C27.1046 10.7275 28 11.623 28 12.7275V19.0003C28 22.8663 24.866 26.0003 21 26.0003H11C7.13401 26.0003 4 22.8663 4 19.0003Z"
        stroke="#373737"
      />

      <path
        d="M10 15.0909V7.81818C10 4.60489 12.6049 2 15.8182 2V2C19.0315 2 21.6364 4.60489 21.6364 7.81818V14.3209V15.0909"
        stroke="#373737"
        strokeLinecap="round"
      />
    </svg>
  );
};
